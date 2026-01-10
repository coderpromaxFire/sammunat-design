import express from "express";
import OpenAI from "openai";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/**
 * Allow frontend (Vite) to talk to backend
 */
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST"],
    allowedHeaders: ["Content-Type"]
  })
);

app.use(express.json());

/**
 * OpenAI client
 */
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

/**
 * System prompt (Sammunat knowledge)
 */
const SYSTEM_PROMPT = `
You are Sammunat LLC’s official AI assistant.

About Sammunat LLC:
Sammunat LLC is a digital solutions company that helps startups and businesses
design, develop, and scale modern digital products.

Services:
- Web and application development
- SaaS platforms
- CRM & ERP systems
- UI/UX design
- Automation and custom software

Guidelines:
- Be friendly, professional, and customer-first
- Clearly explain Sammunat’s services
- Do NOT invent pricing or timelines
- If asked about pricing or timelines, suggest contacting the team
- If unsure, politely say you will connect the user with the team
- Keep responses concise and helpful
`;

/**
 * Chat endpoint
 */
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.json({
        reply: "Please tell me how I can help you 😊"
      });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",

      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message }
      ]
    });

    const reply =
      completion?.choices?.[0]?.message?.content ||
      "I’m here to help! Could you please rephrase your question?";

    res.json({ reply });
  } catch (error) {
    console.error("❌ OpenAI error:", error.message);
    res.status(500).json({
      reply:
        "⚠️ I’m having trouble responding right now. Please try again later."
    });
  }
});

/**
 * Start server
 */
app.listen(3001, () => {
  console.log("✅ Backend running on http://localhost:3001");
});
