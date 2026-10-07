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

let connectionPromise;

export async function connectDB() {
  if (!connectionPromise) {
    connectionPromise = client
      .connect()
      .then(() => db.command({ ping: 1 }))
      .then(() => {
        console.log("✅ MongoDB Atlas Connected");
        return client;
      })
      .catch((error) => {
        connectionPromise = undefined;
        throw error;
      });
  }

  return connectionPromise;
}

export { client };
export default client;
