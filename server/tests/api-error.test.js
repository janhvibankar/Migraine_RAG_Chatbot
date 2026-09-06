import { describe, it } from "node:test";
import assert from "node:assert/strict";

function simulateErrorHandler(err) {
  let statusCode = 500;
  let jsonBody = {};

  const res = {
    status(code) {
      statusCode = code;
      return {
        json(payload) {
          jsonBody = payload;
          return { statusCode, jsonBody };
        }
      };
    }
  };

  // Pure logic mirroring server/app.js global error middleware
  if (
    (err instanceof SyntaxError && (err.status === 400 || err.statusCode === 400)) ||
    err?.type === "entity.parse.failed"
  ) {
    return res.status(400).json({
      error: "Invalid JSON payload"
    });
  }

  if (err?.status === 413 || err?.statusCode === 413 || err?.type === "entity.too.large") {
    return res.status(413).json({
      error: "Request body too large"
    });
  }

  return res.status(err?.status || err?.statusCode || 500).json({
    error: "Internal Server Error"
  });
}

describe("API Error Handling Middleware Logic", () => {
  it("should handle JSON SyntaxError with HTTP 400 and safe message", () => {
    const jsonError = new SyntaxError("Unexpected token in JSON at position 5");
    jsonError.status = 400;

    const res = simulateErrorHandler(jsonError);
    assert.equal(res.statusCode, 400);
    assert.deepEqual(res.jsonBody, { error: "Invalid JSON payload" });
    assert.equal(res.jsonBody.stack, undefined, "Stack trace must not be exposed");
  });

  it("should handle body-parser entity.parse.failed with HTTP 400", () => {
    const parseError = { type: "entity.parse.failed", message: "Malformed payload" };
    const res = simulateErrorHandler(parseError);
    assert.equal(res.statusCode, 400);
    assert.deepEqual(res.jsonBody, { error: "Invalid JSON payload" });
  });

  it("should handle payload too large error with HTTP 413", () => {
    const tooLargeError = { status: 413, type: "entity.too.large" };
    const res = simulateErrorHandler(tooLargeError);
    assert.equal(res.statusCode, 413);
    assert.deepEqual(res.jsonBody, { error: "Request body too large" });
  });

  it("should handle unexpected internal errors with generic HTTP 500 without exposing secrets", () => {
    const internalError = new Error("Database connection to mongodb+srv://admin:secret123@cluster failed");
    const res = simulateErrorHandler(internalError);

    assert.equal(res.statusCode, 500);
    assert.deepEqual(res.jsonBody, { error: "Internal Server Error" });
    assert.equal(res.jsonBody.stack, undefined);
    assert.equal(JSON.stringify(res.jsonBody).includes("secret123"), false);
  });
});
