import express from "express";
import rateLimit from "express-rate-limit";
import { chatWithBot } from "../controllers/chatController.js";

const router = express.Router();

export const chatLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 150, // Limit each IP to 30 requests per 15-minute window
  standardHeaders: true, // Draft-6/Draft-7 RateLimit headers (RateLimit-Limit, RateLimit-Remaining, RateLimit-Reset)
  legacyHeaders: false, // Disable X-RateLimit-* headers
  statusCode: 429,
  message: {
    error: "Too many requests. Please try again later."
  }
});

router.post("/", chatLimiter, chatWithBot);

export default router;