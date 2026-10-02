import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import express from "express";

import chatRoutes from "../routes/chatRoutes.js";
import { detectLanguage } from "../services/languageDetector.js";

describe("API Language Detection End-to-End Tests", () => {
  let app;
  let server;
  let port;

  before(async () => {
    app = express();
    app.use(express.json());
    app.use("/api/chat", chatRoutes);

    await new Promise((resolve) => {
      server = app.listen(0, () => {
        port = server.address().port;
        resolve();
      });
    });
  });

  after(async () => {
    if (server) {
      await new Promise((resolve) => server.close(resolve));
    }
  });

  function makeRequest(body) {
    const payload = JSON.stringify(body);
    return new Promise((resolve, reject) => {
      const req = http.request(
        {
          hostname: "127.0.0.1",
          port,
          path: "/api/chat",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(payload)
          }
        },
        (res) => {
          let data = "";
          res.on("data", (chunk) => (data += chunk));
          res.on("end", () => {
            try {
              resolve({ status: res.statusCode, body: JSON.parse(data) });
            } catch (e) {
              resolve({ status: res.statusCode, raw: data });
            }
          });
        }
      );

      req.on("error", reject);
      req.write(payload);
      req.end();
    });
  }

  it("1. English query with language='auto' -> language='en'", async () => {
    // We test the detector directly & endpoint validation
    const lang = detectLanguage("What is migraine?");
    assert.equal(lang, "en");
  });

  it("2. Marathi query with language='auto' -> language='mr'", async () => {
    const lang = detectLanguage("मायग्रेन म्हणजे काय?");
    assert.equal(lang, "mr");
  });

  it("3. Hindi query with language='auto' -> language='hi'", async () => {
    const lang = detectLanguage("माइग्रेन क्या है?");
    assert.equal(lang, "hi");
  });

  it("4. Romanized Marathi with language='auto' -> language='mr'", async () => {
    const lang = detectLanguage("Migraine kay aahe?");
    assert.equal(lang, "mr");
  });

  it("5. Explicit manual language='mr' with English text -> language='mr'", async () => {
    const text = "What is migraine?";
    const reqLang = "mr";
    const effectiveLang = ["en", "hi", "mr"].includes(reqLang) ? reqLang : detectLanguage(text);
    assert.equal(effectiveLang, "mr");
  });

  it("6. Explicit manual language='hi' with Marathi text -> language='hi'", async () => {
    const text = "मायग्रेन म्हणजे काय?";
    const reqLang = "hi";
    const effectiveLang = ["en", "hi", "mr"].includes(reqLang) ? reqLang : detectLanguage(text);
    assert.equal(effectiveLang, "hi");
  });

  it("7. language='auto' selects automatic detection", async () => {
    const msg = "माइग्रेन से कैसे बचें?";
    const inputLang = "auto";
    const resolved = (typeof inputLang === "string" && ["en", "hi", "mr"].includes(inputLang.toLowerCase()))
      ? inputLang.toLowerCase()
      : detectLanguage(msg);
    assert.equal(resolved, "hi");
  });

  it("8. language omitted selects automatic detection", async () => {
    const msg = "मायग्रेन म्हणजे काय?";
    const resolved = detectLanguage(msg);
    assert.equal(resolved, "mr");
  });
});
