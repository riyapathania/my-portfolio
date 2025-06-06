"use client";
import { useState } from "react";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      setResponse(data.reply);
    } catch {
      setResponse("Something went wrong. Please try again.");
    }

    setInput("");
  };

  return (
    <div className="relative z-50 flex flex-col items-center justify-center text-center mt-20 px-4">
      <p className="text-sm text-gray-400 mb-6">
        Ask me anything!
      </p>
      <form
        onSubmit={sendMessage}
        className="flex items-center border border-gray-600 rounded-full overflow-hidden w-full max-w-xl bg-black/40 backdrop-blur-sm"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything!"
          className="flex-1 px-4 py-2 bg-transparent text-white placeholder-gray-400 outline-none"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-white text-black font-medium hover:bg-gray-200 transition"
        >
          Send
        </button>
      </form>
      {response && (
        <div className="mt-6 text-sm text-gray-300 max-w-xl">{response}</div>
      )}
    </div>
  );
}


