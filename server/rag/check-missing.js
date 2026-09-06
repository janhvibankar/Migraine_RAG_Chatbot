import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chunks = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "./chunks.json"), "utf8")
);

const embeddings = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "./embeddings.json"), "utf8")
);

const embeddedKeys = new Set(
    embeddings.map(
        e => `${e.folder}|${e.fileName}|${e.chunkId}`
    )
);

const missing = chunks.filter(
    c =>
        !embeddedKeys.has(
            `${c.folder}|${c.fileName}|${c.chunkId}`
        )
);

console.log("Missing:", missing.length);

missing.forEach(chunk => {
    console.log(
        `${chunk.folder} | ${chunk.fileName} | ${chunk.chunkId}`
    );
});