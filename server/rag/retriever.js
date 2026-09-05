import { knowledgeCollection } from "./mongo.js";
import { getQueryEmbedding } from "./queryEmbedding.js";

export async function retrieve(question) {
    const minSimilarity = Number(process.env.RAG_MIN_SIMILARITY ?? "0");

    const queryEmbedding = await getQueryEmbedding(question);

    const rawResults = await knowledgeCollection.aggregate([
        {
            $vectorSearch: {
                index: "vector_index",
                path: "embedding",
                queryVector: queryEmbedding,
                numCandidates: 50,
                limit: 5
            }
        },
        {
            $project: {
                text: 1,
                fileName: 1,
                folder: 1,
                chunkId: 1,
                score: {
                    $meta: "vectorSearchScore"
                }
            }
        }
    ]).toArray();

    const results = minSimilarity > 0
        ? rawResults.filter(doc => (doc.score ?? 0) >= minSimilarity)
        : rawResults;

    console.log("Retrieved Results:");
    console.log(results);
    console.log("Length:", results.length);

    return results;
}