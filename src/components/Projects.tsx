'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Marketplace App',
    description: 'Java-based client-server system with real-time messaging and GUI.',
    link: 'https://github.com/kbansal18/TeamProject',
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive full-stack portfolio with Next.js, Tailwind, Framer Motion.',
    link: 'https://github.com/riyapathania/my-portfolio',
  },
  {
    title: 'Maze Solver',
    description: 'Shortest path algorithm implemented with Java and OOP.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 px-6 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-white"
      >
        Projects
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#1e1b4b] p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-[#2d2a55]"
          >
            <h3 className="text-xl font-semibold mb-2 text-purple-300">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm">{project.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
