import { ChatGroq } from "@langchain/groq";

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.3-70b-versatile",
  temperature: 0,
});
export async function generateAnswer(context, question) {
  const prompt = `
You are a migraine assistant.

Context:
${context}

Question:
${question}

Rules:
- Answer only from the context.
- If the answer is not present in the context, say:
"I don't have enough information in the knowledge base."

Answer:
`;

  const response = await model.invoke(prompt);

  return response.content;
}