import { chatHistoryCollection } from "../rag/mongo.js";

export async function saveMessage(sessionId, role, message) {

    await chatHistoryCollection.insertOne({
        sessionId,
        role,
        message,
        timestamp: new Date()
    });

    export async function getPreviousMessages(sessionId) {

        const messages = await chatHistoryCollection
            .find({ sessionId })
            .sort({ timestamp: -1 })
            .limit(6)
            .toArray();

        return messages.reverse();

    }

}