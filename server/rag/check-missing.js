import fs from "fs";

const chunks = JSON.parse(
    fs.readFileSync("./chunks.json", "utf8")
);

const embeddings = JSON.parse(
    fs.readFileSync("./embeddings.json", "utf8")
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