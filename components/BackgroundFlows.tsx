"use client";

import { useEffect, useRef } from "react";

export default function BackgroundFlows() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Track scroll position
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // River flow parameters
    let time = 0;
    const gridSpacing = 60;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw extremely faint, minimal background grid
      ctx.strokeStyle = "rgba(34, 28, 98, 0.015)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSpacing) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      if (prefersReducedMotion) {
        // Draw static minimal background and exit
        return;
      }

      // 2. Animate River Flow
      // The flow is driven by time + scroll velocity
      time += 0.015;
      const scrollOffset = scrollYRef.current * 0.0025;
      const flowPhase = time + scrollOffset;

      ctx.lineWidth = 1.2;

      // Draw multiple parallel winding "water threads" representing the River flow
      const numThreads = 5;
      for (let t = 0; t < numThreads; t++) {
        // Subtle variations for each stream line
        const threadOffset = t * 12 - (numThreads * 6);
        const waveScale = 60 + (t * 8);
        const frequency = 0.002 + (t * 0.0003);
        const opacity = 0.035 - (t * 0.003);

        ctx.strokeStyle = `rgba(34, 28, 98, ${opacity})`;
        ctx.beginPath();

        let first = true;
        for (let y = -20; y < height + 20; y += 8) {
          // Math for winding path down the screen
          const sinWave = Math.sin(y * frequency + flowPhase + (t * 0.25));
          const cosWave = Math.cos(y * 0.0008 - flowPhase * 0.5);
          
          // Center of the river shifts slightly based on coordinates
          const centerX = width * 0.5 + cosWave * 120;
          const x = centerX + sinWave * waveScale + threadOffset;

          if (first) {
            ctx.moveTo(x, y);
            first = false;
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // 3. Draw tiny glowing "data nodes" flowing along the river
      ctx.fillStyle = "rgba(34, 28, 98, 0.05)";
      const numParticles = 8;
      for (let i = 0; i < numParticles; i++) {
        // Calculate particle position along the flow
        const pOffset = (i * (height / numParticles) + (time * 120 + scrollYRef.current * 0.8)) % (height + 40) - 20;
        const pPhase = flowPhase + (i * 0.5);
        const pCos = Math.cos(pOffset * 0.0008 - flowPhase * 0.5);
        const pCenterX = width * 0.5 + pCos * 120;
        const pX = pCenterX + Math.sin(pOffset * 0.002 + pPhase) * 70;

        ctx.beginPath();
        ctx.arc(pX, pOffset, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationIdRef.current = requestAnimationFrame(draw);
    };

    // Intersection Observer to pause rendering when document isn't visible or canvas leaves view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            draw();
          } else {
            if (animationIdRef.current) {
              cancelAnimationFrame(animationIdRef.current);
            }
          }
        });
      },
      { threshold: 0.02 }
    );

    observer.observe(canvas);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", overflow: "hidden", zIndex: 0, pointerEvents: "none" }}>
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
