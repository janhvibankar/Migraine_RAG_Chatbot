
import "../config/dns-override.js";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });
console.log("ENV EXISTS:", fs.existsSync(path.resolve(__dirname, "../.env")));
console.log("MongoDB URI:", process.env.MONGODB_URI ? "configured" : "NOT configured");

const uri = process.env.MONGODB_URI;

async function test() {
  try {
    const client = new MongoClient(uri);

    await client.connect();

    console.log("CONNECTED");

    const admin = client.db().admin();
    const info = await admin.listDatabases();

    console.log(info);

    await client.close();
  } catch (err) {
    console.error(err);
  }
}

test();