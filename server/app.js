import "./config/dns-override.js";   //// added for connecting and also creted dns-override file via antiravity
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chatRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

console.log("MongoDB URI:", process.env.MONGODB_URI ? "configured" : "NOT configured");

await connectDB();

const app = express();

app.use(cors());
app.use(express.json({ limit: "20kb" }));

app.get("/", (req, res) => {
  res.send("Server Running");
});

console.log("Google API Key:", process.env.GOOGLE_API_KEY ? "configured" : "NOT configured");
app.use("/api/chat", chatRoutes);

// Global error handling middleware for parser and runtime middleware errors
app.use((err, req, res, next) => {
  if (
    (err instanceof SyntaxError && (err.status === 400 || err.statusCode === 400)) ||
    err.type === "entity.parse.failed"
  ) {
    return res.status(400).json({
      error: "Invalid JSON payload"
    });
  }

  if (err.status === 413 || err.statusCode === 413 || err.type === "entity.too.large") {
    return res.status(413).json({
      error: "Request body too large"
    });
  }

  console.error("Unhandled Server Error:", err);
  res.status(err.status || err.statusCode || 500).json({
    error: "Internal Server Error"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});