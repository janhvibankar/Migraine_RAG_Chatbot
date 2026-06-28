import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);

export async function connectDB() {
    try {
        await client.connect();
        await client.db("migraine_rag").command({ ping: 1 });

        console.log("✅ MongoDB Atlas Connected");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed");
        console.error(error);
    }
}

export default client;