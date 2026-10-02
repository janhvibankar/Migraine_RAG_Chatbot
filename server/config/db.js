import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import path from "path";
import { fileURLToPath } from "url";
import "./dns-override.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

const client = new MongoClient(process.env.MONGODB_URI, {
  tlsAllowInvalidCertificates: true,
  connectTimeoutMS: 10000,
  serverSelectionTimeoutMS: 10000,
});

export const db = client.db("migraine_rag");
export const knowledgeCollection = db.collection("knowledge_chunks");
export const chatHistoryCollection = db.collection("chat_history");

let isConnected = false;

export async function connectDB() {
  try {
    if (!isConnected) {
      await client.connect();
      isConnected = true;
    }
    await db.command({ ping: 1 });
    console.log("✅ MongoDB Atlas Connected");
  } catch (error) {
    console.error("⚠️ MongoDB Connection Warning:", error.message);
  }
}

export { client };
export default client;
