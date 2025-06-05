'use client';
import { ReactNode } from 'react';

export function MotionCard({ children }: { children: ReactNode }) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 shadow-xl transition-all hover:shadow-2xl hover:bg-white/10 backdrop-blur-md">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-20 transition pointer-events-none" />
      {children}
    </div>
  );
}
