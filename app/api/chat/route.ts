import { NextResponse } from "next/server";
import { site } from "../../../src/lib/site";

type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

function fallbackReply(message: string) {
  const text = message.toLowerCase();

  if (text.includes("price") || text.includes("pricing") || text.includes("cost") || text.includes("plan")) {
    return "Pricing simple hai: Launch Rs 7,999, Scale Rs 14,999, aur Operate Rs 29,999 per month. Agar aap bata do business type aur current leads, main best plan suggest kar dunga.";
  }

  if (text.includes("service") || text.includes("website") || text.includes("ads") || text.includes("seo")) {
    return "Hum website, Meta/Google ads, local SEO, WhatsApp follow-up, CRM automation aur content system build karte hain. Goal simple hai: more calls, WhatsApp enquiries, and walk-ins.";
  }

  if (text.includes("audit") || text.includes("call") || text.includes("contact")) {
    return `Free growth audit ke liye aap WhatsApp kar sakte ho: ${site.phoneDisplay}. Main suggest karunga aap current leads/month, business type aur city mention kar do.`;
  }

  if (text.includes("whatsapp") || text.includes("phone") || text.includes("number")) {
    return `WhatsApp: ${site.phoneDisplay}. Aap message bhejo: "Free growth audit chahiye" and team connect kar legi.`;
  }

  return "Bilkul. Aap apna business type, city, current leads/month, aur main problem bata do. Main suggest kar dunga ki website, ads, SEO ya follow-up me se sabse pehle kya improve karna chahiye.";
}

export async function POST(request: Request) {
  const { messages = [] } = (await request.json()) as { messages?: ChatMessage[] };
  const cleanedMessages = messages
    .filter((message) => message?.content && (message.role === "user" || message.role === "assistant"))
    .slice(-8);
  const lastUserMessage =
    [...cleanedMessages].reverse().find((message) => message.role === "user")?.content ?? "";

  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL;

  if (apiKey && model) {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          temperature: 0.4,
          messages: [
            {
              role: "system",
              content:
                "You are RiyanshX Digital's website chatbot. Reply in friendly Hinglish. Keep answers under 80 words. Help Indian local businesses understand services, pricing, audits, WhatsApp follow-up, ads, SEO, CRM, and websites. Ask one useful follow-up question when needed. Do not make guaranteed revenue claims.",
            },
            ...cleanedMessages,
          ],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data?.choices?.[0]?.message?.content;

        if (reply) {
          return NextResponse.json({ reply });
        }
      }
    } catch {
      // Fall through to the local response so the chat never breaks.
    }
  }

  return NextResponse.json({ reply: fallbackReply(lastUserMessage) });
}
