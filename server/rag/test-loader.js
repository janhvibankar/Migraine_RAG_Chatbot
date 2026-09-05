import { loadMarkdownFiles } from "./loader.js";

const docs = await loadMarkdownFiles("./documents/knowledge_base");

console.log(docs);
console.log(`Loaded ${docs.length} files`);

docs.forEach((doc) => {
    console.log("\n====================");
    console.log(doc.fileName);
    console.log(doc.content.substring(0, 200));
});