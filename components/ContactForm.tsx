// components/ContactForm.tsx
"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Error sending message");
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="max-w-lg mx-auto px-4">
      <h2 className="text-3xl font-semibold text-white mb-4 text-center">
        Get in Touch
      </h2>
      <p className="mb-6 text-gray-300 text-center">
        Whether you want to collaborate on quantum AI or just say hello, drop me
        a message below.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">
            Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-600 bg-black/50 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-600 bg-black/50 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">
            Message
          </label>
          <textarea
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-600 bg-black/50 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <p className="mt-2 text-green-500 text-center">
            Message sent! Thank you.
          </p>
        )}
        {status === "error" && (
          <p className="mt-2 text-red-500 text-center">
            Oops, something went wrong. Please try again later.
          </p>
        )}
      </form>
    </section>
  );
}
