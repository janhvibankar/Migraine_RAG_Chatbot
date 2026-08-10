import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import dns from "dns";   //// added for connecting and also creted dns-override file via antiravity

// Override DNS servers to use Google's public DNS, as some local ISP or network DNS servers
// refuse or fail to resolve SRV records required by MongoDB Atlas.
dns.setServers(["8.8.8.8", "8.8.4.4"]);   //// upto here


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