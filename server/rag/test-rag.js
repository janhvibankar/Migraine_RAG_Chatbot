import { retrieve } from "./retriever.js";
import { generateAnswer } from "./generateAnswer.js";

const question = "Can dehydration trigger migraine?";

async function run() {
  const docs = await retrieve(question);

  const context = docs
    .map((doc) => doc.text)
    .join("\n\n");

  const answer = await generateAnswer(
    context,
    question
  );

  console.log("\nAnswer:\n");
  console.log(answer);
}

run();