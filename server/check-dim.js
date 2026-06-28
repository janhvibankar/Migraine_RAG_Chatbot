import fs from "fs";

const data = JSON.parse(
    fs.readFileSync("./rag/embeddings.json", "utf8")
);

console.log(data[0].embedding.length);