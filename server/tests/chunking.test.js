import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { cleanText } from "../rag/cleaner.js";
import { chunkText } from "../rag/chunker.js";

describe("Text Cleaning (cleaner.js)", () => {
  it("should convert Windows CRLF line endings to LF", () => {
    const input = "Line 1\r\nLine 2\r\nLine 3";
    const cleaned = cleanText(input);
    assert.equal(cleaned.includes("\r"), false);
  });

  it("should collapse multiple consecutive newlines and spaces", () => {
    const input = "Hello   world!\n\n\nHow    are you?";
    const cleaned = cleanText(input);
    assert.equal(cleaned, "Hello world! How are you?");
  });

  it("should trim leading and trailing whitespace", () => {
    const input = "   \t  Migraine symptoms include nausea.   \n\n  ";
    const cleaned = cleanText(input);
    assert.equal(cleaned, "Migraine symptoms include nausea.");
  });

  it("should handle empty string without errors", () => {
    assert.equal(cleanText(""), "");
    assert.equal(cleanText("   "), "");
  });
});

describe("Text Chunking (chunker.js)", () => {
  it("should return single chunk when word count is less than or equal to step size (250 words)", () => {
    const text = Array.from({ length: 250 }, (_, i) => `w${i + 1}`).join(" ");
    const chunks = chunkText(text, 300, 50);
    assert.equal(chunks.length, 1);
    assert.equal(chunks[0].split(/\s+/).length, 250);
  });

  it("should create sliding window chunks with step = chunkSize - overlap", () => {
    // For 300 words with chunkSize=300, overlap=50 (step=250):
    // Chunk 1 starts at i=0 (300 words)
    // Chunk 2 starts at i=250 (50 trailing words)
    const text = Array.from({ length: 300 }, (_, i) => `w${i}`).join(" ");
    const chunks = chunkText(text, 300, 50);
    assert.equal(chunks.length, 2);
    assert.equal(chunks[0].split(/\s+/).length, 300);
    assert.equal(chunks[1].split(/\s+/).length, 50);
  });

  it("should create multiple chunks with correct step and overlap for longer text", () => {
    // 550 words with chunkSize=300, overlap=50 (step=250)
    // Chunk 1: indices 0..299 (300 words)
    // Chunk 2: indices 250..549 (300 words)
    // Chunk 3: indices 500..549 (50 words)
    const words = Array.from({ length: 550 }, (_, i) => `w${i}`);
    const text = words.join(" ");
    const chunks = chunkText(text, 300, 50);

    assert.equal(chunks.length, 3);
    const chunk1Words = chunks[0].split(/\s+/);
    const chunk2Words = chunks[1].split(/\s+/);
    const chunk3Words = chunks[2].split(/\s+/);

    assert.equal(chunk1Words.length, 300);
    assert.equal(chunk1Words[0], "w0");
    assert.equal(chunk1Words[299], "w299");

    assert.equal(chunk2Words.length, 300);
    assert.equal(chunk2Words[0], "w250"); // Starts at step 250
    assert.equal(chunk2Words[299], "w549");

    assert.equal(chunk3Words.length, 50);
    assert.equal(chunk3Words[0], "w500"); // Starts at step 500
    assert.equal(chunk3Words[49], "w549");
  });

  it("should not produce any empty chunks from standard non-empty text", () => {
    const text = "Sample text for chunking test purposes.";
    const chunks = chunkText(text, 300, 50);
    assert.equal(chunks.length, 1);
    assert.ok(chunks[0].length > 0);
  });
});
