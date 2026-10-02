import http from "node:http";
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../config/db.js";
import chatRoutes from "../routes/chatRoutes.js";

dotenv.config();

console.log("Connecting to DB for live integration test...");
await connectDB();

const app = express();
app.use(express.json());
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.use("/api/chat", chatRoutes);

const server = app.listen(5005, async () => {
  console.log("Live test server listening on http://localhost:5005");

  try {
    // 1. Health check
    const healthRes = await makeRequest("/health", "GET", null);
    console.log("\n[TEST 1] GET /health:");
    console.log("Status:", healthRes.status);
    console.log("Body:", healthRes.body);

    // 2. English Chat
    console.log("\n[TEST 2] POST /api/chat (English):");
    const enRes = await makeRequest("/api/chat", "POST", {
      message: "What are common migraine triggers?",
      sessionId: "integration-test-001",
      language: "en"
    });
    console.log("Status:", enRes.status);
    console.log("Answer snippet:", enRes.body?.answer?.substring(0, 120));
    console.log("Sources:", enRes.body?.sources);
    console.log("Language field:", enRes.body?.language);

    // 3. Hindi Chat
    console.log("\n[TEST 3] POST /api/chat (Hindi):");
    const hiRes = await makeRequest("/api/chat", "POST", {
      message: "माइग्रेन के आम कारण क्या हैं?",
      sessionId: "integration-test-002",
      language: "hi"
    });
    console.log("Status:", hiRes.status);
    console.log("Answer snippet:", hiRes.body?.answer?.substring(0, 120));
    console.log("Sources:", hiRes.body?.sources);
    console.log("Language field:", hiRes.body?.language);

    // 4. Marathi Chat
    console.log("\n[TEST 4] POST /api/chat (Marathi):");
    const mrRes = await makeRequest("/api/chat", "POST", {
      message: "मायग्रेन होण्याची सामान्य कारणे कोणती आहेत?",
      sessionId: "integration-test-003",
      language: "mr"
    });
    console.log("Status:", mrRes.status);
    console.log("Answer snippet:", mrRes.body?.answer?.substring(0, 120));
    console.log("Sources:", mrRes.body?.sources);
    console.log("Language field:", mrRes.body?.language);

  } catch (err) {
    console.error("Integration test error:", err);
  } finally {
    server.close(() => process.exit(0));
  }
});

function makeRequest(path, method, body) {
  return new Promise((resolve, reject) => {
    const payload = body ? JSON.stringify(body) : null;
    const req = http.request({
      hostname: "localhost",
      port: 5005,
      path,
      method,
      headers: payload ? {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(payload)
      } : {}
    }, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) });
        } catch (e) {
          resolve({ status: res.statusCode, raw: data });
        }
      });
    });
    req.on("error", reject);
    if (payload) req.write(payload);
    req.end();
  });
}
