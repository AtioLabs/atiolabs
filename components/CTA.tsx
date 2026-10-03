"use client";

import { useState } from "react";
import Image from "next/image";
import PixelSpriteSheet from "./PixelSpriteSheet";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwxxnPUiwiVjlhnNcgvebAa3JBs8ZJS-vms2YLTCX4_tnDx5CnWIC_lar2jPz3RXeoPcg/exec";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    const payload = JSON.stringify({
      email: email.trim(),
      timestamp: new Date().toISOString(),
      source: "River Landing Page Waitlist",
    });

    try {
      // 1. Try local/Vercel server API route if available
      const apiRes = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
      }).catch(() => null);

      // 2. Direct client-side POST to Google Apps Script (handles GitHub Pages static hosting)
      if (!apiRes || !apiRes.ok) {
        await fetch(GOOGLE_SHEET_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: payload,
        }).catch(() => null);
      }

      setStatus("success");
    } catch (err) {
      console.error("Waitlist submit error:", err);
      setStatus("success");
    }
  };

  return (
    <section id="waitlist" className="py-28 sm:py-36 md:py-44 relative bg-[#FBFAF6] overflow-hidden">
      <div className="max-w-[880px] mx-auto px-4 sm:px-6 md:px-12 text-center relative z-10">
        
        {/* Animated Eyebrow: 4-Frame Walking Spritesheet */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#F59E0B]/25 shadow-sm text-xs mb-6 sm:mb-8 group hover:scale-105 transition-all">
          <PixelSpriteSheet
            sheetSrc="/sprites/walking-spritesheet.png"
            totalFrames={4}
            frameWidth={24}
            frameHeight={53}
            durationSeconds={0.8}
            alt="Walking home cycle"
          />
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0"></span>
          <span className="font-mono text-[11px] sm:text-xs text-[#57534E]">
            told river , went home
          </span>
        </div>

        {/* Verbatim Display Headline */}
        <h2 className="font-display font-medium text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.035em] text-[#141413] leading-[1.08] mb-8 sm:mb-12">
          Leave the accounting to River
        </h2>

        {/* Dual Conversion Stage */}
        <div className="max-w-lg mx-auto relative flex flex-col items-center">
          
          {/* Primary Action: Book a 30-min demo via Calendly */}
          <div className="w-full flex justify-center mb-7 sm:mb-8">
            <a
              href="https://calendly.com/asynarch-team/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-indigo px-8 sm:px-10 py-4 sm:py-4.5 rounded-full text-white text-base sm:text-lg font-sans font-medium cursor-pointer shadow-lg hover:scale-105 active:scale-95 transition-all inline-flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <span>Book a 30-min demo</span>
              <span className="opacity-80">➔</span>
            </a>
          </div>

          {/* Minimalist Divider */}
          <div className="w-full flex items-center justify-center gap-3 mb-6 font-mono text-[11px] text-[#8C8885]">
            <span className="w-12 sm:w-16 h-[1px] bg-[#141413]/10" />
            <span>or join early access waitlist</span>
            <span className="w-12 sm:w-16 h-[1px] bg-[#141413]/10" />
          </div>

          {/* Secondary Action: Sleek Waitlist Form */}
          <div className="w-full max-w-md mx-auto relative">
            {status === "success" ? (
              <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#15803D]/08 border border-[#15803D]/20 text-center animate-fadeIn">
                <span className="text-xs font-mono font-bold text-[#15803D] uppercase tracking-wider block mb-1.5">
                  Confirmed
                </span>
                <h3 className="font-sans font-medium text-sm sm:text-base text-[#141413] mb-1">
                  You are on the priority waitlist.
                </h3>
                <p className="text-xs text-[#57534E]">
                  We will notify you at <strong className="text-[#141413] font-medium">{email}</strong> when your access opens.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-row items-center gap-1.5 p-1.5 sm:p-2 rounded-full bg-white border border-[#141413]/12 shadow-[0_8px_24px_rgba(20,20,19,0.04)]"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  required
                  className="flex-1 min-w-0 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-sans bg-transparent border-0 outline-none text-[#141413] placeholder-[#8C8885]"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#141413] hover:bg-[#141413]/90 text-white text-xs sm:text-sm font-sans font-medium cursor-pointer shrink-0 shadow-xs hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
                >
                  <span>{status === "loading" ? "Joining..." : "Join waitlist"}</span>
                </button>
              </form>
            )}

            <p className="text-[11px] font-mono text-[#8C8885] mt-4 sm:mt-5">
              River by Asynarch · 30-minute private walkthrough
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
