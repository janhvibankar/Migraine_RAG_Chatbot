export function cleanText(text) {
    return text
        .replace(/\r\n/g, "\n")
        .replace(/\n{2,}/g, "\n")
        .replace(/\s+/g, " ")
        .trim();
}