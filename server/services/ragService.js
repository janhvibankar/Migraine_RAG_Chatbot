import { retrieve } from "../rag/retriever.js";
import { generateAnswer } from "../rag/generateAnswer.js";
import {
  saveMessage,
  getPreviousMessages
} from "./chatHistoryService.js";

/**
 * getRAGResponse
 *
 * Orchestrates the full RAG pipeline:
 *  1. Load previous conversation history (non-fatal if MongoDB fails)
 *  2. Save user message (non-fatal if MongoDB fails)
 *  3. Retrieve relevant documents from the vector store
 *  4. Generate answer using the LLM
 *  5. Save assistant message (non-fatal if MongoDB fails)
 *
 * Chat history failures are intentionally non-fatal so that a temporary
 * MongoDB disruption does NOT cause the entire RAG answer to fail.
 * The user still gets a valid answer; history simply won't include that turn.
 */
export async function getRAGResponse(question, sessionId, language = "en") {
  // 1. Load previous messages — degrade gracefully if DB unavailable
  let previousMessages = [];
  try {
    previousMessages = await getPreviousMessages(sessionId);
  } catch (historyErr) {
    console.warn("[ragService] Failed to load chat history (non-fatal):", historyErr.message);
  }

  // 2. Save user message — degrade gracefully
  try {
    await saveMessage(sessionId, "user", question);
  } catch (saveErr) {
    console.warn("[ragService] Failed to save user message to history (non-fatal):", saveErr.message);
  }

  // 3. Retrieve relevant documents (retriever already catches and returns [] on failure)
  const docs = await retrieve(question);
  const sources = [...new Set(docs.map(doc => doc.fileName))];

  // 4. Generate answer (this can legitimately throw — let the caller handle it)
  const answer = await generateAnswer(docs, question, previousMessages, language);

  // 5. Save assistant message — degrade gracefully
  try {
    await saveMessage(sessionId, "assistant", answer);
  } catch (saveErr) {
    console.warn("[ragService] Failed to save assistant message to history (non-fatal):", saveErr.message);
  }

  return { answer, sources };
}
