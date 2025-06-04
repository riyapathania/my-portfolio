"use client";

import React from "react";

export default function AtomSVG() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
      <svg
        viewBox="0 0 200 200"
        className="w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] opacity-30 select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="4" fill="#FFFFFF" />
        <ellipse cx="100" cy="100" rx="60" ry="20" fill="none" stroke="#FFFFFF" strokeOpacity="0.25" />
        <ellipse cx="100" cy="100" rx="20" ry="60" fill="none" stroke="#FFFFFF" strokeOpacity="0.25" transform="rotate(60 100 100)" />
        <ellipse cx="100" cy="100" rx="20" ry="60" fill="none" stroke="#FFFFFF" strokeOpacity="0.25" transform="rotate(120 100 100)" />
        <circle r="3" fill="#FFCC00">
          <animateMotion dur="6s" repeatCount="indefinite" path="M160,100 A60,20 0 1,1  40,100 A60,20 0 1,1 160,100" />
        </circle>
        <circle r="3" fill="#FFCC00">
          <animateMotion dur="8s" repeatCount="indefinite" path="M100,40 A20,60 0 1,1 100,160 A20,60 0 1,1 100,40" />
        </circle>
        <circle r="3" fill="#FFCC00">
          <animateMotion dur="10s" repeatCount="indefinite" path="M100,160 A20,60 0 1,0 100,40 A20,60 0 1,0 100,160" />
        </circle>
      </svg>
    </div>
  );
}


