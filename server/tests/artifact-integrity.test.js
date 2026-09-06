import { describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe("RAG Offline Artifact Integrity (Read-Only)", () => {
  const chunksPath = path.resolve(__dirname, "../rag/chunks.json");
  const embeddingsPath = path.resolve(__dirname, "../rag/embeddings.json");

  it("chunks.json should exist and contain 456 valid chunk records", () => {
    assert.ok(fs.existsSync(chunksPath), "chunks.json must exist");
    const rawChunks = fs.readFileSync(chunksPath, "utf8");
    const chunks = JSON.parse(rawChunks);

    assert.ok(Array.isArray(chunks), "chunks.json must be an array");
    assert.equal(chunks.length, 456, "Expected exactly 456 knowledge chunks");

    for (let i = 0; i < chunks.length; i++) {
      const c = chunks[i];
      assert.ok(c.fileName, `Chunk #${i} missing fileName`);
      assert.ok(c.folder, `Chunk #${i} missing folder`);
      assert.ok(typeof c.chunkId === "number", `Chunk #${i} missing chunkId`);
      assert.ok(typeof c.text === "string" && c.text.trim().length > 0, `Chunk #${i} has empty text`);
    }
  });

  it("embeddings.json should exist, contain 456 items, and maintain 3072 vector dimensions", () => {
    assert.ok(fs.existsSync(embeddingsPath), "embeddings.json must exist");
    const rawEmbeddings = fs.readFileSync(embeddingsPath, "utf8");
    const embeddings = JSON.parse(rawEmbeddings);

    assert.ok(Array.isArray(embeddings), "embeddings.json must be an array");
    assert.equal(embeddings.length, 456, "Expected exactly 456 embedding records");

    for (let i = 0; i < embeddings.length; i++) {
      const e = embeddings[i];
      assert.ok(e.fileName, `Embedding #${i} missing fileName`);
      assert.ok(e.folder, `Embedding #${i} missing folder`);
      assert.ok(typeof e.chunkId === "number", `Embedding #${i} missing chunkId`);
      assert.ok(Array.isArray(e.embedding), `Embedding #${i} vector must be an array`);
      assert.equal(e.embedding.length, 3072, `Embedding #${i} must have 3072 dimensions`);

      // Verify no NaN or null entries in vector floats
      const hasInvalid = e.embedding.some(v => typeof v !== "number" || Number.isNaN(v));
      assert.equal(hasInvalid, false, `Embedding #${i} contains invalid float values`);
    }
  });

  it("should maintain 1-to-1 key alignment between chunks.json and embeddings.json", () => {
    const chunks = JSON.parse(fs.readFileSync(chunksPath, "utf8"));
    const embeddings = JSON.parse(fs.readFileSync(embeddingsPath, "utf8"));

    const chunkKeys = chunks.map(c => `${c.folder}|${c.fileName}|${c.chunkId}`);
    const embeddingKeys = new Set(embeddings.map(e => `${e.folder}|${e.fileName}|${e.chunkId}`));

    assert.equal(chunkKeys.length, embeddings.length);
    for (const key of chunkKeys) {
      assert.ok(embeddingKeys.has(key), `Missing embedding for chunk key: ${key}`);
    }
  });
});
