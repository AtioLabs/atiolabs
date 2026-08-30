"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function LivingHeroBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const personRef = useRef<HTMLDivElement | null>(null);
  const birdsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Extremely subtle, peaceful breathing motion on the sleeping person
      // Scale from center-bottom of torso with slow, organic sinusoidal easing
      if (personRef.current) {
        gsap.to(personRef.current, {
          scaleY: 1.018,
          scaleX: 1.006,
          y: -0.4,
          transformOrigin: "35% 70%",
          duration: 3.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // 2. Slow, majestic drift on the soaring birds across the sky
      if (birdsRef.current) {
        gsap.to(birdsRef.current, {
          x: -28,
          y: -6,
          duration: 24,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-x-0 bottom-0 h-[560px] sm:h-[660px] md:h-[780px] pointer-events-none select-none z-0 overflow-hidden"
    >
      {/* Container calibrated to match the 1536x1024 artwork aspect ratio */}
      <div className="relative w-full h-full">
        {/* Layer 0: Original Static Pixel Artwork (Mountains, Sky, Hill, Colors 100% Unchanged) */}
        <Image
          src="/hero-bg.png"
          alt="River Landscape"
          fill
          className="object-cover object-[center_bottom] opacity-90 sm:opacity-95"
          priority
        />

        {/* Layer 1: Soaring Birds Layer (Exact pixel coordinates from artwork) */}
        <div
          ref={birdsRef}
          style={{
            position: "absolute",
            left: "66.667%",
            top: "38.770%",
            width: "16.146%",
            height: "7.520%",
          }}
          className="pointer-events-none will-change-transform"
        >
          <div className="relative w-full h-full">
            <Image
              src="/hero-birds.png"
              alt="Birds"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Layer 2: Sleeping Person Layer (Extracted transparent layer with subtle breathing) */}
        <div
          ref={personRef}
          style={{
            position: "absolute",
            left: "9.635%",
            top: "62.305%",
            width: "29.557%",
            height: "20.508%",
          }}
          className="pointer-events-none will-change-transform"
        >
          <div className="relative w-full h-full">
            <Image
              src="/hero-person.png"
              alt="Sleeping figure"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Layer 3: Smooth Soft Top Blend into Background Canvas */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBFAF6] via-[#FBFAF6]/25 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
