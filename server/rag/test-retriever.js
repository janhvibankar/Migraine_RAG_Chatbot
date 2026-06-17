import { retrieve } from "./retriever.js";

const question =
    "What foods trigger migraine?";

const chunks =
    await retrieve(question);

console.log("\nRetrieved Chunks:\n");

chunks.forEach((chunk, index) => {

    console.log(
        `\nChunk ${index + 1}`
    );

    console.log(
        "Score:",
        chunk.score
    );

    console.log(
        chunk.text.substring(0, 300)
    );
});