import fs from "fs";
import path from "path";

export function loadMarkdownFiles(folderPath) {
  const documents = [];

  function traverse(currentPath) {
    const items = fs.readdirSync(currentPath);

    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (
        item.endsWith(".md") ||
        item.endsWith(".pdf") ||
        item.endsWith(".txt")
      ) {
        documents.push({
          fileName: item,
          folder: path.basename(path.dirname(fullPath)),
          path: fullPath,
          content: fs.readFileSync(fullPath, "utf8")
        });
      }
    }
  }

  traverse(folderPath);

  return documents;
}