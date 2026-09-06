import { describe, it } from "node:test";
import assert from "node:assert/strict";

const SESSION_ID_REGEX = /^[A-Za-z0-9_-]{1,64}$/;
const MAX_MESSAGE_LENGTH = 1000;

function validateChatInput(body) {
  const { message, sessionId } = body || {};

  if (typeof message !== "string") {
    return { valid: false, status: 400, error: "Message is required and must be a string" };
  }

  const cleanMessage = message.trim();

  if (cleanMessage.length === 0) {
    return { valid: false, status: 400, error: "Message cannot be empty" };
  }

  if (cleanMessage.length > MAX_MESSAGE_LENGTH) {
    return {
      valid: false,
      status: 400,
      error: `Message exceeds maximum allowed length of ${MAX_MESSAGE_LENGTH} characters`
    };
  }

  if (typeof sessionId !== "string") {
    return { valid: false, status: 400, error: "Session ID is required and must be a string" };
  }

  const cleanSessionId = sessionId.trim();

  if (cleanSessionId.length === 0 || !SESSION_ID_REGEX.test(cleanSessionId)) {
    return {
      valid: false,
      status: 400,
      error: "Invalid sessionId: must be 1-64 alphanumeric, underscore, or hyphen characters"
    };
  }

  return { valid: true, message: cleanMessage, sessionId: cleanSessionId };
}

describe("Chat Input Validation", () => {
  describe("Message Validation", () => {
    it("should accept valid standard messages", () => {
      const res = validateChatInput({ message: "What causes migraine?", sessionId: "test-session-1" });
      assert.equal(res.valid, true);
      assert.equal(res.message, "What causes migraine?");
      assert.equal(res.sessionId, "test-session-1");
    });

    it("should trim surrounding whitespace from messages", () => {
      const res = validateChatInput({ message: "   What is migraine?   ", sessionId: "sess-1" });
      assert.equal(res.valid, true);
      assert.equal(res.message, "What is migraine?");
    });

    it("should reject missing message", () => {
      const res = validateChatInput({ sessionId: "sess-1" });
      assert.equal(res.valid, false);
      assert.equal(res.status, 400);
      assert.match(res.error, /Message is required/);
    });

    it("should reject non-string messages", () => {
      const invalidTypes = [null, undefined, 123, true, {}, ["hello"]];
      for (const val of invalidTypes) {
        const res = validateChatInput({ message: val, sessionId: "sess-1" });
        assert.equal(res.valid, false);
        assert.equal(res.status, 400);
      }
    });

    it("should reject empty or whitespace-only messages", () => {
      const emptyInputs = ["", " ", "   \t\n  "];
      for (const val of emptyInputs) {
        const res = validateChatInput({ message: val, sessionId: "sess-1" });
        assert.equal(res.valid, false);
        assert.equal(res.status, 400);
        assert.match(res.error, /cannot be empty/);
      }
    });

    it("should accept message of exactly 1000 characters", () => {
      const exactMsg = "a".repeat(1000);
      const res = validateChatInput({ message: exactMsg, sessionId: "sess-1" });
      assert.equal(res.valid, true);
      assert.equal(res.message.length, 1000);
    });

    it("should reject message exceeding 1000 characters", () => {
      const longMsg = "a".repeat(1001);
      const res = validateChatInput({ message: longMsg, sessionId: "sess-1" });
      assert.equal(res.valid, false);
      assert.equal(res.status, 400);
      assert.match(res.error, /exceeds maximum allowed length/);
    });
  });

  describe("Session ID Validation", () => {
    it("should accept valid alphanumeric, hyphen, and underscore sessionIds", () => {
      const validIds = ["sess-1", "user_123_abc", "SESSION-ID-99", "a", "1", "_", "-"];
      for (const id of validIds) {
        const res = validateChatInput({ message: "hello", sessionId: id });
        assert.equal(res.valid, true, `Expected valid for sessionId: ${id}`);
      }
    });

    it("should accept sessionId up to 64 characters", () => {
      const maxId = "a".repeat(64);
      const res = validateChatInput({ message: "hello", sessionId: maxId });
      assert.equal(res.valid, true);
    });

    it("should reject missing or non-string sessionId", () => {
      const invalidTypes = [null, undefined, 123, true, {}, []];
      for (const val of invalidTypes) {
        const res = validateChatInput({ message: "hello", sessionId: val });
        assert.equal(res.valid, false);
        assert.equal(res.status, 400);
      }
    });

    it("should reject empty sessionId", () => {
      const res = validateChatInput({ message: "hello", sessionId: "" });
      assert.equal(res.valid, false);
      assert.equal(res.status, 400);
    });

    it("should reject sessionId longer than 64 characters", () => {
      const longId = "a".repeat(65);
      const res = validateChatInput({ message: "hello", sessionId: longId });
      assert.equal(res.valid, false);
      assert.equal(res.status, 400);
    });

    it("should reject sessionIds with invalid special characters", () => {
      const maliciousIds = [
        "sess$123",
        "sess/1",
        "sess\\1",
        "sess.ion",
        "sess<script>",
        "sess;drop",
        "sess space",
        "sess@domain"
      ];
      for (const id of maliciousIds) {
        const res = validateChatInput({ message: "hello", sessionId: id });
        assert.equal(res.valid, false, `Expected invalid for sessionId: ${id}`);
        assert.equal(res.status, 400);
      }
    });
  });
});
