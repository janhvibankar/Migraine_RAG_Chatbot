import "../config/dns-override.js";
import { retrieve } from "./retriever.js";
import { client } from "./mongo.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const testSuites = [
  {
    conceptId: "triggers",
    title: "Concept 1: Migraine Triggers",
    expectedTopics: ["triggers", "lifestyle", "foods", "stress", "sleep"],
    queries: {
      en: "What are common migraine triggers?",
      hi: "माइग्रेन के आम कारण क्या हैं?",
      mr: "मायग्रेन होण्याची सामान्य कारणे कोणती आहेत?"
    }
  },
  {
    conceptId: "hydration",
    title: "Concept 2: Dehydration & Migraine",
    expectedTopics: ["hydration", "water intake", "fluid loss"],
    queries: {
      en: "Can dehydration trigger migraine?",
      hi: "क्या पानी की कमी से माइग्रेन हो सकता है?",
      mr: "पाणी कमी प्यायल्याने मायग्रेन होऊ शकतो का?"
    }
  },
  {
    conceptId: "symptoms",
    title: "Concept 3: Migraine Symptoms",
    expectedTopics: ["symptoms", "headache", "nausea", "photophobia", "aura"],
    queries: {
      en: "What are common migraine symptoms?",
      hi: "माइग्रेन के सामान्य लक्षण क्या हैं?",
      mr: "मायग्रेनची सामान्य लक्षणे कोणती आहेत?"
    }
  },
  {
    conceptId: "weather",
    title: "Concept 4: Barometric Pressure & Weather",
    expectedTopics: ["barometric pressure", "weather", "temperature"],
    queries: {
      en: "How does barometric pressure affect migraine?",
      hi: "वायुमंडलीय दबाव माइग्रेन को कैसे प्रभावित करता है?",
      mr: "हवेचा दाब मायग्रेनवर कसा परिणाम करतो?"
    }
  }
];

async function runEvaluation() {
  console.log("=================================================================");
  console.log("   STEP 3: MULTILINGUAL RAG RETRIEVAL QUALITY AUDIT (READ-ONLY)   ");
  console.log("=================================================================\n");

  const fullResults = [];

  for (const suite of testSuites) {
    console.log(`\n=================================================================`);
    console.log(`### ${suite.title}`);
    console.log(`Expected Topics: ${suite.expectedTopics.join(", ")}`);
    console.log(`=================================================================`);

    const suiteResult = {
      conceptId: suite.conceptId,
      title: suite.title,
      expectedTopics: suite.expectedTopics,
      languages: {}
    };

    for (const [lang, query] of Object.entries(suite.queries)) {
      console.log(`\n--- [${lang.toUpperCase()}] Query: "${query}" ---`);
      
      const startTime = Date.now();
      const docs = await retrieve(query);
      const elapsed = Date.now() - startTime;

      console.log(`Retrieved ${docs.length} documents in ${elapsed}ms:`);

      const docDetails = docs.map((doc, idx) => {
        const preview = (doc.text || "")
          .replace(/[\r\n]+/g, " ")
          .trim()
          .substring(0, 160);
        const score = typeof doc.score === "number" ? doc.score.toFixed(4) : "N/A";
        
        console.log(`  [${idx + 1}] Score: ${score} | File: ${doc.fileName} (${doc.folder || "root"})`);
        console.log(`      Preview: "${preview}..."`);

        return {
          rank: idx + 1,
          score: doc.score,
          fileName: doc.fileName,
          folder: doc.folder,
          chunkId: doc.chunkId,
          preview
        };
      });

      suiteResult.languages[lang] = {
        query,
        count: docs.length,
        documents: docDetails
      };
    }

    fullResults.push(suiteResult);
  }

  const outputPath = path.resolve(__dirname, "test-multilingual-retrieval-results.json");
  fs.writeFileSync(outputPath, JSON.stringify(fullResults, null, 2), "utf8");
  console.log(`\n\n✅ Audit complete. Detailed JSON saved to: ${outputPath}`);

  await client.close();
  console.log("MongoDB connection closed cleanly.");
}

runEvaluation().catch(async (err) => {
  console.error("Evaluation script encountered error:", err);
  try {
    await client.close();
  } catch {}
  process.exit(1);
});
