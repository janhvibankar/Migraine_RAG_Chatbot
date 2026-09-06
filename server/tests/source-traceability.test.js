import { describe, it } from "node:test";
import assert from "node:assert/strict";

// Pure functions reflecting ragService.js and generateAnswer.js context assembly
function extractUniqueSources(docs) {
  if (!Array.isArray(docs)) return [];
  return [...new Set(docs.map(doc => doc.fileName).filter(Boolean))];
}

function formatContextChunks(context) {
  if (Array.isArray(context) && context.length > 0) {
    return context
      .map((doc) => `Source: ${doc.fileName || "Unknown"}\nContent:\n${doc.text || ""}`)
      .join("\n\n---\n\n");
  }
  return typeof context === "string" && context.length > 0
    ? context
    : "No retrieved context available.";
}

describe("Source Traceability & Context Formatting", () => {
  it("should deduplicate multiple chunks originating from the same file", () => {
    const docs = [
      { chunkId: 1, fileName: "migraine_basics.md", text: "Chunk 1 content" },
      { chunkId: 2, fileName: "migraine_basics.md", text: "Chunk 2 content" },
      { chunkId: 1, fileName: "hydration.md", text: "Chunk 3 content" }
    ];

    const sources = extractUniqueSources(docs);
    assert.deepEqual(sources, ["migraine_basics.md", "hydration.md"]);
    assert.equal(sources.length, 2);
  });

  it("should preserve unique source fileNames across distinct documents", () => {
    const docs = [
      { fileName: "symptoms.md" },
      { fileName: "triggers.md" },
      { fileName: "sleep.md" },
      { fileName: "treatments.md" },
      { fileName: "emergency.md" }
    ];

    const sources = extractUniqueSources(docs);
    assert.equal(sources.length, 5);
    assert.deepEqual(sources, ["symptoms.md", "triggers.md", "sleep.md", "treatments.md", "emergency.md"]);
  });

  it("should return empty array for empty document list", () => {
    assert.deepEqual(extractUniqueSources([]), []);
  });

  it("should format retrieved context with explicit Source and Content headers", () => {
    const docs = [
      { fileName: "nutrition.md", text: "Magnesium deficiency can trigger migraine." },
      { fileName: "sleep.md", text: "Consistent sleep schedules reduce attack frequency." }
    ];

    const formatted = formatContextChunks(docs);
    assert.ok(formatted.includes("Source: nutrition.md"));
    assert.ok(formatted.includes("Content:\nMagnesium deficiency can trigger migraine."));
    assert.ok(formatted.includes("---"));
    assert.ok(formatted.includes("Source: sleep.md"));
  });

  it("should use 'Unknown' as fallback when fileName is missing in chunk", () => {
    const docs = [{ text: "Some medical context without metadata" }];
    const formatted = formatContextChunks(docs);
    assert.ok(formatted.includes("Source: Unknown"));
  });

  it("should provide safe fallback text when context is empty or null", () => {
    assert.equal(formatContextChunks([]), "No retrieved context available.");
    assert.equal(formatContextChunks(null), "No retrieved context available.");
    assert.equal(formatContextChunks(""), "No retrieved context available.");
  });
});
