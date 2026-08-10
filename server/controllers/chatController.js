import { getRAGResponse }
  from "../services/ragService.js";

export const chatWithBot = async (req, res) => {
  try {
    //const { message } = req.body;
    const { message, sessionId } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required"
      });
    }

    const { answer, sources } = await getRAGResponse(message, sessionId);

    res.status(200).json({
      answer,
      sources
    });

  } catch (error) {
    console.error("Controller Error:", error);

    res.status(500).json({
      error: error.message
    });
  }
};