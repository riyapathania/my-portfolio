"use client";
import React from "react";

const items = [
  { year: "2023", text: "Started exploring quantum AI" },
  { year: "2024", text: "Built this portfolio" },
];

export default function Timeline() {
  return (
    <section id="timeline" className="max-w-2xl mx-auto px-4 mt-20">
      <h2 className="text-3xl font-semibold text-white mb-8 text-center">My Journey</h2>
      <ul className="relative border-l border-gray-600 pl-6">
        {items.map((item, idx) => (
          <li key={idx} className="mb-8">
            <span className="absolute -left-3 top-1 w-2 h-2 bg-blue-500 rounded-full" />
            <p className="text-sm text-gray-400">{item.year}</p>
            <p className="text-white">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
