import "../config/dns-override.js";
import { retrieve } from "./retriever.js";
import { generateAnswer } from "./generateAnswer.js";

const question = "Can dehydration trigger migraine?";

async function run() {
  const docs = await retrieve(question);

  const answer = await generateAnswer(
    docs,
    question
  );

  console.log("\nAnswer:\n");
  console.log(answer);
}

run();