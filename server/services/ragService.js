import { retrieve } from "../rag/retriever.js";
import { generateAnswer } from "../rag/generateAnswer.js";
import {
  saveMessage,
  getPreviousMessages
} from "./chatHistoryService.js";

export async function getRAGResponse(question, sessionId, language = "en") {
  const previousMessages = await getPreviousMessages(sessionId);

  await saveMessage(
    sessionId,
    "user",
    question
  );

  const docs = await retrieve(question);
  const sources = [...new Set(docs.map(doc => doc.fileName))];

  const answer = await generateAnswer(
    docs,
    question,
    previousMessages,
    language
  );

  await saveMessage(
    sessionId,
    "assistant",
    answer
  );

  return { answer, sources };
}