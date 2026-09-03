"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import PixelSpriteSheet from "./PixelSpriteSheet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticFloater from "./MagneticFloater";

export default function Problem() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const stampRef = useRef<HTMLDivElement | null>(null);
  const [highlightActive, setHighlightActive] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Apple Notes Window Smooth Reveal
      gsap.fromTo(
        cardRef.current,
        {
          y: 60,
          opacity: 0.8,
          scale: 0.97,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "top 30%",
            scrub: true,
          },
        }
      );

      // 2. Active Highlighter Trigger
      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 60%",
        onEnter: () => setHighlightActive(true),
      });

      // 3. Red Rubber Stamp Drop Impact
      gsap.fromTo(
        stampRef.current,
        {
          scale: 2,
          opacity: 0,
          rotate: 20,
        },
        {
          scale: 1,
          opacity: 1,
          rotate: 6,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 50%",
          },
        }
      );

      // 4. Parallax Floaters
      gsap.to(".problem-floater-left", {
        y: -40,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="py-28 md:py-36 lg:py-44 relative bg-[#F7F4EC]/60 border-y border-[#141413]/06 overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 md:px-6 relative">
        
        {/* The Late Grind Floater with 4-Frame Animated Tea Spritesheet (Top-Left) */}
        <div className="problem-floater-left hidden lg:block absolute left-4 xl:left-12 top-6 z-20 select-none">
          <MagneticFloater draggable={true} tiltAngle={14} floatAmplitudeY={6} floatDuration={3.6}>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/95 backdrop-blur-xl border border-[#141413]/10 shadow-[0_8px_24px_rgba(20,20,19,0.06)] -rotate-2 group hover:scale-105 transition-all">
              <PixelSpriteSheet
                sheetSrc="/sprites/tea-spritesheet.png"
                totalFrames={4}
                frameWidth={26}
                frameHeight={52}
                durationSeconds={1.6}
                alt="Tea drinking animation"
              />
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C2410C]"></span>
                <span className="font-mono text-xs text-[#57534E] whitespace-nowrap">
                  cold tea · still matching invoices
                </span>
              </div>
            </div>
          </MagneticFloater>
        </div>

        {/* The Lost Weekend Floater with Sunday Spreadsheet Desk (Bottom-Right) */}
        <div
          ref={stampRef}
          className="hidden lg:block absolute right-4 xl:right-12 bottom-6 z-20 select-none"
        >
          <MagneticFloater draggable={true} tiltAngle={14} floatAmplitudeY={6} floatDuration={3.2}>
            <div className="inline-flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#141413]/10 shadow-[0_8px_24px_rgba(20,20,19,0.06)] rotate-2 group hover:scale-105 transition-all">
              <Image
                src="/sprites/pixel-spreadsheet-desk.png"
                alt="Sunday spreadsheets"
                width={56}
                height={53}
                className="w-13 h-auto object-contain [image-rendering:pixelated]"
              />
              <div className="flex flex-col text-left">
                <span className="font-mono text-xs text-[#78716C] font-semibold">( ; _ ; )</span>
                <span className="font-sans text-xs text-[#57534E] font-medium whitespace-nowrap">
                  sunday spent on spreadsheets
                </span>
              </div>
            </div>
          </MagneticFloater>
        </div>

        {/* Mobile View: Tea Drinker Eyebrow (Visible on screens < lg) */}
        <div className="flex lg:hidden justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xl border border-[#141413]/10 shadow-sm text-xs">
            <PixelSpriteSheet
              sheetSrc="/sprites/tea-spritesheet.png"
              totalFrames={4}
              frameWidth={22}
              frameHeight={44}
              durationSeconds={1.6}
              alt="Tea drinking animation"
            />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C2410C]"></span>
            <span className="font-mono text-[11px] text-[#57534E]">
              cold tea · still matching invoices
            </span>
          </div>
        </div>

        {/* Apple Notes Manifesto Document (Clean, Pristine, Traffic Lights Completely Clear) */}
        <div ref={cardRef} className="max-w-[760px] mx-auto relative z-10">
          <div className="mac-window bg-[#FFFEFA] border border-[#141413]/12 shadow-[0_24px_70px_rgba(20,20,19,0.09),0_1px_0_rgba(255,255,255,1)_inset]">
            
            {/* Notes Titlebar */}
            <div className="mac-titlebar bg-[#F8F6F0]">
              <div className="traffic-dots">
                <span className="dot-close"></span>
                <span className="dot-min"></span>
                <span className="dot-zoom"></span>
              </div>
              <span className="font-mono text-[11px] text-[#686461]">
                notes — the_old_way.txt
              </span>
              <div className="w-8"></div>
            </div>

            {/* Document Body with Exact Copy & Scroll-Swept Yellow Highlighter */}
            <div className="p-8 sm:p-12 md:p-16 space-y-8 text-left">
              
              {/* Display Headline */}
              <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] text-[#141413] leading-[1.12]">
                This used to be a job
              </h2>

              {/* Exact Problem Copy with Animated Sweeping Yellow Highlighter */}
              <div className="space-y-4 font-sans text-base sm:text-lg md:text-xl text-[#3D3A37] leading-[1.65] font-normal">
                <p>
                  Someone had to read the bill, work out what needed to be recorded, enter it, and check everything was right.
                </p>
                <div className="relative inline-block overflow-hidden rounded">
                  <span
                    className={`absolute inset-0 bg-[#FEF08A] transition-transform duration-1000 ease-out origin-left ${
                      highlightActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                  <span className="relative z-10 px-2 py-0.5 font-medium text-[#141413]">
                    That was someone&apos;s job, every day
                  </span>
                </div>
              </div>

              {/* Exact Closing Punchline (No Duplicate Logo Clutter) */}
              <p className="font-display text-xl sm:text-2xl md:text-3xl text-[#172554] leading-[1.35] font-medium pt-6 border-t border-[#141413]/08">
                River does the same thing in the time it takes to send a WhatsApp message
              </p>

            </div>

          </div>
        </div>

        {/* Mobile View: Sunday Spreadsheet Desk (Visible on screens < lg) */}
        <div className="flex lg:hidden justify-center mt-6">
          <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#141413]/10 shadow-sm text-xs">
            <Image
              src="/sprites/pixel-spreadsheet-desk.png"
              alt="Sunday spreadsheets"
              width={48}
              height={45}
              className="w-11 h-auto object-contain [image-rendering:pixelated]"
            />
            <div className="flex flex-col text-left">
              <span className="font-mono text-[11px] text-[#78716C] font-semibold">( ; _ ; )</span>
              <span className="font-sans text-[11px] text-[#57534E] font-medium">
                sunday spent on spreadsheets
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
