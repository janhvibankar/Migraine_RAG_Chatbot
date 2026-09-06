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

async function recoverMissing() {
    const chunks = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, "./chunks.json"), "utf8")
    );

    const embeddings = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, "./embeddings.json"), "utf8")
    );

    const embeddedKeys = new Set(
        embeddings.map(
            e => `${e.folder}|${e.fileName}|${e.chunkId}`
        )
    );

    const missing = chunks.filter(
        c =>
            !embeddedKeys.has(
                `${c.folder}|${c.fileName}|${c.chunkId}`
            )
    );

    console.log(`Missing chunks: ${missing.length}`);

    for (let i = 0; i < missing.length; i++) {
        const chunk = missing[i];

        console.log(
            `Recovering ${i + 1}/${missing.length}`
        );

        try {
            const result = await ai.models.embedContent({
                model: "gemini-embedding-001",
                contents: chunk.text,
            });

            embeddings.push({
                ...chunk,
                embedding: result.embeddings[0].values,
            });

            // Avoid 429 errors
            await new Promise(resolve =>
                setTimeout(resolve, 1500)
            );

        } catch (error) {
            console.error(
                `Failed again: ${chunk.fileName} | ${chunk.chunkId}`
            );
        }
    }

    fs.writeFileSync(
        path.resolve(__dirname, "./embeddings.json"),
        JSON.stringify(embeddings, null, 2)
    );

    console.log("Recovery complete!");
}

recoverMissing();