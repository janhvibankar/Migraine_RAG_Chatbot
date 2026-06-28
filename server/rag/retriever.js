//import collection from "./mongo.js";

import { knowledgeCollection } from "./mongo.js";
import { getQueryEmbedding } from "./queryEmbedding.js";

export async function retrieve(question) {

    const queryEmbedding =
        await getQueryEmbedding(question);

    const results = await knowledgeCollection.aggregate([
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
                score: {
                    $meta: "vectorSearchScore"
                }
            }
        }
    ]).toArray();

    return results;
}