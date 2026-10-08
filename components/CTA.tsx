"use client";

import PixelSpriteSheet from "./PixelSpriteSheet";

export default function CTA() {
  return (
    <section id="demo" className="py-28 sm:py-36 md:py-44 relative bg-[#FBFAF6] overflow-hidden">
      {/* Anchor for backward compatibility */}
      <div id="waitlist" className="sr-only" aria-hidden="true" />

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
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0" />
          <span className="font-mono text-[11px] sm:text-xs text-[#57534E]">
            told river , went home
          </span>
        </div>

        {/* Display Headline */}
        <h2 className="font-display font-medium text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.035em] text-[#141413] leading-[1.08] mb-6 sm:mb-8">
          Leave the accounting to River
        </h2>

        {/* Walkthrough Subhead */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#57534E] font-normal leading-relaxed mb-8 sm:mb-12 max-w-xl mx-auto">
          Schedule a 30-minute private walkthrough. See how River handles your GST, TDS, and accrual books with zero manual data entry.
        </p>

        {/* Primary Action: Book via Calendly */}
        <div className="max-w-md mx-auto flex flex-col items-center">
          <a
            href="https://calendly.com/asynarch-team/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-indigo px-8 sm:px-12 py-4 sm:py-4.5 rounded-full text-white text-base sm:text-lg font-sans font-medium cursor-pointer shadow-lg hover:scale-105 active:scale-95 transition-all inline-flex items-center justify-center gap-3 w-full sm:w-auto"
          >
            <span>Book a 30-min demo</span>
            <span className="opacity-80 text-xl leading-none">➔</span>
          </a>

          {/* Reassurance Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 font-mono text-[11px] text-[#8C8885]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
              1-on-1 with founding team
            </span>
            <span>·</span>
            <span>30-minute deep dive</span>
            <span>·</span>
            <span>No slide decks</span>
          </div>

          <p className="text-[11px] font-mono text-[#A8A29E] mt-6">
            River by Asynarch Autonomiccomputing Private Limited
          </p>
        </div>

      </div>
    </section>
  );
}
