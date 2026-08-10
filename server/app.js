import "./config/dns-override.js";   //// added for connecting and also creted dns-override file via antiravity
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chatRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

console.log("MONGODB_URI =", process.env.MONGODB_URI);

await connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Running");
});

console.log("APP ENV =", process.env.GOOGLE_API_KEY);
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});