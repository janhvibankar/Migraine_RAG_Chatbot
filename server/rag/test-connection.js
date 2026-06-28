import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config({ path: "../.env" });
console.log("ENV EXISTS:", fs.existsSync("../.env"));
console.log("MONGODB_URI:", process.env.MONGODB_URI);

const uri = process.env.MONGODB_URI;
console.log("URI =", uri);

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