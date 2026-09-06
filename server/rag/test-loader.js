import path from "path";
import { fileURLToPath } from "url";
import { loadMarkdownFiles } from "./loader.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docs = await loadMarkdownFiles(
    path.resolve(__dirname, "./documents/knowledge_base")
);

console.log(docs);
console.log(`Loaded ${docs.length} files`);

docs.forEach((doc) => {
    console.log("\n====================");
    console.log(doc.fileName);
    console.log(doc.content.substring(0, 200));
});