import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const uri = process.env.MONGODB_URI;

console.log(uri);

const client = new MongoClient(uri);

try {
    console.log("Connecting...");
    await client.connect();
    console.log("✅ Connected!");
} catch (err) {
    console.error(err);
} finally {
    await client.close();
}