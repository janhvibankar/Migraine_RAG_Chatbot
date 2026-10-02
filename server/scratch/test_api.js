import http from "node:http";

async function testApi(message, sessionId, language) {
  const payload = JSON.stringify({ message, sessionId, language });
  
  return new Promise((resolve, reject) => {
    const req = http.request({
      hostname: "localhost",
      port: 5000,
      path: "/api/chat",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(payload)
      }
    }, (res) => {
      let data = "";
      res.on("data", (chunk) => data += chunk);
      res.on("end", () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) });
        } catch (e) {
          resolve({ status: res.statusCode, raw: data });
        }
      });
    });

    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

console.log("Testing live server language detection...");

try {
  const res1 = await testApi("What is migraine?", "test-session-001", "auto");
  console.log("1. English auto:", res1.status, res1.body?.language, "Answer preview:", res1.body?.answer?.substring(0, 60));

  const res2 = await testApi("मायग्रेन म्हणजे काय?", "test-session-002", "auto");
  console.log("2. Marathi auto:", res2.status, res2.body?.language, "Answer preview:", res2.body?.answer?.substring(0, 60));

  const res3 = await testApi("माइग्रेन से कैसे बचें?", "test-session-003", "auto");
  console.log("3. Hindi auto:", res3.status, res3.body?.language, "Answer preview:", res3.body?.answer?.substring(0, 60));

  const res4 = await testApi("Migraine kay aahe?", "test-session-004", "auto");
  console.log("4. Romanized Marathi auto:", res4.status, res4.body?.language, "Answer preview:", res4.body?.answer?.substring(0, 60));

  const res5 = await testApi("What is migraine?", "test-session-005", "mr");
  console.log("5. Manual Marathi:", res5.status, res5.body?.language, "Answer preview:", res5.body?.answer?.substring(0, 60));

  const res6 = await testApi("What is migraine?", "test-session-006", "hi");
  console.log("6. Manual Hindi:", res6.status, res6.body?.language, "Answer preview:", res6.body?.answer?.substring(0, 60));

  const res7 = await testApi("What is migraine?", "test-session-007", undefined);
  console.log("8. Omitted language:", res7.status, res7.body?.language, "Answer preview:", res7.body?.answer?.substring(0, 60));

} catch (err) {
  console.error("API test error:", err.message);
}
