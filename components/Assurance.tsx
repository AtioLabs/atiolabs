"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const checks = [
  {
    name: "Pre-post verification",
    state: "HELD",
    title: "Every entry is checked before it is posted",
    detail: "The attempted entry is ₹10,000 short. It stays out of the books.",
    debit: "1,08,000",
    credit: "1,18,000",
    delta: "₹10,000",
    result: "Unbalanced entry held",
    tone: "held",
  },
  {
    name: "GST + TDS treatment",
    state: "VERIFIED",
    title: "GST and TDS are recorded correctly",
    detail:
      "₹1,08,000 in the bank. ₹10,000 in TDS receivable. The full invoice is settled.",
    debit: "1,18,000",
    credit: "1,18,000",
    delta: "₹0",
    result: "Balanced. Ready to post.",
    tone: "verified",
  },
  {
    name: "Locked-period protection",
    state: "REJECTED",
    title: "Locked periods reject new entries",
    detail:
      "Try to move the entry into a locked period. River rejects the attempt. The posted books do not change.",
    debit: "1,18,000",
    credit: "1,18,000",
    delta: "₹0",
    result: "Period locked. No change made.",
    tone: "held",
  },
  {
    name: "Correction history",
    state: "PRESERVED",
    title: "Corrections keep their history",
    detail: "Corrections keep their history.",
    debit: "1,18,000",
    credit: "1,18,000",
    delta: "₹0",
    result: "Original entry → Correction → History",
    tone: "verified",
  },
];
export default function Assurance() {
  const root = useRef<HTMLElement>(null);
  const [step, setStep] = useState(0);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 800px) and (prefers-reduced-motion: no-preference)",
        () => {
          ScrollTrigger.create({
            trigger: ".assurance-stage",
            start: "top top",
            end: "+=2100",
            pin: true,
            scrub: true,
            onUpdate: (s) => setStep(Math.min(3, Math.floor(s.progress * 4))),
          });
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);
  const c = checks[step];
  return (
    <section id="assurance" ref={root} className="assurance-editorial">
      <div className="assurance-stage section-pad">
        <div className="section-kicker">
          <span>03 / Trust is in the work</span>
          <span>Illustrative verification sequence</span>
        </div>
        <div className="assurance-layout">
          <div className="assurance-copy">
            <h2 className="font-display">
              The books
              <br />
              don’t move
              <br />
              <em>
                unless they
                <br />
                balance
              </em>
            </h2>
            <p>Every report comes from the transactions in the books.</p>
          </div>
          <div className="verification">
            <div className="verification-tabs">
              {checks.map((x, i) => (
                <button
                  key={x.name}
                  onClick={() => setStep(i)}
                  className={step === i ? "active" : ""}
                  aria-label={`Show ${x.name}`}
                  aria-pressed={step === i}
                >
                  <span className="font-mono">0{i + 1}</span>
                  <span>{x.name}</span>
                </button>
              ))}
            </div>
            <div className={`verification-record ${c.tone}`} key={step}>
              <div className="verify-status tiny-label">
                <span>Alpha / Receipt entry</span>
                <strong>{c.state}</strong>
              </div>
              <h3 className="font-display">{c.title}</h3>
              <div className="verify-ledger">
                <div>
                  <span className="tiny-label">Debit ₹</span>
                  <strong className="font-mono">{c.debit}</strong>
                </div>
                <span className="balance-sign">{step === 0 ? "≠" : "="}</span>
                <div>
                  <span className="tiny-label">Credit ₹</span>
                  <strong className="font-mono">{c.credit}</strong>
                </div>
              </div>
              <div className="verify-difference">
                <span>Difference</span>
                <strong className="font-mono">{c.delta}</strong>
              </div>
              <p>{c.detail}</p>
              <div className="verification-result">
                <span>{c.tone === "held" ? "×" : "✓"}</span>
                {c.result}
              </div>
            </div>
            <div className="verification-caption tiny-label">
              Scroll or select a check to inspect it.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
