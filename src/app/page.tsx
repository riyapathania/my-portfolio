'use client';

import { motion } from 'framer-motion';
import AnimatedName from '@/components/AnimatedName';
import StarfieldBackground from '@/components/StarfieldBackground';
import NavBar from '@/components/NavBar';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0f0c29] text-white overflow-hidden">
      {/* 🌌 Starfield (fixed and behind all content) */}
      <StarfieldBackground />

      {/* 🧭 Navigation */}
      <NavBar />

      {/* 🎯 Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="space-y-6 w-full"
        >
          <AnimatedName name="Harshitha Pathania" />
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4">
            Investigating the mathematical underpinnings of intelligence and reimagining the collaborative potential between humans and intelligent systems.
          </p>

          {/* 🤖 Embedded Chatbot */}
          <div className="mt-6 w-full max-w-xl mx-auto">
            <Chatbot />
          </div>
        </motion.div>
      </div>

      {/* 📚 Sections */}
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}

