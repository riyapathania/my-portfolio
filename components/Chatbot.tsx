// components/Chatbot.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  text: string;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 1) Add user's message to chat
    setMessages((prev) => [...prev, { role: "user", text: input }]);
    const promptText = input;
    setInput("");

    // 2) Call /api/chat to get the assistant's reply
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: promptText }),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      const { reply } = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Sorry, something went wrong. 🙇" },
      ]);
    }
  };

  return (
    <section id="chatbot" className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-semibold text-white mb-4 text-center">
        Ask Me Anything
      </h2>
      <div className="border border-gray-600 rounded-lg bg-black/50 shadow-md h-[400px] flex flex-col overflow-hidden">
        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-100"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input box */}
        <form
          onSubmit={sendMessage}
          className="border-t border-gray-600 px-4 py-2 flex items-center"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a question about me..."
            className="flex-1 border border-gray-500 bg-black/70 rounded-l-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
      <p className="mt-2 text-sm text-gray-400 text-center">
        (Powered by RAG: ask anything about my background, projects, or quantum
        research.)
      </p>
    </section>
  );
}
