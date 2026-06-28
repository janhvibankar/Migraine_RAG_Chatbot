import { retrieve } from "../rag/retriever.js";
import { generateAnswer } from "../rag/generateAnswer.js";

export async function getRAGResponse(question) {

  const docs = await retrieve(question);

  const context = docs
    .map(doc => doc.text)
    .join("\n\n");

  const answer = await generateAnswer(
    context,
    question
  );

  return answer;
}