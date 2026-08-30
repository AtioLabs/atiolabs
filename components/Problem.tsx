"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
            scrub: 1,
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
          scrub: 1.2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="py-28 md:py-40 relative bg-[#F7F4EC]/60 border-y border-[#141413]/06 overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 md:px-6 relative">
        
        {/* Floating Workday Time Tag (Top-Left) */}
        <div className="problem-floater-left hidden lg:block absolute left-4 xl:left-12 top-10 select-none animate-float-slow -rotate-6 z-20">
          <div className="px-4 py-2 rounded-2xl bg-white border border-[#141413]/10 shadow-lg text-xs font-mono text-[#57534E]">
            <span className="text-[#DC2626] font-bold">09:00 AM – 05:00 PM</span>
            <span className="block text-[10px] text-[#8C8885]">manual ledgering & tax checks</span>
          </div>
        </div>

        {/* Floating Red Rubber Stamp (Bottom-Right) with Impact Drop */}
        <div
          ref={stampRef}
          className="hidden lg:block absolute right-4 xl:right-12 bottom-12 select-none z-20"
        >
          <div className="px-4 py-2 rounded-2xl bg-[#EF4444]/08 border border-[#EF4444]/30 shadow-lg text-xs font-mono text-[#DC2626] font-bold uppercase tracking-wider">
            ENTERED IN BOOKS ✓
          </div>
        </div>

        {/* Apple Notes Manifesto Document (Clean, Ending on Punchline) */}
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

      </div>
    </section>
  );
}
