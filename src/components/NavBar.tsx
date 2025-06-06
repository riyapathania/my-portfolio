'use client';

import { motion } from 'framer-motion';

const navItems = ['About', 'Projects', 'Experience', 'Contact'];

export default function NavBar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-primary/60 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold text-white tracking-wider">
          <span className="text-purple-400">H</span>
          arshitha
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-gray-300 hover:text-white transition duration-300 hover:tracking-wide"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
