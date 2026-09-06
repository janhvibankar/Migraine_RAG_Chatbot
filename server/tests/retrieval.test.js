import { describe, it } from "node:test";
import assert from "node:assert/strict";

// Pure function mirroring the filtering logic in server/rag/retriever.js
function filterRetrievedDocs(rawResults, minSimilarityStr) {
  const minSimilarity = Number(minSimilarityStr ?? "0");
  return minSimilarity > 0
    ? rawResults.filter(doc => (doc.score ?? 0) >= minSimilarity)
    : rawResults;
}

describe("Retrieval Result Logic & Threshold Filtering", () => {
  const mockDocs = [
    { chunkId: 1, fileName: "symptoms.md", folder: "basics", text: "Nausea and light sensitivity", score: 0.88 },
    { chunkId: 2, fileName: "triggers.md", folder: "triggers", text: "Stress and dehydration triggers", score: 0.82 },
    { chunkId: 3, fileName: "sleep.md", folder: "sleep", text: "Lack of REM sleep", score: 0.74 },
    { chunkId: 4, fileName: "hydration.md", folder: "nutrition", text: "Electrolytes and water intake", score: 0.62 },
    { chunkId: 5, fileName: "random.md", folder: "misc", text: "Unrelated text fragment", score: 0.51 }
  ];

  it("should keep all documents when minSimilarity is unset (defaults to 0)", () => {
    const results = filterRetrievedDocs(mockDocs, undefined);
    assert.equal(results.length, 5);
  });

  it("should keep all documents when minSimilarity is 0", () => {
    const results = filterRetrievedDocs(mockDocs, "0");
    assert.equal(results.length, 5);
  });

  it("should filter out documents below the configured threshold", () => {
    const results = filterRetrievedDocs(mockDocs, "0.75");
    assert.equal(results.length, 2);
    assert.equal(results[0].fileName, "symptoms.md");
    assert.equal(results[1].fileName, "triggers.md");
  });

  it("should return empty array when all documents score below threshold", () => {
    const results = filterRetrievedDocs(mockDocs, "0.95");
    assert.equal(results.length, 0);
  });

  it("should treat missing or null score as 0 when threshold is active", () => {
    const docsWithMissingScore = [
      { chunkId: 1, fileName: "doc1.md", score: 0.85 },
      { chunkId: 2, fileName: "doc2.md" }, // missing score
      { chunkId: 3, fileName: "doc3.md", score: null } // null score
    ];

    const results = filterRetrievedDocs(docsWithMissingScore, "0.50");
    assert.equal(results.length, 1);
    assert.equal(results[0].fileName, "doc1.md");
  });

  it("should preserve all required metadata fields in filtered documents", () => {
    const results = filterRetrievedDocs(mockDocs, "0.80");
    for (const doc of results) {
      assert.ok(doc.fileName, "Must have fileName");
      assert.ok(doc.folder, "Must have folder");
      assert.ok(typeof doc.chunkId === "number", "Must have chunkId");
      assert.ok(doc.text, "Must have text content");
      assert.ok(typeof doc.score === "number", "Must have score");
    }
  });
});
