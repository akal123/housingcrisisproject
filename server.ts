import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  app.use(express.json());
  const PORT = 3000;

  let aiClient: GoogleGenAI | null = null;
  function getGemini(): GoogleGenAI {
    if (!aiClient) {
      const key = process.env.GEMINI_API_KEY;
      if (!key) {
        throw new Error("GEMINI_API_KEY environment variable is required");
      }
      aiClient = new GoogleGenAI({
        apiKey: key,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    }
    return aiClient;
  }

  // API Route for Chatbot
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, lang } = req.body;
      
      let ai;
      try {
        ai = getGemini();
      } catch (keyError) {
        // Return a mock simulated conversational response if API key is not yet set
        console.warn("GEMINI_API_KEY not configured. Falling back to simulated answer.");
        const sampleResponse = getSimulatedAnswer(message, lang);
        return res.json({ text: sampleResponse, isSimulated: true });
      }

      const systemInstruction = `
You are LanderBot, the friendly Virtual AI Assistant of HomeLander AI. 
HomeLander AI is an open civic technology platform and Winston-Salem high school housing innovation project focused on housing affordability, smarter housing matching, and transit integration for Winston-Salem, Forsyth County, and the Piedmont Triad region of North Carolina.

Your context and rules of conversation:
- Keep answers professional, concise, encouraging, and informative (maximum 2-3 short, clean paragraphs). Avoid extremely long blocks of text.
- Do not make up fake listings. Mention that users can browse properties like Sunrise Manor, Piedmont Plaza, Oak Grove Townhomes, or Innovation Apartments using our interactive AI Matchmaker tool.
- Inform users that our database includes Housing Choice Vouchers (Section 8) eligibility, PART bus route proximity, downpayment programs, and energy assistance-related properties.
- Always match the user's input language (English or Spanish). Address the user based on the language parameter provided: ${lang === 'es' ? 'Spanish' : 'English'}.
`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: message,
        config: {
          systemInstruction,
        }
      });

      res.json({ text: response.text || "I'm sorry, I couldn't generate a reply." });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  });

  // Simulated fallback helper so the app works beautifully even before API key is uploaded
  function getSimulatedAnswer(message: string, lang: 'en' | 'es'): string {
    const msg = message.toLowerCase();
    if (lang === 'es') {
      if (msg.includes('asequible') || msg.includes('calcula') || msg.includes('precio') || msg.includes('afecto')) {
        return "¡Buen día! HomeLander calcula la asequibilidad de vivienda usando la regla del 30% del ingreso bruto. Sumamos alquiler bruto, servicios públicos estimados y tiempos de viaje en autobús para guiarte mejor.";
      }
      if (msg.includes('cupón') || msg.includes('vale') || msg.includes('sección 8') || msg.includes('seccion 8') || msg.includes('haws')) {
        return "¡Hola! Sí, HomeLander AI destaca las viviendas en Winston-Salem que aceptan cupones de alquiler de la Sección 8 (HAWS) para evitar desplazamientos lejanos e innecesarios.";
      }
      if (msg.includes('colaborar' ) || msg.includes('escuela') || msg.includes('proyecto')) {
        return "¡Nos encanta la participación comunitaria! Agencias locales y propietarios pueden usar nuestra API abierta. Contáctanos para patrocinar tableros locales.";
      }
      return `¡Hola! Como LanderBot virtual de HomeLander AI, puedo responder a todas tus dudas sobre vivienda, transporte, y subsidios HAWS en Winston-Salem. ¿En qué puedo orientarte hoy? (Modo de demostración interactiva)`;
    } else {
      if (msg.includes('afford') || msg.includes('calculate') || msg.includes('price') || msg.includes('cost')) {
        return "Hello! HomeLander AI calculates affordability dynamically. We check if your combined rent, estimated utilities, and transit/gas commute fits within 30% of your household budget.";
      }
      if (msg.includes('section 8') || msg.includes('voucher') || msg.includes('subsidy') || msg.includes('haws')) {
        return "Absolutely! HomeLander AI highlights properties that accept Housing Choice Vouchers (Section 8 HAWS) and prioritizes listings with high transit accessibility.";
      }
      if (msg.includes('partner') || msg.includes('school') || msg.includes('volunteer')) {
        return "We love community partnerships! Local agencies, developers, and landlords can collaborate with our high school team. Reach out to sponsor civic tech overlays.";
      }
      return `Hi there! I am LanderBot, your conversational HomeLander AI assistant. Ask me anything about Winston-Salem housing assistance, PART transit proximity, and Section 8 setups! (Conversational simulation)`;
    }
  }

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
