from __future__ import annotations
import json
import re
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

ROOT = Path(__file__).parent
DOCX_FILES = sorted(ROOT.glob("*.docx"))


def extract_text(docx_path: Path) -> str:
    """Extract raw text from a DOCX file by reading document.xml directly."""
    with zipfile.ZipFile(docx_path) as zf:
        raw = zf.read("word/document.xml").decode("utf-8")
    parts = re.findall(r"<w:t[^>]*>(.*?)</w:t>", raw)
    return " ".join(parts)


def extract_runs(docx_path: Path):
    """Return a flat list of (text, is_bold) runs to preserve simple styling cues."""
    with zipfile.ZipFile(docx_path) as zf:
        raw = zf.read("word/document.xml").decode("utf-8")

    root = ET.fromstring(raw)
    ns = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
    runs = []

    for paragraph in root.findall(".//w:body/w:p", ns):
        for run in paragraph.findall("w:r", ns):
            texts = [t.text for t in run.findall("w:t", ns) if t.text]
            if not texts:
                continue
            text = "".join(texts)
            if not text.strip():
                continue
            is_bold = run.find("w:rPr/w:b", ns) is not None
            runs.append((text, is_bold))
        runs.append((" ", False))

    return runs


def clean_text(text: str) -> str:
    """Strip XML remnants and collapse whitespace."""
    text = re.sub(r"<[^>]+>", " ", text)
    return re.sub(r"\s+", " ", text).strip()


def detect_subject(text: str, default: str) -> str:
    """Use the preamble before the first numbered question as a subject label."""
    match = re.search(r"^(.*?)\s*1\.", text)
    if match:
        subject = match.group(1).strip(" .:_")
        if subject:
            return subject
    return default


def parse_questions(text: str):
    """Parse numbered questions and multiple-choice options from flattened text."""
    questions = []
    for match in re.finditer(r"(\d+)\.\s*(.*?)(?=\s\d+\.\s|$)", text, flags=re.S):
        body = match.group(2).strip()
        if not body:
            continue
        prompt_part = body
        option_section = ""
        if "a)" in body:
            prompt_part, option_section = body.split("a)", 1)
        prompt = clean_text(prompt_part.strip(" .:\n"))

        options = []
        option_blob = ("a)" + option_section) if option_section else ""
        for opt_match in re.finditer(r"([a-d])\)\s*(.*?)(?=(?:\s[a-d]\)|$))", option_blob, flags=re.I | re.S):
            opt_text = clean_text(opt_match.group(2))
            if opt_text:
                options.append(opt_text)

        if not options and option_section:
            remainder = clean_text(option_section)
            if remainder:
                options.append(remainder)

        answer = options[0] if options else None
        questions.append({
            "prompt": prompt or "Sorag berilmedi",
            "options": options,
            "answer": answer,
        })
    return questions


def parse_questions_with_styles(runs):
    """Parse questions while inferring correct answers from bolded options."""

    combined_parts = []
    spans = []
    cursor = 0
    for text, is_bold in runs:
        if combined_parts and not combined_parts[-1].endswith(" "):
            text = " " + text
        combined_parts.append(text)
        start = cursor
        cursor += len(text)
        spans.append((start, cursor, is_bold))

    combined_text = "".join(combined_parts)
    normalized_text = clean_text(combined_text)

    def has_bold(start, end):
        for span_start, span_end, is_bold in spans:
            if not is_bold:
                continue
            if span_start < end and span_end > start:
                return True
        return False

    parsed = []
    for match in re.finditer(r"(\d+)\.\s*(.*?)(?=\s\d+\.\s|$)", combined_text, flags=re.S):
        body = match.group(2).strip()
        if not body:
            continue
        prompt_part = body
        option_section = ""
        if "a)" in body:
            prompt_part, option_section = body.split("a)", 1)
        prompt = clean_text(prompt_part.strip(" .:\n"))

        options = []
        bold_answer = None
        option_blob = ("a)" + option_section) if option_section else ""
        for opt_match in re.finditer(r"([a-d])\)\s*(.*?)(?=(?:\s[a-d]\)|$))", option_blob, flags=re.I | re.S):
            opt_text_raw = opt_match.group(2)
            opt_text = clean_text(opt_text_raw)
            if not opt_text:
                continue
            options.append(opt_text)
            if bold_answer:
                continue
            opt_start, opt_end = opt_match.span(2)
            if has_bold(opt_start, opt_end):
                bold_answer = opt_text

        if not options and option_section:
            remainder = clean_text(option_section)
            if remainder:
                options.append(remainder)

        answer = bold_answer or (options[0] if options else None)
        parsed.append({
            "prompt": prompt or "Sorag berilmedi",
            "options": options,
            "answer": answer,
        })

    if parsed:
        return parsed

    return parse_questions(normalized_text)


def derive_metadata(path: Path):
    """Infer grade, test letter, and prefix from the filename."""
    name = path.stem
    grade_match = re.search(r"(\d+)", name)
    grade = grade_match.group(1) if grade_match else None
    test_match = re.search(r"[Tt]est\s*([A-Za-zА-Яа-я])", name)
    test = test_match.group(1).upper() if test_match else None
    prefix = name.split()[0] if name else "Toplum"
    return grade, test, prefix


def build_question_bank():
    question_sets = []
    for docx in DOCX_FILES:
        runs = extract_runs(docx)
        raw_text = "".join([text for text, _ in runs])
        cleaned = clean_text(raw_text)
        grade, test, prefix = derive_metadata(docx)
        subject = detect_subject(cleaned, docx.stem)
        questions = parse_questions_with_styles(runs)
        question_sets.append(
            {
                "title": docx.name,
                "grade": grade,
                "test": test,
                "prefix": prefix,
                "subject": subject,
                "questions": questions,
            }
        )
    return question_sets


def write_outputs(question_sets):
    json_path = ROOT / "question-bank.json"
    with json_path.open("w", encoding="utf-8") as f:
        json.dump(question_sets, f, ensure_ascii=False, indent=2)

    js_content = "window.questionBankData = " + json.dumps(
        question_sets, ensure_ascii=False, indent=2
    )
    js_path = ROOT / "question-bank.js"
    with js_path.open("w", encoding="utf-8") as f:
        f.write(js_content + "\n")


def main():
    question_sets = build_question_bank()
    write_outputs(question_sets)
    print(f"Generated {len(question_sets)} sets from {len(DOCX_FILES)} files")


if __name__ == "__main__":
    main()
