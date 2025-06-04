// components/NavBar.tsx
import React from "react";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-3 px-4">
        <div className="text-lg font-semibold text-white">
          Harshitha Pathania
        </div>
        <ul className="flex space-x-6 text-sm font-medium text-gray-300">
          <li>
            <a href="#chatbot" className="hover:text-white">
              Chatbot
            </a>
          </li>
          <li>
            <a href="#timeline" className="hover:text-white">
              Timeline
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
