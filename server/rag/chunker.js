export function chunkText(
    text,
    chunkSize = 300,
    overlap = 50
) {
    const words = text.split(/\s+/);

    const chunks = [];
    const step = chunkSize - overlap;

    for (let i = 0; i < words.length; i += step) {
        chunks.push(
            words.slice(i, i + chunkSize).join(" ")
        );
    }

    return chunks;
}