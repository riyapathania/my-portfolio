'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 px-6 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-8 text-purple-400"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed"
      >
        I’m Harshitha Pathania, I’m interested in the intersection of artificial intelligence, 
        mathematics, statistics, and quantum mechanics. These fields offer powerful frameworks for 
        understanding complexity, modeling uncertainty, and 
        exploring the foundations of intelligent systems.
        I explore how intelligence emerges when structure, 
        uncertainty, and computation collide. 
        For me, code is a language of curiosity, and every equation is a way of seeing.
        This portfolio is a canvas of code,
        creativity, and curiosity. 
      
        
      </motion.p>
    </section>
  );
}

