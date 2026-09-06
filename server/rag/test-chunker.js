import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { loadMarkdownFiles } from "./loader.js";
import { cleanText } from "./cleaner.js";
import { chunkText } from "./chunker.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docs = await loadMarkdownFiles(
    path.resolve(__dirname, "./documents/knowledge_base")
);

const cleanedDocs = docs.map(doc => ({
    ...doc,
    content: cleanText(doc.content)
}));

const allChunks = [];

for (const doc of cleanedDocs) {
    const chunks = chunkText(doc.content);

    chunks.forEach((chunk, index) => {
        allChunks.push({
            fileName: doc.fileName,
            folder: doc.folder,
            chunkId: index + 1,
            text: chunk
        });
    });
}

console.log(`Documents: ${cleanedDocs.length}`);
console.log(`Chunks: ${allChunks.length}`);

console.log(allChunks[0]);

fs.writeFileSync(
    path.resolve(__dirname, "./chunks.json"),
    JSON.stringify(allChunks, null, 2)
);

console.log("Chunks saved.");