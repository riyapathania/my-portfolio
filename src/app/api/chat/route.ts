import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("📩 Chatbot API hit");

  const { prompt } = await req.json();

  if (!prompt) {
    return NextResponse.json(
      { reply: "Missing prompt." },
      { status: 400 }
    );
  }

  const apiKey = "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"; // Your GROQ API key
  const apiUrl = "https://api.groq.com/openai/v1/chat/completions";

  const payload = {
    model: "llama3-70b-8192",
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
    console.log("✅ Groq response:", JSON.stringify(data, null, 2));

    const reply = data?.choices?.[0]?.message?.content?.trim();
    return NextResponse.json({ reply: reply || "[No response from model]" });
  } catch (err: any) {
    console.error("❌ Error reaching Groq:", err);
    return NextResponse.json(
      { reply: "Server error: " + err.message },
      { status: 500 }
    );
  }
}





