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

async function buildRegistry() {
  const sandbox = { window: {}, console };
  const loaderContent = await readFile(path.join(REPO_ROOT, "ubs-loader.js"), "utf8");
  runInNewContext(loaderContent, sandbox, { filename: "ubs-loader.js" });
  sandbox.registerUBSQuestions = sandbox.window.registerUBSQuestions;

  const questionFiles = await loadQuestionFiles();
  assert.ok(questionFiles.length > 0, "UB*-prefixed question files are required");

  for (const filePath of questionFiles) {
    const content = await readFile(filePath, "utf8");
    const wrapped = `(function(){\n${content}\n})();`;
    runInNewContext(wrapped, sandbox, { filename: path.basename(filePath) });
  }

  return sandbox.window.UBS_REGISTRY || [];
}

test("Newly added question sets are well-structured", async (t) => {
  const registry = await buildRegistry();
  assert.ok(registry.length > 0, "No question sets were registered.");

  registry.forEach((set, setIndex) => {
    const setLabel = `${set.prefix || "Toplum"} [${set.grade || "-"}${
      set.test || "-"
    }] #${setIndex + 1}`;
    assert.ok(Array.isArray(set.questions), `${setLabel}: questions must be an array`);
    assert.ok(set.questions.length > 0, `${setLabel}: at least one question required`);

    set.questions.forEach((question, index) => {
      const label = `${setLabel} [q${index + 1}]`;
      assert.equal(typeof question.prompt, "string", `${label}: prompt must be a string`);
      assert.ok(question.prompt.trim().length > 0, `${label}: prompt cannot be empty`);

      assert.ok(Array.isArray(question.options), `${label}: options must be an array`);
      assert.ok(question.options.length >= 2, `${label}: at least two options are required`);

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

      assert.equal(typeof question.answer, "string", `${label}: answer must be a string`);
      const normalizedAnswer = question.answer.trim();
      assert.ok(normalizedAnswer.length > 0, `${label}: answer cannot be empty`);
      assert.ok(uniqueOptions.has(normalizedAnswer), `${label}: answer must match options`);
    });
  });
});
