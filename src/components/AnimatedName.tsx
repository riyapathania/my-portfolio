'use client';
import { motion } from 'framer-motion';

export default function AnimatedName({ name }: { name: string }) {
  return (
    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
      {name.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
}
