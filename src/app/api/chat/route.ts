// src/app/api/chat/route.ts
import { NextResponse } from "next/server";

// ✅ Hardcoded test key (for debugging only — DO NOT COMMIT TO GIT)
const GROQ_API_KEY = "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";
console.log("Using Groq Key:", GROQ_API_KEY.slice(0, 10) + "...");

export async function POST(req: Request) {
  const { prompt } = await req.json();

  if (!prompt) {
    return NextResponse.json({ error: "No prompt provided" }, { status: 400 });
  }

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant inside a student portfolio. Respond to questions clearly and informatively.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    const result = await res.json();
    console.log("Groq response:", JSON.stringify(result, null, 2));

    const reply = result.choices?.[0]?.message?.content?.trim();
    return NextResponse.json({
      reply: reply || "⚠️ No response from LLaMA 3.",
    });
  } catch (err) {
    console.error("Groq API error:", err);
    return NextResponse.json({ error: "Groq API call failed." }, { status: 500 });
  }
}

