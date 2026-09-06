import { describe, it } from "node:test";
import assert from "node:assert/strict";

function parseMinSimilarity(envVal) {
  return Number(envVal ?? "0");
}

function parseAllowedOrigins(corsEnv) {
  return corsEnv
    ? corsEnv.split(",").map(origin => origin.trim()).filter(Boolean)
    : ["http://localhost:5173"];
}

describe("RAG Configuration Parsing", () => {
  describe("RAG_MIN_SIMILARITY Parsing", () => {
    it("should default to 0 when unset (undefined or null)", () => {
      assert.equal(parseMinSimilarity(undefined), 0);
      assert.equal(parseMinSimilarity(null), 0);
    });

    it("should parse string '0' as numeric 0", () => {
      assert.equal(parseMinSimilarity("0"), 0);
    });

    it("should parse valid decimal similarity thresholds correctly", () => {
      assert.equal(parseMinSimilarity("0.65"), 0.65);
      assert.equal(parseMinSimilarity("0.70"), 0.70);
      assert.equal(parseMinSimilarity("0.85"), 0.85);
      assert.equal(parseMinSimilarity("1"), 1.0);
    });

    it("should evaluate non-numeric strings safely as NaN without crashing", () => {
      const parsed = parseMinSimilarity("invalid_string");
      assert.ok(Number.isNaN(parsed));
      // Ensure condition (parsed > 0) evaluates to false
      assert.equal(parsed > 0, false);
    });

    it("should handle negative values safely without enabling filtering", () => {
      const parsed = parseMinSimilarity("-0.5");
      assert.equal(parsed, -0.5);
      // In retriever.js: minSimilarity > 0 is false, so no filtering is applied
      assert.equal(parsed > 0, false);
    });
  });

  describe("CORS_ORIGIN Parsing", () => {
    it("should default to localhost:5173 when unset", () => {
      const origins = parseAllowedOrigins(undefined);
      assert.deepEqual(origins, ["http://localhost:5173"]);
    });

    it("should parse multiple comma-separated origins and trim whitespace", () => {
      const input = "http://localhost:5173, https://migraine-app.vercel.app, https://custom-domain.com";
      const origins = parseAllowedOrigins(input);
      assert.deepEqual(origins, [
        "http://localhost:5173",
        "https://migraine-app.vercel.app",
        "https://custom-domain.com"
      ]);
    });

    it("should filter out empty entries from trailing/duplicate commas", () => {
      const input = "http://localhost:5173,, https://app.com, ";
      const origins = parseAllowedOrigins(input);
      assert.deepEqual(origins, ["http://localhost:5173", "https://app.com"]);
    });
  });
});
