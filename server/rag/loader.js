import fs from "fs";
import path from "path";
import { PDFParse } from "pdf-parse";

export async function loadMarkdownFiles(folderPath) {
  const documents = [];

  async function traverse(currentPath) {
    const items = fs.readdirSync(currentPath);

    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        await traverse(fullPath);
      } else if (item.endsWith(".md") || item.endsWith(".txt")) {
        try {
          const content = fs.readFileSync(fullPath, "utf8");
          documents.push({
            fileName: item,
            folder: path.basename(path.dirname(fullPath)),
            path: fullPath,
            content: content
          });
        } catch (err) {
          console.error(`❌ Error reading text file "${item}":`, err.message);
        }
      } else if (item.endsWith(".pdf")) {
        try {
          const buffer = fs.readFileSync(fullPath);
          const parser = new PDFParse({ data: buffer });
          const result = await parser.getText();
          const extractedText = result?.text?.trim() || "";

          if (!extractedText) {
            console.warn(`⚠️ Warning: No extractable text found in PDF: ${item}`);
          } else {
            documents.push({
              fileName: item,
              folder: path.basename(path.dirname(fullPath)),
              path: fullPath,
              content: extractedText
            });
          }
        } catch (err) {
          console.error(`❌ Error parsing PDF file "${item}":`, err.message);
        }
      }
    }
  }

  await traverse(folderPath);

  return documents;
}

export const loadDocuments = loadMarkdownFiles;