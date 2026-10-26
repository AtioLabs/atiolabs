"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Problem() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".problem-line", {
        y: 70,
        opacity: 0,
        stagger: 0.13,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 65%" },
      });
      gsap.from(".problem-resolution", {
        y: 30,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: ".problem-resolution", start: "top 85%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <section id="problem" ref={root} className="problem-editorial section-pad">
      <div className="section-kicker">
        <span>01 / The old way</span>
        <span>River by Asynarch</span>
      </div>
      <div className="problem-scene-grid">
        <h2 className="problem-head font-display">
          <span className="problem-line">This used to</span>
          <span className="problem-line">be a job.</span>
        </h2>
        <div
          className="manual-scene"
          role="img"
          aria-label="A person at a spreadsheet desk, surrounded by bills to read, enter and check."
        >
          <div className="desk-orbit orbit-one" />
          <div className="desk-orbit orbit-two" />
          <span className="scene-time font-mono">09:41</span>
          <div className="scene-paper paper-one">
            <span>BILL / 001</span>
            <i />
            <i />
            <i />
            <b>₹1,18,000</b>
          </div>
          <div className="scene-paper paper-two">
            <span>JOURNAL</span>
            <i />
            <i />
            <i />
            <b>Dr. / Cr.</b>
          </div>
          <img
            className="desk-character"
            src="/sprites/review/owner-desk-clean.png"
            alt=""
            width="1290"
            height="1219"
          />
          <div className="manual-loop">
            <span>Read the bill</span>
            <span>Work it out</span>
            <span>Enter it</span>
            <span>Check it</span>
          </div>
          <span className="scene-caption tiny-label">
            Every bill. Every entry. Every day.
          </span>
        </div>
      </div>
      <div className="problem-foot">
        <p>
          Someone had to read the bill, work out what needed to be recorded,
          enter it, and check everything was right. That was someone’s job,
          every day.
        </p>
        <div className="problem-resolution">
          <span className="tiny-label">River does the same thing.</span>
          <p className="font-display">
            In the time it takes to send a WhatsApp message.
          </p>
          <span className="problem-arrow" aria-hidden="true">
            ↓
          </span>
        </div>
      </div>
    </section>
  );
}
