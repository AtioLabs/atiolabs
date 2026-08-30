"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function LivingHeroBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const birdsRef = useRef<HTMLDivElement | null>(null);
  const cloud1Ref = useRef<HTMLDivElement | null>(null);
  const cloud2Ref = useRef<HTMLDivElement | null>(null);
  const personBreathRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Soaring Pixel Birds (Organic Flight Path & Gentle Flap)
      if (birdsRef.current) {
        gsap.to(birdsRef.current, {
          x: -60,
          y: -25,
          duration: 12,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(".pixel-bird-wing", {
          scaleY: 0.6,
          transformOrigin: "center bottom",
          duration: 0.45,
          repeat: -1,
          yoyo: true,
          stagger: 0.08,
          ease: "power1.inOut",
        });
      }

      // 2. Drifting Pixel Clouds (Parallax Horizontal Drift)
      if (cloud1Ref.current) {
        gsap.to(cloud1Ref.current, {
          x: 40,
          duration: 18,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (cloud2Ref.current) {
        gsap.to(cloud2Ref.current, {
          x: -50,
          duration: 22,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // 3. Gentle Breeze on Daisy Flowers
      gsap.to(".pixel-daisy-stem", {
        rotation: 4,
        transformOrigin: "bottom center",
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.3,
          from: "random",
        },
        ease: "sine.inOut",
      });

      // 4. Peaceful Breathing Motion on the Relaxing Figure
      if (personBreathRef.current) {
        gsap.to(personBreathRef.current, {
          scaleY: 1.035,
          scaleX: 1.01,
          transformOrigin: "center bottom",
          duration: 3.5,
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
      {/* 1. Base Pixel Landscape Image */}
      <div className="relative w-full h-full">
        <Image
          src="/hero-bg.png"
          alt="Living Hero Landscape"
          fill
          className="object-cover object-[center_bottom] opacity-80 sm:opacity-90"
          priority
        />

        {/* 2. Drifting Pixel Cloud Layer 1 (Above Left Ridge) */}
        <div
          ref={cloud1Ref}
          className="absolute left-[15%] top-[28%] sm:top-[32%] w-32 sm:w-48 h-12 pointer-events-none opacity-40 blur-[0.5px]"
        >
          <svg viewBox="0 0 100 30" className="w-full h-full fill-white/80">
            <rect x="10" y="12" width="60" height="10" rx="5" />
            <rect x="25" y="6" width="35" height="12" rx="6" />
            <rect x="50" y="10" width="30" height="8" rx="4" />
          </svg>
        </div>

        {/* 3. Drifting Pixel Cloud Layer 2 (Above Mountain Peak) */}
        <div
          ref={cloud2Ref}
          className="absolute right-[20%] top-[22%] sm:top-[26%] w-36 sm:w-56 h-14 pointer-events-none opacity-35 blur-[0.5px]"
        >
          <svg viewBox="0 0 100 30" className="w-full h-full fill-white/80">
            <rect x="15" y="10" width="70" height="12" rx="6" />
            <rect x="30" y="4" width="40" height="14" rx="7" />
          </svg>
        </div>

        {/* 4. Animated Soaring Pixel Birds Flock */}
        <div
          ref={birdsRef}
          className="absolute right-[18%] sm:right-[24%] top-[18%] sm:top-[22%] w-28 sm:w-36 h-20 pointer-events-none opacity-85"
        >
          <svg viewBox="0 0 120 80" className="w-full h-full fill-[#3D4A41]">
            {/* Bird 1 */}
            <g className="pixel-bird-wing" transform="translate(60, 10)">
              <polygon points="0,4 6,0 12,4 10,6 6,3 2,6" />
            </g>
            {/* Bird 2 */}
            <g className="pixel-bird-wing" transform="translate(40, 22) scale(0.85)">
              <polygon points="0,4 6,0 12,4 10,6 6,3 2,6" />
            </g>
            {/* Bird 3 */}
            <g className="pixel-bird-wing" transform="translate(78, 20) scale(0.75)">
              <polygon points="0,4 6,0 12,4 10,6 6,3 2,6" />
            </g>
            {/* Bird 4 */}
            <g className="pixel-bird-wing" transform="translate(95, 12) scale(0.65)">
              <polygon points="0,4 6,0 12,4 10,6 6,3 2,6" />
            </g>
            {/* Bird 5 */}
            <g className="pixel-bird-wing" transform="translate(25, 30) scale(0.6)">
              <polygon points="0,4 6,0 12,4 10,6 6,3 2,6" />
            </g>
          </svg>
        </div>

        {/* 5. Breathing Animation Overlay on Person's Chest/Torso */}
        <div
          ref={personBreathRef}
          className="absolute left-[12%] sm:left-[16%] md:left-[18%] bottom-[12%] sm:bottom-[15%] w-24 sm:w-32 h-16 pointer-events-none opacity-30 mix-blend-overlay"
        >
          <div className="w-full h-full bg-gradient-to-t from-transparent via-white/40 to-transparent rounded-full blur-md" />
        </div>

        {/* 6. Breeze-Swayed Flower Accent Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-44 pointer-events-none">
          <div className="pixel-daisy-stem absolute left-[8%] bottom-10 w-4 h-4 opacity-75">
            <svg viewBox="0 0 16 16" className="w-full h-full fill-white">
              <rect x="6" y="2" width="4" height="4" />
              <rect x="2" y="6" width="4" height="4" />
              <rect x="10" y="6" width="4" height="4" />
              <rect x="6" y="10" width="4" height="4" />
              <rect x="6" y="6" width="4" height="4" fill="#FBBF24" />
            </svg>
          </div>
          <div className="pixel-daisy-stem absolute left-[22%] bottom-14 w-4 h-4 opacity-75">
            <svg viewBox="0 0 16 16" className="w-full h-full fill-white">
              <rect x="6" y="2" width="4" height="4" />
              <rect x="2" y="6" width="4" height="4" />
              <rect x="10" y="6" width="4" height="4" />
              <rect x="6" y="10" width="4" height="4" />
              <rect x="6" y="6" width="4" height="4" fill="#FBBF24" />
            </svg>
          </div>
          <div className="pixel-daisy-stem absolute left-[45%] bottom-8 w-4 h-4 opacity-75">
            <svg viewBox="0 0 16 16" className="w-full h-full fill-white">
              <rect x="6" y="2" width="4" height="4" />
              <rect x="2" y="6" width="4" height="4" />
              <rect x="10" y="6" width="4" height="4" />
              <rect x="6" y="10" width="4" height="4" />
              <rect x="6" y="6" width="4" height="4" fill="#FBBF24" />
            </svg>
          </div>
          <div className="pixel-daisy-stem absolute right-[28%] bottom-12 w-4 h-4 opacity-75">
            <svg viewBox="0 0 16 16" className="w-full h-full fill-white">
              <rect x="6" y="2" width="4" height="4" />
              <rect x="2" y="6" width="4" height="4" />
              <rect x="10" y="6" width="4" height="4" />
              <rect x="6" y="10" width="4" height="4" />
              <rect x="6" y="6" width="4" height="4" fill="#FBBF24" />
            </svg>
          </div>
        </div>

        {/* 7. Seamless Top Gradient Blend into Cream Canvas */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBFAF6] via-[#FBFAF6]/35 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
