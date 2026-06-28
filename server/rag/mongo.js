import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config({ path: "../.env" });
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, "../.env"),
});

const client = new MongoClient(process.env.MONGODB_URI);

await client.connect();

const db = client.db("migraine_rag");
//const collection = db.collection("knowledge_chunks");
export const knowledgeCollection = db.collection("knowledge_chunks");

export const chatHistoryCollection = db.collection("chat_history");


//export default collection;