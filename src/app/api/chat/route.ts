import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("📩 Chatbot API hit");

  const { prompt } = await req.json();

  // ✅ Load from .env.local (don't hardcode)
  const apiKey = process.env.GROQ_API_KEY;
  const apiUrl = "https://api.groq.com/openai/v1/chat/completions";

  if (!apiKey) {
    console.error("❌ Missing GROQ_API_KEY in .env.local");
    return NextResponse.json(
      { reply: "Server error: API key not configured." },
      { status: 500 }
    );
  }

  const payload = {
    model: "llama3-70b-8192", // ✅ Working Groq model
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
  };

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log("✅ Groq API response:", data);

    const reply = data.choices?.[0]?.message?.content ?? "No response received.";
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("❌ Groq API error:", error);
    return NextResponse.json(
      { reply: "Sorry, the chatbot is currently unavailable." },
      { status: 500 }
    );
  }
}




