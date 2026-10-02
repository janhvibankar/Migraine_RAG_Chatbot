import { getRAGResponse } from "../services/ragService.js";
import { detectLanguage } from "../services/languageDetector.js";

const SESSION_ID_REGEX = /^[A-Za-z0-9_-]{1,64}$/;
const MAX_MESSAGE_LENGTH = 1000;
const SUPPORTED_LANGUAGES = ["en", "hi", "mr"];

export const chatWithBot = async (req, res) => {
  try {
    const { message, sessionId, language } = req.body || {};

    // Validate message
    if (typeof message !== "string") {
      return res.status(400).json({
        error: "Message is required and must be a string"
      });
    }

    const cleanMessage = message.trim();

    if (cleanMessage.length === 0) {
      return res.status(400).json({
        error: "Message cannot be empty"
      });
    }

    if (cleanMessage.length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({
        error: `Message exceeds maximum allowed length of ${MAX_MESSAGE_LENGTH} characters`
      });
    }

    // Validate or default sessionId
    let cleanSessionId = "default-session";
    if (typeof sessionId === "string" && sessionId.trim().length > 0) {
      cleanSessionId = sessionId.trim();
      if (!SESSION_ID_REGEX.test(cleanSessionId)) {
        return res.status(400).json({
          error: "Invalid sessionId: must be 1-64 alphanumeric, underscore, or hyphen characters"
        });
      }
    } else if (sessionId !== undefined && sessionId !== null && typeof sessionId !== "string") {
      return res.status(400).json({
        error: "Session ID must be a string if provided"
      });
    }

    // Resolve language (manual override for en, hi, mr; auto-detect for "auto", omitted, or unrecognized)
    let effectiveLanguage = "en";
    let isAutoMode = true;

    if (typeof language === "string") {
      const cleanLang = language.trim().toLowerCase();
      if (SUPPORTED_LANGUAGES.includes(cleanLang)) {
        effectiveLanguage = cleanLang;
        isAutoMode = false;
      } else if (cleanLang === "auto") {
        isAutoMode = true;
      }
    }

    if (isAutoMode) {
      effectiveLanguage = detectLanguage(cleanMessage);
    }

    console.log(`[Chat API] Processing request | mode="${isAutoMode ? "auto" : "manual"}" | language="${effectiveLanguage}" | session="${cleanSessionId}" | query="${cleanMessage.substring(0, 40)}"`);

    const { answer, sources } = await getRAGResponse(cleanMessage, cleanSessionId, effectiveLanguage);

    res.status(200).json({
      answer,
      sources,
      language: effectiveLanguage
    });

  } catch (error) {
    console.error("[Chat API Error]:", error);

    const isRateLimit = error?.status === 429 ||
      error?.code === "rate_limit_exceeded" ||
      error?.message?.toLowerCase().includes("rate limit") ||
      error?.error?.error?.code === "rate_limit_exceeded";

    if (isRateLimit) {
      return res.status(429).json({
        error: "Rate limit reached for LLM provider. Please try again in a few moments."
      });
    }

    res.status(500).json({
      error: "Internal Server Error",
      details: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  }
};