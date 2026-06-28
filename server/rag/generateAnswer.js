import { ChatGroq } from "@langchain/groq";

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.3-70b-versatile",
  temperature: 0,
});
export async function generateAnswer(context, question, previousMessages) {

  const conversationHistory =
    previousMessages.length > 0
      ? previousMessages
        .map(msg =>
          `${msg.role === "user" ? "User" : "Assistant"}: ${msg.message}`
        )
        .join("\n")
      : "No previous conversation.";

  const prompt = `
You are an AI Migraine Assistant.

You help users by answering migraine-related questions using:
1. The previous conversation (if relevant).
2. The retrieved knowledge base context.

--------------------------------------------------

Previous Conversation:

${conversationHistory}

--------------------------------------------------

Retrieved Knowledge:

${context}

--------------------------------------------------

Current User Question:

${question}

--------------------------------------------------

Instructions:

- Use the previous conversation only when it helps resolve references such as:
  "it", "its", "them", "those", "this", "that".

- Use the retrieved knowledge as the primary source of factual information.

- If the current question is completely unrelated to the previous conversation, ignore the conversation history.

- Do not invent information.

- If the answer cannot be found in the retrieved knowledge, reply:
"I don't have enough information in the knowledge base."

Answer:
`;

  const response = await model.invoke(prompt);

  return response.content;
}