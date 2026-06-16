import fs from "fs";

const chunks = JSON.parse(
    fs.readFileSync("./chunks.json", "utf8")
);

const embeddings = JSON.parse(
    fs.readFileSync("./embeddings.json", "utf8")
);

console.log("Chunks:", chunks.length);
console.log("Embeddings:", embeddings.length);

const chunkIds = chunks.map(c => c.chunkId);

const uniqueIds = new Set(chunkIds);

console.log("Unique IDs:", uniqueIds.size);