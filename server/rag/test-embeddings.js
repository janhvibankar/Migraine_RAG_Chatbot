import { getQueryEmbedding } from "./queryEmbedding.js";

try {
    const embedding = await getQueryEmbedding(
        "What causes migraine?"
    );

    console.log(
        "Embedding length:",
        embedding.length
    );
} catch (err) {
    console.error(err);
}