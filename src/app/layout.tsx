// src/app/layout.tsx
import React from "react";

export const metadata = {
  title: "Harshitha Pathania – Quantum AI Portfolio",
  description: "A starry, quantum-themed portfolio built with Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}

