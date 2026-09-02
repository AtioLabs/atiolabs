"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import PixelSpriteSheet from "./PixelSpriteSheet";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticFloater from "./MagneticFloater";

const KAOMOJI_EXPRESSIONS = ["{ ^-^ }", "{ ^o^ }", "(•‿•)", "{ ^-^ }"];

export default function Hero() {
  const [kaomojiIndex, setKaomojiIndex] = useState(0);
  const [mobileCompanionIndex, setMobileCompanionIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const centerTextRef = useRef<HTMLDivElement | null>(null);
  const landscapeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setKaomojiIndex((prev) => (prev + 1) % KAOMOJI_EXPRESSIONS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const companionInterval = setInterval(() => {
      setMobileCompanionIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3800);
    return () => clearInterval(companionInterval);
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

    // 2. Calibrated Parallax on scroll
    const ctx = gsap.context(() => {
      gsap.to(".parallax-card-top-right", {
        y: 35,
        x: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
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
          scrub: true,
        },
      });

      gsap.to(".parallax-card-bottom-right", {
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".parallax-card-bottom-left", {
        y: 35,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
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
          scrub: true,
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
      className="relative min-h-[96vh] flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-24"
    >
      {/* ORIGINAL STATIC PIXEL-ART HERO LANDSCAPE BANNER */}
      <div
        ref={landscapeRef}
        className="absolute inset-x-0 bottom-0 h-[460px] sm:h-[580px] md:h-[680px] lg:h-[760px] pointer-events-none select-none z-0"
      >
        <div className="relative w-full h-full">
          <Image
            src="/hero-bg.png"
            alt="River Landscape"
            fill
            sizes="100vw"
            className="object-cover object-[25%_bottom] sm:object-bottom opacity-90 sm:opacity-95"
            priority
          />
          {/* Smooth Soft Gradient Blend into Background Canvas */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FBFAF6] via-[#FBFAF6]/25 to-transparent" />
        </div>
      </div>

      {/* Container for Centered Text and Scattered Interactive Floating Desktop & Mobile Artifacts */}
      <div className="relative w-full max-w-[1440px] mx-auto min-h-[520px] sm:min-h-[640px] flex flex-col justify-center items-center z-10">
        
        {/* ARTIFACT 01: River Retro Computer Mascot (Top-Right) */}
        <div
          style={{ touchAction: "none" }}
          className="gsap-draggable-card parallax-card-top-right absolute right-2 sm:right-8 lg:right-24 top-2 sm:top-16 lg:top-24 z-20 select-none cursor-grab active:cursor-grabbing"
        >
          <div className="p-2.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-md border border-[#141413]/10 shadow-lg sm:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 relative flex items-center justify-center pointer-events-none">
              <Image
                src="/river-logo.png"
                alt="River Retro Computer Mascot"
                fill
                sizes="(max-width: 640px) 48px, (max-width: 768px) 80px, 96px"
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

        {/* ARTIFACT 02: Pure Asynarch Great Wave Sticker (Top-Left) */}
        <div
          style={{ touchAction: "none" }}
          className="gsap-draggable-card parallax-card-top-left absolute left-2 sm:left-8 lg:left-24 top-2 sm:top-16 lg:top-24 z-20 select-none -rotate-6 cursor-grab active:cursor-grabbing"
        >
          <div className="p-2 sm:p-4 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-md border border-[#141413]/10 shadow-lg sm:shadow-xl hover:scale-105 hover:rotate-0 transition-all duration-300">
            <div className="h-8 sm:h-14 md:h-16 aspect-[3/2] relative flex items-center justify-center mx-auto pointer-events-none">
              <Image
                src="/asynarch-logo.png"
                alt="Asynarch Wave Mark"
                fill
                sizes="(max-width: 640px) 48px, (max-width: 768px) 84px, 96px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* ARTIFACT 03: WhatsApp Voice Note Pill (Bottom-Right, Desktop & Tablet) */}
        <div
          style={{ touchAction: "none" }}
          className="gsap-draggable-card parallax-card-bottom-right hidden sm:block absolute right-4 sm:right-12 bottom-6 sm:bottom-12 z-20 select-none rotate-2 sm:rotate-3 cursor-grab active:cursor-grabbing"
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

        {/* ARTIFACT 04: Freedom Floater with 4-Frame Running Spritesheet (Desktop Only) */}
        <div
          style={{ touchAction: "none" }}
          className="gsap-draggable-card parallax-card-bottom-left hidden md:block absolute left-4 lg:left-12 bottom-8 lg:bottom-12 z-20 select-none rotate-2 sm:rotate-3 cursor-grab active:cursor-grabbing"
        >
          <MagneticFloater draggable={false} tiltAngle={14} floatAmplitudeY={6} floatDuration={3.4}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-xl border border-[#141413]/10 shadow-[0_8px_30px_rgba(20,20,19,0.08)] text-center transition-all group hover:scale-105">
              <PixelSpriteSheet
                sheetSrc="/sprites/running-spritesheet.png"
                totalFrames={4}
                frameWidth={24}
                frameHeight={38}
                durationSeconds={0.65}
                alt="Running sprint animation"
              />
              <span className="font-mono text-xs text-[#172554] font-semibold pointer-events-none">
                (⌐■_■)
              </span>
              <span className="font-sans text-xs text-[#141413] font-medium pointer-events-none whitespace-nowrap">
                go build something else
              </span>
            </div>
          </MagneticFloater>
        </div>

        {/* ARTIFACT 05: Origin Floater with 4-Frame Pushup Spritesheet (Desktop Only) */}
        <div
          style={{ touchAction: "none" }}
          className="gsap-draggable-card hidden md:block absolute right-4 lg:right-24 top-1/2 -translate-y-8 z-20 select-none -rotate-2 cursor-grab active:cursor-grabbing"
        >
          <MagneticFloater draggable={false} tiltAngle={14} floatAmplitudeY={6} floatDuration={3.8}>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/95 backdrop-blur-xl border border-[#141413]/10 shadow-[0_8px_30px_rgba(20,20,19,0.08)] text-center transition-all group hover:scale-105">
              <PixelSpriteSheet
                sheetSrc="/sprites/pushups-spritesheet.png"
                totalFrames={4}
                frameWidth={50}
                frameHeight={28}
                durationSeconds={1.2}
                alt="Pushups exercise animation"
              />
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] animate-pulse shrink-0"></span>
                <span className="font-sans text-xs text-[#141413] font-medium pointer-events-none whitespace-nowrap">
                  your computer has a job now
                </span>
              </div>
            </div>
          </MagneticFloater>
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

          {/* Mobile-Only Single Living Dynamic Pill (Zero Parallel Stacking!) */}
          <div className="flex md:hidden justify-center mt-7 z-20">
            <button
              onClick={() => setMobileCompanionIndex((prev) => (prev === 0 ? 1 : 0))}
              aria-label="Toggle animated status"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-xl border border-[#141413]/10 shadow-[0_4px_16px_rgba(20,20,19,0.06)] text-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {mobileCompanionIndex === 0 ? (
                <div key="pushup" className="inline-flex items-center gap-2 animate-fadeIn">
                  <PixelSpriteSheet
                    sheetSrc="/sprites/pushups-spritesheet.png"
                    totalFrames={4}
                    frameWidth={38}
                    frameHeight={22}
                    durationSeconds={1.2}
                    alt="Pushups exercise animation"
                  />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] animate-pulse shrink-0"></span>
                  <span className="font-sans text-[11px] text-[#141413] font-medium whitespace-nowrap">
                    your computer has a job now
                  </span>
                </div>
              ) : (
                <div key="runner" className="inline-flex items-center gap-2 animate-fadeIn">
                  <PixelSpriteSheet
                    sheetSrc="/sprites/running-spritesheet.png"
                    totalFrames={4}
                    frameWidth={18}
                    frameHeight={30}
                    durationSeconds={0.65}
                    alt="Running sprint animation"
                  />
                  <span className="font-mono text-[10px] text-[#172554] font-semibold">
                    (⌐■_■)
                  </span>
                  <span className="font-sans text-[11px] text-[#141413] font-medium whitespace-nowrap">
                    go build something else
                  </span>
                </div>
              )}
              {/* Subtle tap/toggle indicator dots */}
              <div className="flex gap-1 ml-0.5">
                <span className={`w-1 h-1 rounded-full transition-colors ${mobileCompanionIndex === 0 ? "bg-[#141413]/40" : "bg-[#141413]/15"}`} />
                <span className={`w-1 h-1 rounded-full transition-colors ${mobileCompanionIndex === 1 ? "bg-[#141413]/40" : "bg-[#141413]/15"}`} />
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
