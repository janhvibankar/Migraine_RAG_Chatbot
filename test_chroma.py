import chromadb

client = chromadb.PersistentClient(path="./chroma_db")

collection = client.get_or_create_collection(
    name="knowledge_base"
)

collection.add(
    documents=["Migraines can cause headaches."],
    ids=["1"]
)

results = collection.query(
    query_texts=["What causes headaches?"],
    n_results=1
)

print(results)