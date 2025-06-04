"use client";

import React from "react";
import { motion } from "framer-motion";
interface AnimatedNameProps {
  name: string;
}

export default function AnimatedName({ name }: AnimatedNameProps) {
  return (
    <svg
      viewBox="0 0 800 200"
      className="w-full h-auto z-20 select-none pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Helvetica, Arial, sans-serif"
        fontWeight="700"
        fontSize="64"
        stroke="#FFFFFF"
        strokeWidth="2"
        fill="transparent"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { pathLength: 0, fill: "transparent" },
          visible: {
            pathLength: 1,
            fill: "rgba(255,255,255,1)",
            transition: {
              pathLength: { duration: 2, ease: "easeInOut" },
              fill: { delay: 2, duration: 1, ease: "easeInOut" },
            },
          },
        }}
      >
       {name}
      </motion.text>
    </svg>
  );
}

