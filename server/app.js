import "./config/dns-override.js";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chatRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

console.log("MongoDB URI:", process.env.MONGODB_URI ? "configured" : "NOT configured");

try {
  await connectDB();
} catch (error) {
  console.error("Failed to connect to the database. Exiting...");
  process.exit(1);
}
const app = express();

app.use(helmet());

const rawOrigins = process.env.RAG_ALLOWED_ORIGINS || process.env.CORS_ORIGIN;
const allowedOrigins = rawOrigins
  ? rawOrigins.split(",").map(origin => origin.trim()).filter(Boolean)
  : ["http://localhost:3000", "http://localhost:5173"];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 204
  })
);
app.use(express.json({ limit: "20kb" }));

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

console.log("Google API Key:", process.env.GOOGLE_API_KEY ? "configured" : "NOT configured");
app.use("/api/chat", chatRoutes);

// 404 Handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    error: `Cannot ${req.method} ${req.originalUrl} - Route not found.`
  });
});

// Global error handling middleware
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

const PORT = process.env.RAG_PORT || process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Keep process active even if async connection handles close
setInterval(() => {}, 60000);
