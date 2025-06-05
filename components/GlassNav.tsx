'use client';
import Link from 'next/link';

export default function GlassNav() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 shadow-lg flex gap-6 text-sm text-zinc-200">
      <Link href="#hero" className="hover:text-white transition">
        Home
      </Link>
      <Link href="#projects" className="hover:text-white transition">
        Projects
      </Link>
      <Link href="#timeline" className="hover:text-white transition">
        Timeline
      </Link>
      <Link href="#contact" className="hover:text-white transition">
        Contact
      </Link>
    </nav>
  );
}
