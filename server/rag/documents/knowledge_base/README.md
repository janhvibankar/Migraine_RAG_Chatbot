# Knowledge Base

Clinical and educational content for the Migraine RAG Chatbot.

## Offline Ingestion Pipeline

The offline knowledge ingestion pipeline processes Markdown and PDF documents through the following Node.js pipeline:

```
knowledge_base/ (.md, .pdf)
    ↓
loader.js (document extraction)
    ↓
cleaner.js (text normalization)
    ↓
chunker.js (300-word sliding window / 50-word overlap)
    ↓
test-chunker.js (pipeline orchestration script)
    ↓
chunks.json (precomputed chunk dataset)
    ↓
embeddings.js (Google GenAI: gemini-embedding-001)
    ↓
embeddings.json (3072-dimension vector dataset)
    ↓
storeEmbeddings.js (database batch loader)
    ↓
MongoDB Atlas: knowledge_chunks collection ($vectorSearch)
```

> ⚠️ **CRITICAL OFFLINE PIPELINE WARNINGS:**
> - `test-chunker.js` generates and overwrites `chunks.json`.
> - `embeddings.js` generates and overwrites `embeddings.json` and consumes Gemini API quota.
> - `storeEmbeddings.js` executes `deleteMany({})` on the Atlas collection before inserting. It contains destructive database behavior and must NEVER be run casually during development or maintenance.

## Categories

| Folder | Topics |
|---|---|
| `migraine_basics/` | types, phases, anatomy, definitions |
| `triggers/` | food, hormones, light, sleep, stress, weather |
| `treatments/` | acute, preventive, non-drug therapies |
| `lifestyle/` | exercise, habits, routines, hydration |
| `weather/` | barometric pressure, temperature, humidity |
| `sleep/` | sleep hygiene, sleep disorders, routines |
| `stress/` | anxiety management, breathing, relaxation |
| `nutrition/` | diet, hydration, caffeine, meal patterns |
| `faq/` | common patient questions |
| `emergency/` | red flags, emergency warning signs |
| `medications/` | OTC, prescriptions, side effects, interactions |
| `hormones/` | menstrual migraine, pregnancy |
| `tracking/` | migraine diary, patterns, logs |
| `comorbidities/` | anxiety, depression, insomnia |
| `chatbot_rules/` | scope, disclaimers, safety guidelines |

