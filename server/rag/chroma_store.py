import json
import chromadb

# Create/Open ChromaDB
client = chromadb.PersistentClient(path="./chroma_db")

# Create collection
collection = client.get_or_create_collection(
    name="knowledge_base"
)

# Load Gemini embeddings
with open("embeddings.json", "r", encoding="utf-8") as f:
    data = json.load(f)

print(f"Records found: {len(data)}")

for i, item in enumerate(data):

    print(f"Adding {i + 1}/{len(data)}")

    collection.add(
        ids=[
            f"{item['folder']}_{item['fileName']}_{item['chunkId']}"
        ],

        documents=[
            item["text"]
        ],

        embeddings=[
            item["embedding"]      # Gemini embedding
        ],

        metadatas=[
            {
                "source": item["fileName"],
                "folder": item["folder"],
                "chunkId": item["chunkId"]
            }
        ]
    )

print("\nAll embeddings stored successfully!")
print("Total records:", collection.count())