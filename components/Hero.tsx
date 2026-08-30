"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LivingHeroBackground from "./LivingHeroBackground";

const KAOMOJI_EXPRESSIONS = ["{ ^-^ }", "{ ^o^ }", "(•‿•)", "{ ^-^ }"];

export default function Hero() {
  const [kaomojiIndex, setKaomojiIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const centerTextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setKaomojiIndex((prev) => (prev + 1) % KAOMOJI_EXPRESSIONS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(Draggable, ScrollTrigger);

    // 1. GSAP Draggable Physics for Desktop and Mobile Touch
    const draggables = Draggable.create(".gsap-draggable-card", {
      type: "x,y",
      edgeResistance: 0.65,
      bounds: containerRef.current || window,
      inertia: true,
      cursor: "grab",
      activeCursor: "grabbing",
      zIndexBoost: true,
    });

    // 2. Calibrated Parallax
    const ctx = gsap.context(() => {
      gsap.to(".parallax-card-top-right", {
        y: 35,
        x: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".parallax-card-top-left", {
        y: 30,
        x: -15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".parallax-card-bottom-right", {
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".parallax-card-bottom-left", {
        y: 35,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.3,
        },
      });

      // Subtle scale and fade of hero center text on scroll
      gsap.to(centerTextRef.current, {
        opacity: 0.15,
        scale: 0.96,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => {
      draggables.forEach((d) => d.kill());
      ctx.revert();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[96vh] flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 pt-24 pb-20"
    >
      {/* LIVING PIXEL-ART HERO BACKGROUND (Birds, Clouds, Flowers & Breathing Person) */}
      <LivingHeroBackground />

      {/* Container for Centered Text and Scattered Interactive Floating Desktop & Mobile Artifacts */}
      <div className="relative w-full max-w-[1440px] mx-auto min-h-[580px] sm:min-h-[660px] flex flex-col justify-center items-center z-10">
        
        {/* ARTIFACT 01: River Retro Computer Mascot (Top-Right on Mobile & Desktop) */}
        <div
          style={{ touchAction: "none" }}
          className="gsap-draggable-card parallax-card-top-right absolute right-2 sm:right-8 lg:right-24 top-4 sm:top-20 lg:top-28 z-20 select-none cursor-grab active:cursor-grabbing"
        >
          <div className="p-2.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-md border border-[#141413]/10 shadow-lg sm:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 relative flex items-center justify-center pointer-events-none">
              <Image
                src="/river-logo.png"
                alt="River Retro Computer Mascot"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-1 sm:mt-2 text-center pointer-events-none">
              <span className="font-mono text-[10px] sm:text-xs text-[#172554] font-bold block transition-all duration-300">
                {KAOMOJI_EXPRESSIONS[kaomojiIndex]}
              </span>
              <span className="font-mono text-[8px] sm:text-[10px] text-[#15803D] font-semibold hidden xs:block">
                books balanced
              </span>
            </div>
          </div>
        </div>

        {/* ARTIFACT 02: Pure Asynarch Great Wave Sticker (Top-Left on Mobile & Desktop) */}
        <div
          style={{ touchAction: "none" }}
          className="gsap-draggable-card parallax-card-top-left absolute left-2 sm:left-8 lg:left-24 top-4 sm:top-20 lg:top-28 z-20 select-none -rotate-6 cursor-grab active:cursor-grabbing"
        >
          <div className="p-2 sm:p-4 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-md border border-[#141413]/10 shadow-lg sm:shadow-xl hover:scale-105 hover:rotate-0 transition-all duration-300">
            <div className="h-8 sm:h-14 md:h-16 aspect-[3/2] relative flex items-center justify-center mx-auto pointer-events-none">
              <Image
                src="/asynarch-logo.png"
                alt="Asynarch Wave Mark"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* ARTIFACT 03: WhatsApp Voice Note Pill (Bottom-Right on Mobile & Desktop) */}
        <div
          style={{ touchAction: "none" }}
          className="gsap-draggable-card parallax-card-bottom-right absolute right-2 sm:right-12 bottom-4 sm:bottom-12 z-20 select-none rotate-2 sm:rotate-3 cursor-grab active:cursor-grabbing"
        >
          <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full bg-[#EFEAE2]/95 backdrop-blur-md border border-[#25D366]/40 shadow-md sm:shadow-lg hover:scale-105 transition-transform">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center text-[9px] sm:text-[10px] font-bold pointer-events-none shrink-0">
              W
            </div>
            <div className="pointer-events-none">
              <p className="text-[10px] sm:text-xs font-sans text-[#075E54] font-medium leading-none">
                &ldquo;Alpha paid with TDS&rdquo;
              </p>
              <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 sm:mt-1 text-[8px] sm:text-[10px] font-mono text-[#57534E]">
                <span className="sound-bars !gap-0.5 !h-2.5 sm:!h-3">
                  <i className="!bg-[#25D366]"></i>
                  <i className="!bg-[#25D366]"></i>
                  <i className="!bg-[#25D366]"></i>
                  <i className="!bg-[#25D366]"></i>
                </span>
                <span>0:04 · 10:42 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* ARTIFACT 04: Chill Kaomoji Badge (Bottom-Left on Mobile & Desktop) */}
        <div
          style={{ touchAction: "none" }}
          className="gsap-draggable-card parallax-card-bottom-left absolute left-2 sm:left-12 bottom-4 sm:bottom-12 z-20 select-none rotate-2 sm:rotate-3 cursor-grab active:cursor-grabbing"
        >
          <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#141413]/10 shadow-sm sm:shadow-md text-center hover:scale-105 transition-transform">
            <span className="font-mono text-[10px] sm:text-xs text-[#172554] font-medium pointer-events-none">
              (⌐■_■) 0.4s · auto
            </span>
          </div>
        </div>

        {/* ARTIFACT 05: Balanced Equilibrium Seal (Desktop) */}
        <div
          style={{ touchAction: "none" }}
          className="gsap-draggable-card hidden xl:block absolute right-32 top-1/2 -translate-y-8 z-20 select-none -rotate-3 cursor-grab active:cursor-grabbing"
        >
          <div className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#15803D]/20 shadow-md text-center hover:scale-105 transition-transform">
            <span className="font-mono text-[11px] text-[#15803D] font-bold pointer-events-none">
              BALANCED · ₹0.00 VARIANCE
            </span>
          </div>
        </div>

        {/* HERO CENTER TEXT STAGE */}
        <div
          ref={centerTextRef}
          className="relative z-10 text-center max-w-4xl lg:max-w-5xl mx-auto py-8 sm:py-12 px-4 flex flex-col items-center justify-center"
        >
          {/* Display Headline */}
          <h1 className="font-display font-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.035em] text-[#141413] leading-[1.05] mb-6 sm:mb-8 text-center">
            The Accounting, as it happens
          </h1>

          {/* Subhead */}
          <p className="font-sans text-base sm:text-xl md:text-2xl lg:text-3xl text-[#57534E] font-normal leading-relaxed mb-8 sm:mb-12 max-w-2xl text-center">
            Tell River what happened. It does the rest.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => scrollToSection("waitlist")}
              className="btn-indigo px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-sans font-medium cursor-pointer shadow-lg hover:scale-105 transition-transform"
            >
              Join the waitlist
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="px-5 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-[#141413] border border-[#141413]/10 text-sm sm:text-base font-sans font-medium transition-all shadow-sm cursor-pointer hover:scale-105"
            >
              How it works →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
