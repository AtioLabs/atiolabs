"use client";
import PixelSpriteSheet from "./PixelSpriteSheet";
export default function CTA() {
  return (
    <section id="demo" className="cta-editorial section-pad">
      <div id="waitlist" className="sr-only" />
      <div className="cta-top">
        <span className="tiny-label">See River at work</span>
        <PixelSpriteSheet
          sheetSrc="/sprites/sleeping-spritesheet.png"
          totalFrames={4}
          frameWidth={44}
          frameHeight={41}
          durationSeconds={1.8}
          alt="A small resting pixel character"
        />
      </div>
      <h2 className="font-display">
        Leave the accounting
        <br />
        to River.
      </h2>
      <div className="cta-bottom">
        <p>
          Schedule a 30-minute private walkthrough. See how River handles your
          GST, TDS, and accrual books with zero manual data entry.
        </p>
        <a
          href="https://calendly.com/asynarch-team/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-link"
        >
          Book a 30-min demo <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
