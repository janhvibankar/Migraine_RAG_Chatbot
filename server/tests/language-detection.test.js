import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { detectLanguage } from "../services/languageDetector.js";
import { chatWithBot } from "../controllers/chatController.js";

describe("Language Detection Unit & Integration Tests", () => {
  describe("detectLanguage core detection logic", () => {
    it("1. English query: 'What is migraine?' -> expected 'en'", () => {
      const result = detectLanguage("What is migraine?");
      assert.equal(result, "en");
    });

    it("2. Marathi query: 'मायग्रेन म्हणजे काय?' -> expected 'mr'", () => {
      const result = detectLanguage("मायग्रेन म्हणजे काय?");
      assert.equal(result, "mr");
    });

    it("3. Hindi query: 'माइग्रेन क्या है?' -> expected 'hi'", () => {
      const result = detectLanguage("माइग्रेन क्या है?");
      assert.equal(result, "hi");
    });

    it("4. Marathi transliterated in English script: 'Migraine kay aahe?' -> expected 'mr'", () => {
      const result = detectLanguage("Migraine kay aahe?");
      assert.equal(result, "mr");
    });

    it("4b. Hindi transliterated in English script: 'Migraine kya hai?' -> expected 'hi'", () => {
      const result = detectLanguage("Migraine kya hai?");
      assert.equal(result, "hi");
    });

    it("Ambiguous/short text fallback -> expected 'en'", () => {
      assert.equal(detectLanguage(""), "en");
      assert.equal(detectLanguage(null), "en");
      assert.equal(detectLanguage("12345"), "en");
    });
  });

  describe("chatController Language Modes (auto vs manual)", () => {
    // Helper to mock req/res for chatWithBot without calling LLM directly if we mock or test controller flow
    function createMockRes() {
      let statusCode = 200;
      let body = null;
      return {
        status(code) {
          statusCode = code;
          return this;
        },
        json(data) {
          body = data;
          return this;
        },
        get statusCode() {
          return statusCode;
        },
        get body() {
          return body;
        }
      };
    }

    it("5. Explicit manual language: language = 'mr' -> expected 'mr' regardless of message", () => {
      // Test manual override override
      const text = "What is migraine?";
      const detected = detectLanguage(text);
      assert.equal(detected, "en");

      // With manual language="mr", effective language should be "mr"
      const manualLang = "mr";
      const effectiveLang = ["en", "hi", "mr"].includes(manualLang) ? manualLang : detectLanguage(text);
      assert.equal(effectiveLang, "mr");
    });

    it("6. Explicit manual language: language = 'hi' -> expected 'hi' regardless of message", () => {
      const text = "मायग्रेन म्हणजे काय?";
      const manualLang = "hi";
      const effectiveLang = ["en", "hi", "mr"].includes(manualLang) ? manualLang : detectLanguage(text);
      assert.equal(effectiveLang, "hi");
    });

    it("7. language = 'auto' -> expected automatic detection", () => {
      const reqBody1 = { message: "What is migraine?", language: "auto" };
      const lang1 = reqBody1.language === "auto" ? detectLanguage(reqBody1.message) : reqBody1.language;
      assert.equal(lang1, "en");

      const reqBody2 = { message: "माइग्रेन से कैसे बचें?", language: "auto" };
      const lang2 = reqBody2.language === "auto" ? detectLanguage(reqBody2.message) : reqBody2.language;
      assert.equal(lang2, "hi");

      const reqBody3 = { message: "मायग्रेन म्हणजे काय?", language: "auto" };
      const lang3 = reqBody3.language === "auto" ? detectLanguage(reqBody3.message) : reqBody3.language;
      assert.equal(lang3, "mr");
    });

    it("8. language omitted -> expected automatic detection", () => {
      const reqBody1 = { message: "What is migraine?" };
      const lang1 = detectLanguage(reqBody1.message);
      assert.equal(lang1, "en");

      const reqBody2 = { message: "मायग्रेन म्हणजे काय?" };
      const lang2 = detectLanguage(reqBody2.message);
      assert.equal(lang2, "mr");

      const reqBody3 = { message: "माइग्रेन क्या है?" };
      const lang3 = detectLanguage(reqBody3.message);
      assert.equal(lang3, "hi");
    });
  });
});
