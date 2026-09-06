import { describe, it } from "node:test";
import assert from "node:assert/strict";

const SESSION_ID_REGEX = /^[A-Za-z0-9_-]{1,64}$/;

function validateChatHistoryEntry(sessionId, role, message) {
  if (typeof sessionId !== "string") {
    throw new Error("Invalid sessionId: must be a string");
  }
  const cleanId = sessionId.trim();
  if (cleanId.length === 0 || !SESSION_ID_REGEX.test(cleanId)) {
    throw new Error("Invalid sessionId format");
  }

  if (typeof role !== "string" || !["user", "assistant"].includes(role)) {
    throw new Error("Invalid role provided to chatHistoryService");
  }

  if (typeof message !== "string" || message.trim().length === 0) {
    throw new Error("Invalid message provided to chatHistoryService");
  }

  return { sessionId: cleanId, role, message: message.trim() };
}

function processHistoryWindow(messages, limit = 6) {
  // Simulates MongoDB .sort({ timestamp: -1 }).limit(6).toArray().reverse()
  // Input: list of chronological messages [m1, m2, m3, m4, m5, m6, m7, m8]
  // In MongoDB: sorted desc gives [m8, m7, m6, m5, m4, m3], then reversed gives [m3, m4, m5, m6, m7, m8]
  const sortedDesc = [...messages].sort((a, b) => b.timestamp - a.timestamp);
  const limited = sortedDesc.slice(0, limit);
  return limited.reverse();
}

describe("Chat History Validation & Windowing Logic", () => {
  describe("Role Validation", () => {
    it("should accept 'user' role", () => {
      const res = validateChatHistoryEntry("sess-1", "user", "Hello");
      assert.equal(res.role, "user");
    });

    it("should accept 'assistant' role", () => {
      const res = validateChatHistoryEntry("sess-1", "assistant", "Migraine is a condition...");
      assert.equal(res.role, "assistant");
    });

    it("should reject unauthorized roles such as 'system', 'admin', 'moderator'", () => {
      const invalidRoles = ["system", "admin", "moderator", "bot", "developer", ""];
      for (const role of invalidRoles) {
        assert.throws(
          () => validateChatHistoryEntry("sess-1", role, "Message"),
          /Invalid role provided to chatHistoryService/
        );
      }
    });

    it("should reject non-string roles", () => {
      const invalidTypes = [null, undefined, 123, true, {}, []];
      for (const role of invalidTypes) {
        assert.throws(
          () => validateChatHistoryEntry("sess-1", role, "Message"),
          /Invalid role provided to chatHistoryService/
        );
      }
    });
  });

  describe("Session ID and Message Validation", () => {
    it("should reject empty or whitespace message in history", () => {
      assert.throws(
        () => validateChatHistoryEntry("sess-1", "user", ""),
        /Invalid message provided to chatHistoryService/
      );
      assert.throws(
        () => validateChatHistoryEntry("sess-1", "user", "   "),
        /Invalid message provided to chatHistoryService/
      );
    });

    it("should reject invalid sessionId in history", () => {
      assert.throws(
        () => validateChatHistoryEntry("invalid sess!", "user", "Hello"),
        /Invalid sessionId format/
      );
    });
  });

  describe("History Window Bounding (Last 6 Messages)", () => {
    it("should keep chronological order and bound window to latest 6 messages", () => {
      const allMessages = Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        message: `Message ${i + 1}`,
        timestamp: new Date(2026, 0, 1, 10, i) // minute i
      }));

      const windowed = processHistoryWindow(allMessages, 6);
      assert.equal(windowed.length, 6);
      // Expected messages 5, 6, 7, 8, 9, 10 in chronological order
      assert.equal(windowed[0].id, 5);
      assert.equal(windowed[5].id, 10);
    });

    it("should handle history with fewer than 6 messages", () => {
      const fewMessages = [
        { id: 1, message: "M1", timestamp: new Date(2026, 0, 1, 10, 1) },
        { id: 2, message: "M2", timestamp: new Date(2026, 0, 1, 10, 2) }
      ];

      const windowed = processHistoryWindow(fewMessages, 6);
      assert.equal(windowed.length, 2);
      assert.equal(windowed[0].id, 1);
      assert.equal(windowed[1].id, 2);
    });
  });
});
