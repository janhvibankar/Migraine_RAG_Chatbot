import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, "../.env"),
});

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY,
});

async function generateEmbeddings() {
    const chunks = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, "./chunks.json"), "utf-8")
    );

    const embeddedChunks = [];

    console.log(`Found ${chunks.length} chunks\n`);

    for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];

        console.log(
            `Embedding ${i + 1}/${chunks.length}`
        );

        try {
            const result = await ai.models.embedContent({
                model: "gemini-embedding-001",
                contents: chunk.text,
            });

            embeddedChunks.push({
                ...chunk,
                embedding: result.embeddings[0].values,
            });

        } catch (error) {
            console.error(
                `Failed chunk ${chunk.chunkId}`,
                error.message
            );
        }
    }

    fs.writeFileSync(
        path.resolve(__dirname, "./embeddings.json"),
        JSON.stringify(embeddedChunks, null, 2)
    );

    console.log("\nEmbeddings saved!");
}

generateEmbeddings();