import json
import re
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

DOCX_NS = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
MARKER_RE = re.compile(r'[abcçdegh]\)', re.IGNORECASE)


def extract_lines(path: Path):
    with zipfile.ZipFile(path) as zf:
        xml = zf.read('word/document.xml')
    root = ET.fromstring(xml)
    lines = []
    for para in root.iter(DOCX_NS + 'p'):
        text_parts = []
        for t in para.iter(DOCX_NS + 't'):
            if t.text:
                text_parts.append(t.text)
        if text_parts:
            merged = ''.join(text_parts).strip()
            if merged:
                lines.append(merged)
    return lines


def infer_grade_and_variant(name: str):
    grade_match = re.search(r'(\d+)\s*synp', name, flags=re.IGNORECASE)
    grade = int(grade_match.group(1)) if grade_match else None
    variant_match = re.search(r'Test\s*([AB])', name, flags=re.IGNORECASE)
    variant = variant_match.group(1).upper() if variant_match else None
    return grade, variant

OPTION_RE = re.compile(r'^[abcçdegh]\)?\s*', re.IGNORECASE)
QUESTION_RE = re.compile(r'^(\d{1,3})[\.)]\s*(.*)')


def split_inline_options(text: str):
    markers = list(MARKER_RE.finditer(text))
    fragments = []
    start = 0
    for m in markers:
        chunk = text[start:m.start()]
        if chunk.strip():
            fragments.append(chunk.strip())
        start = m.end()
    tail = text[start:]
    if tail.strip():
        fragments.append(tail.strip())
    return fragments


def parse_questions(lines):
    questions = []
    current = None
    for raw in lines:
        line = raw.strip()
        q_match = QUESTION_RE.match(line)
        if q_match:
            if current:
                questions.append(current)
            number = int(q_match.group(1))
            text = q_match.group(2).strip()
            current = {
                'number': number,
                'text': text,
                'options': [],
                'correct': None,
            }
            continue
        if current and OPTION_RE.match(line):
            option_text = OPTION_RE.sub('', line).strip()
            current['options'].extend(split_inline_options(option_text))
            continue
        if current:
            if current['options']:
                current['options'][-1] = (current['options'][-1] + ' ' + line).strip()
            else:
                current['text'] = (current['text'] + ' ' + line).strip()
    if current:
        questions.append(current)
    return questions


def detect_sections(lines):
    section_titles = []
    for line in lines:
        if line.isupper() or line.endswith('dili') or 'Matematika' in line or 'Informatika' in line:
            if len(line) < 40:
                cleaned = line.strip('_ ').replace('______', '').strip()
                if cleaned:
                    section_titles.append(cleaned)
    return section_titles


def main():
    tests = []
    for path in sorted(Path('.').glob('*.docx')):
        lines = extract_lines(path)
        grade, variant = infer_grade_and_variant(path.name)
        tests.append({
            'id': path.stem.replace(' ', '-').lower(),
            'file': path.name,
            'grade': grade,
            'variant': variant,
            'sections': detect_sections(lines),
            'questions': parse_questions(lines),
            'rawText': lines,
        })
    data = {'tests': tests}
    Path('data').mkdir(exist_ok=True)
    with open('data/tests.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Extracted {len(tests)} tests -> data/tests.json")


if __name__ == '__main__':
    main()
