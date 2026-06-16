import { loadMarkdownFiles } from "./loader.js";
import { cleanText } from "./cleaner.js";

const docs = loadMarkdownFiles("./documents/knowledge_base");

const cleanedDocs = docs.map(doc => ({
    ...doc,
    content: cleanText(doc.content)
}));

console.log(`Loaded ${docs.length} documents`);
console.log(`Cleaned ${cleanedDocs.length} documents`);

console.log("\nFirst 5 Documents:\n");

cleanedDocs.slice(0, 5).forEach(doc => {
    console.log("================================");
    console.log(`Folder: ${doc.folder}`);
    console.log(`File: ${doc.fileName}`);
    console.log(`Characters: ${doc.content.length}`);
});