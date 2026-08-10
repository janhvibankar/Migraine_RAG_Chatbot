import { retrieve } from "../rag/retriever.js";
import { generateAnswer } from "../rag/generateAnswer.js";
//import { chatHistoryCollection } from "../rag/mongo.js";
//import { saveMessage } from "./chatHistoryService.js";

import {
  saveMessage,
  getPreviousMessages
} from "./chatHistoryService.js";

//export async function getRAGResponse(question) {

export async function getRAGResponse(question, sessionId) {

  const previousMessages = await getPreviousMessages(sessionId);
  console.log(previousMessages);

  await saveMessage(
    sessionId,
    "user",
    question
  );

  const docs = await retrieve(question);
  const sources = [...new Set(docs.map(doc => doc.fileName))];

  const context = docs
    .map(doc => doc.text)
    .join("\n\n");

  const answer = await generateAnswer(
    context,
    question,
    previousMessages

  );

  await saveMessage(
    sessionId,
    "assistant",
    answer
  );
  return { answer, sources };
}