import fs from "fs";
import client from "../config/db.js";

async function storeEmbeddings() {
    try {
        await client.connect();

        const db = client.db("migraine_rag");
        const collection = db.collection("knowledge_chunks");

        const embeddings = JSON.parse(
            fs.readFileSync("./rag/embeddings.json", "utf8")
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