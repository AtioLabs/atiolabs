"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Benefits() {
  const [selectedPrompt, setSelectedPrompt] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const prompts = [
    {
      say: "Paid office rent for this month",
      riverDoes: "Debited Office Rent Expense · Claimed Input GST · Credited Bank",
      kaomoji: "{ ^o^ }",
      badgeText: "rent categorized",
    },
    {
      say: "Bought new coffee machine for team",
      riverDoes: "Debited Office Equipment (Asset) · Scheduled Vendor Payable",
      kaomoji: "( •̀ ω •́ )✧",
      badgeText: "asset capitalized",
    },
    {
      say: "Client sent quarterly payment",
      riverDoes: "Debited Bank · Accounted for 10% TDS · Cleared Receivable",
      kaomoji: "(⌐■_■)",
      badgeText: "26AS matched",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        {
          y: 50,
          opacity: 0.8,
          scale: 0.98,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "top 35%",
            scrub: true,
          },
        }
      );

      gsap.to(".benefits-floater", {
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
      id="benefits"
      className="py-28 md:py-40 relative bg-[#F7F4EC]/60 border-y border-[#141413]/06 overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 md:px-6 relative">
        
        {/* Floating Chill Badge (Left) */}
        <div className="benefits-floater hidden lg:block absolute left-8 top-16 select-none animate-float-slow -rotate-6 z-20">
          <div className="px-4 py-2 rounded-full bg-white border border-[#141413]/10 shadow-md text-xs font-mono text-[#172554]">
            (⌐■_■) 0.4s · auto-coded
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16 relative z-10">
          <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] text-[#141413] leading-[1.12]">
            You don&apos;t need to know accounting
          </h2>

          <p className="font-sans text-lg sm:text-xl text-[#57534E] font-normal leading-relaxed">
            River understands the accounting behind everyday business activity. You only need to describe what happened. It works out how that should be recorded.
          </p>
        </div>

        {/* Beautiful & Cute Interactive Conversational Stage with Dynamic Reactive Kaomoji */}
        <div ref={cardRef} className="max-w-2xl mx-auto relative z-10">
          <div className="mac-window bg-white shadow-2xl p-6 sm:p-10 space-y-6">
            
            {/* Window Titlebar */}
            <div className="flex items-center justify-between border-b border-[#141413]/08 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-sm sm:text-base text-[#172554] font-bold transition-all duration-300 transform scale-110">
                  {prompts[selectedPrompt].kaomoji}
                </span>
                <span className="font-mono text-xs text-[#8C8885]">river_mind.app</span>
              </div>
              <span className="text-[11px] font-mono text-[#15803D] bg-[#15803D]/10 px-2.5 py-0.5 rounded-full font-semibold transition-all duration-300">
                {prompts[selectedPrompt].badgeText}
              </span>
            </div>

            {/* Prompt Selector Pills */}
            <div className="flex flex-wrap gap-2.5 justify-center">
              {prompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPrompt(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-sans transition-all cursor-pointer border ${
                    selectedPrompt === idx
                      ? "bg-[#172554] text-white border-[#172554] shadow-md -translate-y-0.5"
                      : "bg-[#FBFAF6] text-[#57534E] border-[#141413]/08 hover:border-[#141413]/25 hover:bg-white"
                  }`}
                >
                  &ldquo;{p.say}&rdquo;
                </button>
              ))}
            </div>

            {/* Living Translation Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#FBFAF6] border border-[#141413]/06 space-y-3 animate-fadeIn">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8C8885]">
                <span>You tell River:</span>
                <span className="font-sans text-[#141413] font-medium">&ldquo;{prompts[selectedPrompt].say}&rdquo;</span>
              </div>

              <div className="pt-2 border-t border-[#141413]/06 flex items-start gap-2 text-xs font-mono text-[#172554]">
                <span className="text-[#15803D] font-bold">River records:</span>
                <span className="font-sans text-[#141413]">{prompts[selectedPrompt].riverDoes}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
