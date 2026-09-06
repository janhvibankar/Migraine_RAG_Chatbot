import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import client from "../config/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function storeEmbeddings() {
    try {
        await client.connect();

        const db = client.db("migraine_rag");
        const collection = db.collection("knowledge_chunks");

        const embeddings = JSON.parse(
            fs.readFileSync(path.resolve(__dirname, "./embeddings.json"), "utf8")
        );

        await collection.deleteMany({});

        await collection.insertMany(embeddings);

        console.log(`✅ Stored ${embeddings.length} embeddings in MongoDB`);

        process.exit(0);
    } catch (error) {
        console.error("❌ Error storing embeddings:", error);
        process.exit(1);
    }
}

storeEmbeddings();