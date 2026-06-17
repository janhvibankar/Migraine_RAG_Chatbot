import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, "../.env"),
});

console.log(
    "KEY:",
    process.env.GOOGLE_API_KEY?.substring(0, 20)
);

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY,
});

try {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: "Say hello",
    });

    console.log("\nSUCCESS:");
    console.log(response.text);
} catch (err) {
    console.error("\nERROR:");
    console.error(err);
}