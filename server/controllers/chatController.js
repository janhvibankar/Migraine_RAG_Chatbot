import { getRAGResponse } from "../services/ragService.js";

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

    // Validate sessionId
    if (typeof sessionId !== "string") {
      return res.status(400).json({
        error: "Session ID is required and must be a string"
      });
    }

    const cleanSessionId = sessionId.trim();

    if (cleanSessionId.length === 0 || !SESSION_ID_REGEX.test(cleanSessionId)) {
      return res.status(400).json({
        error: "Invalid sessionId: must be 1-64 alphanumeric, underscore, or hyphen characters"
      });
    }

    // Validate language strictly against supported set with "en" fallback
    let validatedLanguage = "en";
    if (typeof language === "string") {
      const cleanLang = language.trim().toLowerCase();
      if (SUPPORTED_LANGUAGES.includes(cleanLang)) {
        validatedLanguage = cleanLang;
      }
    }

    const { answer, sources } = await getRAGResponse(cleanMessage, cleanSessionId, validatedLanguage);

    res.status(200).json({
      answer,
      sources
    });

  } catch (error) {
    console.error("Chat request failed:", error);

    res.status(500).json({
      error: "Internal Server Error"
    });
  }
};