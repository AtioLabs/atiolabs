"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import PixelSpriteSheet from "./PixelSpriteSheet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Assurance() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);

  const cards = [
    {
      num: "01",
      rule: "Every entry is checked before it is posted.",
      colorBar: "bg-[#EF4444]", // Red
      tag: "Pre-Post Verification",
      tilt: "-rotate-1",
      widthClass: "md:col-span-6 lg:col-span-6",
    },
    {
      num: "02",
      rule: "GST and TDS are recorded correctly.",
      colorBar: "bg-[#3B82F6]", // Blue
      tag: "Statutory Tax Code",
      tilt: "rotate-1",
      widthClass: "md:col-span-6 lg:col-span-6",
    },
    {
      num: "03",
      rule: "Locked periods reject new entries.",
      colorBar: "bg-[#10B981]", // Emerald
      tag: "Period Protection",
      tilt: "rotate-2",
      widthClass: "md:col-span-6 lg:col-span-4",
    },
    {
      num: "04",
      rule: "Corrections keep their history.",
      colorBar: "bg-[#F59E0B]", // Amber
      tag: "Immutable Lineage",
      tilt: "-rotate-2",
      widthClass: "md:col-span-6 lg:col-span-4",
    },
    {
      num: "05",
      rule: "Every report comes from the transactions in the books.",
      colorBar: "bg-[#8B5CF6]", // Purple
      tag: "Direct Source of Truth",
      tilt: "rotate-1",
      widthClass: "md:col-span-12 lg:col-span-4",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Headline Scrub Effect
      gsap.fromTo(
        headlineRef.current,
        {
          opacity: 0.3,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 85%",
            end: "top 45%",
            scrub: true,
          },
        }
      );

      // 2. Staggered Hardware Cards Lift
      gsap.fromTo(
        ".assurance-card-item",
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="assurance" className="py-28 md:py-36 lg:py-44 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 md:px-6 relative">
        
        {/* Section Header with 4-Frame Animated Sleeping Spritesheet */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 relative z-10 flex flex-col items-center">
          {/* Animated Eyebrow */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#15803D]/20 shadow-sm text-xs mb-6 sm:mb-8 group hover:scale-105 transition-all">
            <PixelSpriteSheet
              sheetSrc="/sprites/sleeping-spritesheet.png"
              totalFrames={4}
              frameWidth={44}
              frameHeight={41}
              durationSeconds={1.8}
              alt="Sleeping animation cycle"
            />
            <span className="font-mono text-xs text-[#15803D] font-bold">{`{ ^-^ }`}</span>
            <span className="font-sans text-xs text-[#14532D] font-medium whitespace-nowrap">
              sleep through the audit
            </span>
          </div>

          <h2
            ref={headlineRef}
            className="font-display font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] text-[#141413] leading-[1.12]"
          >
            The books don&apos;t move unless they balance
          </h2>
        </div>

        {/* 5 ORGANIC FLOATING macOS WINDOW CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl mx-auto relative z-10">
          {cards.map((item, idx) => (
            <div
              key={idx}
              className={`assurance-card-item ${item.widthClass} mac-window overflow-hidden bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ${item.tilt}`}
            >
              {/* Colorful macOS Titlebar */}
              <div className="mac-titlebar bg-[#F8F6F0] relative">
                <div className="traffic-dots">
                  <span className="dot-close"></span>
                  <span className="dot-min"></span>
                  <span className="dot-zoom"></span>
                </div>
                <span className="font-mono text-[10px] text-[#8C8885] uppercase tracking-wider">
                  {item.tag}
                </span>
                <div className="w-6"></div>

                {/* Colorful Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${item.colorBar}`} />
              </div>

              {/* Clean Card Body */}
              <div className="p-7 md:p-8 flex flex-col justify-center min-h-[140px]">
                <p className="font-sans text-base sm:text-lg text-[#141413] leading-relaxed font-normal">
                  {item.rule}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
