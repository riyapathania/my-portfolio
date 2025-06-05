'use client';

import { motion } from "framer-motion";
import QuantumBackground from "../../components/QuantumBackground";
import AnimatedName from "../../components/AnimatedName";
import NavBar from "../../components/NavBar";
import Chatbot from "../../components/Chatbot";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0f0c29] overflow-hidden text-white font-sans">
      {/* Background */}
      <QuantumBackground />

      {/* Navigation Bar */}
      <NavBar />

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <AnimatedName name="Harshitha Pathania" />
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">
            Exploring Intelligence, Mathematics, and the Future of Human-Machine Synergy.
          </p>
        </motion.div>

        {/* Chatbot Area */}
        <div className="mt-12 w-full max-w-xl">
          <h2 className="text-xl font-semibold mb-2">Ask Me Anything</h2>
          <Chatbot />
          <p className="text-xs text-gray-400 mt-2">
            (Powered by RAG: ask anything about my background, projects, or quantum research.)
          </p>
        </div>
      </div>
    </main>
  );
}

