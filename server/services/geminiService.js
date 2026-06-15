import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// ADD THIS LINE HERE
console.log("ENV KEY =", process.env.GOOGLE_API_KEY);

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

export async function getGeminiResponse(message) {
  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
    });

    return result.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
}