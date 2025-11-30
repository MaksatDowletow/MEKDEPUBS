import assert from "node:assert/strict";
import path from "node:path";
import { readFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { runInNewContext } from "node:vm";
import test from "node:test";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, "..");

async function loadQuestionFiles() {
  const entries = await readdir(REPO_ROOT);
  return entries
    .filter((name) => name.startsWith("UB") && name.endsWith(".js"))
    .map((name) => path.join(REPO_ROOT, name));
}

async function loadQuestionsFromFile(filePath) {
  const content = await readFile(filePath, "utf8");
  const sandbox = {};
  const wrapped = `${content}\n;globalThis.__capturedQuestions = questions;`;
  runInNewContext(wrapped, sandbox, { filename: path.basename(filePath) });
  return sandbox.__capturedQuestions;
}

test("Newly added question sets are well-structured", async (t) => {
  const questionFiles = await loadQuestionFiles();
  assert.ok(
    questionFiles.length > 0,
    "No UB*-prefixed question files were found for validation."
  );

  for (const filePath of questionFiles) {
    const fileName = path.basename(filePath);
    await t.test(fileName, async () => {
      const questions = await loadQuestionsFromFile(filePath);
      assert.ok(Array.isArray(questions), "`questions` must be an array");
      assert.ok(questions.length > 0, "Each file must contain at least one question");

      questions.forEach((question, index) => {
        const label = `${fileName} [q${index + 1}]`;
        assert.equal(
          typeof question.prompt,
          "string",
          `${label}: prompt must be a string`
        );
        assert.ok(
          question.prompt.trim().length > 0,
          `${label}: prompt cannot be empty`
        );

        assert.ok(
          Array.isArray(question.options),
          `${label}: options must be an array`
        );
        assert.ok(
          question.options.length >= 2,
          `${label}: at least two options are required`
        );

        const normalizedOptions = question.options.map((option, optIndex) => {
          assert.equal(
            typeof option,
            "string",
            `${label}: option ${optIndex + 1} must be a string`
          );
          const trimmed = option.trim();
          assert.ok(trimmed.length > 0, `${label}: option ${optIndex + 1} is empty`);
          return trimmed;
        });

        const uniqueOptions = new Set(normalizedOptions);
        assert.equal(
          uniqueOptions.size,
          normalizedOptions.length,
          `${label}: options must be unique`
        );

        assert.equal(
          typeof question.answer,
          "string",
          `${label}: answer must be a string`
        );
        const normalizedAnswer = question.answer.trim();
        assert.ok(normalizedAnswer.length > 0, `${label}: answer cannot be empty`);
        assert.ok(
          uniqueOptions.has(normalizedAnswer),
          `${label}: answer must match one of the options`
        );
      });
    });
  }
});
