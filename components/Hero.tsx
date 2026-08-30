"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

    // 1. GSAP Draggable Physics
    const draggables = Draggable.create(".gsap-draggable-card", {
      type: "x,y",
      edgeResistance: 0.65,
      bounds: containerRef.current || window,
      inertia: true,
      cursor: "grab",
      activeCursor: "grabbing",
      zIndexBoost: true,
    });

    // 2. Calibrated Parallax (Drifts outward/downward, NEVER collides with Navbar)
    const ctx = gsap.context(() => {
      gsap.to(".parallax-card-top-right", {
        y: 40,
        x: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".parallax-card-top-left", {
        y: 35,
        x: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".parallax-card-bottom-right", {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".parallax-card-bottom-left", {
        y: 45,
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
      className="relative min-h-[96vh] flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 pt-24"
    >
      {/* Container for Centered Text and Scattered Interactive GSAP Draggable Floating Desktop Artifacts */}
      <div className="relative w-full max-w-[1440px] mx-auto min-h-[660px] flex flex-col justify-center items-center">
        
        {/* GSAP DRAGGABLE FLOATING ARTIFACT 01: River Retro Computer Mascot (Flanking Top-Right, safely below Nav) */}
        <div className="gsap-draggable-card parallax-card-top-right hidden md:block absolute right-8 lg:right-24 top-28 lg:top-36 z-20 select-none">
          <div className="p-4 rounded-3xl bg-white/90 backdrop-blur-md border border-[#141413]/10 shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-24 h-24 sm:w-28 sm:h-28 relative flex items-center justify-center pointer-events-none">
              <Image
                src="/river-logo.png"
                alt="River Retro Computer Mascot"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-2 text-center pointer-events-none">
              <span className="font-mono text-xs text-[#172554] font-bold block transition-all duration-300">
                {KAOMOJI_EXPRESSIONS[kaomojiIndex]}
              </span>
              <span className="font-mono text-[10px] text-[#15803D] font-semibold">books balanced</span>
            </div>
          </div>
        </div>

        {/* GSAP DRAGGABLE FLOATING ARTIFACT 02: Pure Asynarch Great Wave Sticker (Flanking Top-Left, safely below Nav) */}
        <div className="gsap-draggable-card parallax-card-top-left hidden md:block absolute left-8 lg:left-24 top-28 lg:top-36 z-20 select-none -rotate-6">
          <div className="p-4 rounded-3xl bg-white/90 backdrop-blur-md border border-[#141413]/10 shadow-xl hover:scale-105 hover:rotate-0 transition-all duration-300">
            <div className="h-16 sm:h-20 aspect-[3/2] relative flex items-center justify-center mx-auto pointer-events-none">
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

        {/* GSAP DRAGGABLE FLOATING ARTIFACT 03: WhatsApp Voice Note Pill (Mid-Right) */}
        <div className="gsap-draggable-card parallax-card-bottom-right hidden lg:block absolute right-12 bottom-16 z-20 select-none rotate-3">
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#EFEAE2] border border-[#25D366]/40 shadow-lg hover:scale-105 transition-transform">
            <div className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center text-[10px] font-bold pointer-events-none">
              W
            </div>
            <div className="pointer-events-none">
              <p className="text-xs font-sans text-[#075E54] font-medium leading-none">
                &ldquo;Alpha paid with TDS&rdquo;
              </p>
              <div className="flex items-center gap-1.5 mt-1 text-[10px] font-mono text-[#57534E]">
                <span className="sound-bars">
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

        {/* GSAP DRAGGABLE FLOATING ARTIFACT 04: Chill Kaomoji Badge (Mid-Left) */}
        <div className="gsap-draggable-card parallax-card-bottom-left hidden lg:block absolute left-12 bottom-16 z-20 select-none rotate-3">
          <div className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#141413]/10 shadow-md text-center hover:scale-105 transition-transform">
            <span className="font-mono text-xs text-[#172554] font-medium pointer-events-none">
              (⌐■_■) 0.4s · auto
            </span>
          </div>
        </div>

        {/* GSAP DRAGGABLE FLOATING ARTIFACT 05: Balanced Equilibrium Seal */}
        <div className="gsap-draggable-card hidden xl:block absolute right-32 top-1/2 -translate-y-8 z-20 select-none -rotate-3">
          <div className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#15803D]/20 shadow-md text-center hover:scale-105 transition-transform">
            <span className="font-mono text-[11px] text-[#15803D] font-bold pointer-events-none">
              BALANCED · ₹0.00 VARIANCE
            </span>
          </div>
        </div>

        {/* HERO CENTER TEXT STAGE (Expansive, Balanced & Centered) */}
        <div
          ref={centerTextRef}
          className="relative z-10 text-center max-w-4xl lg:max-w-5xl mx-auto py-12 px-4 flex flex-col items-center justify-center"
        >
          {/* Display Headline */}
          <h1 className="font-display font-medium text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.035em] text-[#141413] leading-[1.04] mb-8 text-center">
            The Accounting, as it happens
          </h1>

          {/* Subhead */}
          <p className="font-sans text-xl sm:text-2xl md:text-3xl text-[#57534E] font-normal leading-relaxed mb-12 max-w-2xl text-center">
            Tell River what happened. It does the rest.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("waitlist")}
              className="btn-indigo px-8 py-4 text-base font-sans font-medium cursor-pointer shadow-lg hover:scale-105 transition-transform"
            >
              Join the waitlist
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="px-7 py-4 rounded-full bg-white hover:bg-[#FBFAF6] text-[#141413] border border-[#141413]/10 text-base font-sans font-medium transition-all shadow-sm cursor-pointer hover:scale-105"
            >
              How it works →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
