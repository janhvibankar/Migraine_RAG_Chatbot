import { chatHistoryCollection } from "../rag/mongo.js";
import { connectDB } from "../config/db.js";

const SESSION_ID_REGEX = /^[A-Za-z0-9_-]{1,64}$/;

function validateSessionId(sessionId) {
    if (typeof sessionId !== "string") {
        throw new Error("Invalid sessionId: must be a string");
    }
    const cleanId = sessionId.trim();
    if (cleanId.length === 0 || !SESSION_ID_REGEX.test(cleanId)) {
        throw new Error("Invalid sessionId format");
    }
    return cleanId;
}

export async function saveMessage(sessionId, role, message) {
    const safeSessionId = validateSessionId(sessionId);

    if (typeof role !== "string" || !["user", "assistant"].includes(role)) {
        throw new Error("Invalid role provided to chatHistoryService");
    }

    if (typeof message !== "string" || message.length === 0) {
        throw new Error("Invalid message provided to chatHistoryService");
    }

    await connectDB();
    await chatHistoryCollection.insertOne({
        sessionId: safeSessionId,
        role,
        message,
        timestamp: new Date()
    });
}

export async function getPreviousMessages(sessionId) {
    const safeSessionId = validateSessionId(sessionId);

    await connectDB();
    const messages = await chatHistoryCollection
        .find({ sessionId: safeSessionId })
        .sort({ timestamp: -1 })
        .limit(6)
        .toArray();

    return messages.reverse();
}
