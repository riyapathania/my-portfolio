// components/StarfieldBackground.tsx
"use client";
import React, { useRef, useEffect } from "react";

const StarfieldBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    interface Star {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      dAlpha: number;
    }

    // Number of stars
    const numStars = 250;
    const stars: Star[] = Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.2,
      alpha: Math.random(),
      dAlpha: Math.random() * 0.02 + 0.005,
    }));

    const draw = () => {
      if (!ctx) return;
      // Dark background each frame
      ctx.fillStyle = "#000011";
      ctx.fillRect(0, 0, width, height);

      // Draw each star with twinkle
      stars.forEach((star) => {
        star.alpha += star.dAlpha;
        if (star.alpha <= 0 || star.alpha >= 1) star.dAlpha = -star.dAlpha;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    // Handle window resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
    />
  );
};

export default StarfieldBackground;
