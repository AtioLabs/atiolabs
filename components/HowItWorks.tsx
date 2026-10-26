"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stages = [
  {
    label: "You tell River",
    title: <>Invoice Alpha Ltd</>,
    detail: "Invoice Alpha Ltd ₹1,00,000 for this month's consulting",
  },
  {
    label: "River creates the invoice",
    title: <>This month’s consulting</>,
    detail: "Consulting services · CGST @ 9% · SGST @ 9%",
  },
  {
    label: "The accounting entry",
    title: <>Accounts receivable</>,
    detail: "Dr Accounts Receivable · Cr Consulting Revenue · Cr Output GST",
  },
  {
    label: "You tell River",
    title: <>Record the TechMart bill</>,
    detail: "Record the TechMart bill for the new laptop",
  },
  {
    label: "You tell River",
    title: <>Alpha paid the invoice</>,
    detail: "Alpha paid the invoice with 10% TDS",
  },
  {
    label: "River records",
    title: <>The accounting behind each command</>,
    detail:
      "It creates the invoice, records the bill, keeps track of what you’re owed, and updates the books when money comes in.",
  },
];
function Row({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`document-row ${className}`}>
      <span>{label}</span>
      <span className="font-mono">{value}</span>
    </div>
  );
}
function Journal({ rows }: { rows: [string, string, string][] }) {
  return (
    <div className="journal-table">
      <div className="journal-heading tiny-label">
        <span>Account</span>
        <span>Debit ₹</span>
        <span>Credit ₹</span>
      </div>
      {rows.map(([a, d, c]) => (
        <div className="journal-row" key={a}>
          <span>{a}</span>
          <span className="font-mono">{d || "·"}</span>
          <span className="font-mono">{c || "·"}</span>
        </div>
      ))}
    </div>
  );
}
export default function HowItWorks() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 800px) and (prefers-reduced-motion: no-preference)",
        () => {
          const panels = gsap.utils.toArray<HTMLElement>(".story-panel");
          const captions = gsap.utils.toArray<HTMLElement>(".story-caption");
          gsap.set(panels.slice(1), { autoAlpha: 0, y: 30 });
          gsap.set(captions.slice(1), { autoAlpha: 0, y: 20 });
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".story-stage",
              start: "top top",
              end: "+=4200",
              pin: true,
              scrub: 0.65,
              anticipatePin: 1,
              onUpdate: (self) =>
                setActive(Math.min(5, Math.floor(self.progress * 6))),
            },
          });
          tl.to({}, { duration: 0.7 });
          for (let i = 1; i < panels.length; i++) {
            tl.to(
              [panels[i - 1], captions[i - 1]],
              { autoAlpha: 0, y: -20, duration: 0.2 },
              i,
            ).fromTo(
              [panels[i], captions[i]],
              { autoAlpha: 0, y: 30 },
              { autoAlpha: 1, y: 0, duration: 0.35 },
              i + 0.12,
            );
          }
          tl.to({}, { duration: 0.8 });
          return () => setActive(0);
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <section id="how-it-works" ref={root} className="river-story">
      <div className="story-intro section-pad">
        <div className="section-kicker">
          <span>02 / The accounting, as it happens</span>
          <span>Scroll to follow the work ↓</span>
        </div>
        <h2 className="font-display">
          Talk to it
          <br />
          like a person
        </h2>
        <p>In River or on WhatsApp.</p>
      </div>
      <div className="story-stage section-pad">
        <div className="story-topline tiny-label">
          <span>One business. One continuous story.</span>
          <span>Illustrative sample data</span>
        </div>
        <div className="story-layout">
          <div className="story-narration">
            <div className="stage-count font-mono">
              0{active + 1}
              <span> / 06</span>
            </div>
            <div className="caption-stack">
              {stages.map((s, i) => (
                <div className="story-caption" key={i}>
                  <span className="tiny-label">{s.label}</span>
                  <h3 className="font-display">{s.title}</h3>
                  <p>{s.detail}</p>
                </div>
              ))}
            </div>
            <div className="story-progress" aria-hidden="true">
              {stages.map((s, i) => (
                <span key={i} className={i <= active ? "filled" : ""} />
              ))}
            </div>
            <span className="tiny-label story-scroll-hint">
              Keep scrolling. River is on it. ↓
            </span>
          </div>
          <div className="document-shell">
            <div className="document-topline tiny-label">
              <span>River / Working record</span>
              <span className="live-dot">Sample data</span>
            </div>
            <div className="panel-stack">
              <article className="story-panel command-panel">
                <span className="tiny-label">01 / A new instruction</span>
                <div className="command-avatar font-mono">You</div>
                <p className="font-display command-text">
                  Invoice Alpha Ltd <span>₹1,00,000</span> for this month’s
                  consulting
                </p>
                <div className="command-response">
                  <span className="river-star">✳</span>
                  <span>
                    <strong>River records:</strong>
                    <br />
                    Invoice Alpha Ltd.
                  </span>
                </div>
              </article>
              <article className="story-panel">
                <div className="doc-heading">
                  <div>
                    <span className="tiny-label">02 / Sales invoice</span>
                    <h4 className="font-display">Alpha Ltd</h4>
                  </div>
                  <span className="document-tag">INV-001</span>
                </div>
                <p className="document-subtitle">This month’s consulting</p>
                <Row label="Consulting services" value="1,00,000.00" />
                <Row label="CGST · 9%" value="9,000.00" />
                <Row label="SGST · 9%" value="9,000.00" />
                <div className="document-total">
                  <span>Total receivable</span>
                  <strong className="font-mono">₹1,18,000</strong>
                </div>
                <div className="document-note">
                  <span>↳</span> Source instruction and invoice linked.
                </div>
              </article>
              <article className="story-panel">
                <div className="doc-heading">
                  <div>
                    <span className="tiny-label">03 / Journal entry</span>
                    <h4 className="font-display">Accounting entry</h4>
                  </div>
                </div>
                <p className="document-subtitle">
                  From invoice INV-001 · Alpha Ltd
                </p>
                <Journal
                  rows={[
                    ["Accounts receivable", "1,18,000", ""],
                    ["Consulting revenue", "", "1,00,000"],
                    ["Output CGST", "", "9,000"],
                    ["Output SGST", "", "9,000"],
                  ]}
                />
                <div className="document-total small">
                  <span>Debits = Credits</span>
                  <strong className="font-mono">₹1,18,000</strong>
                </div>
                <div className="document-note">
                  ↳ The business event becomes the accounting.
                </div>
              </article>
              <article className="story-panel">
                <div className="doc-heading">
                  <div>
                    <span className="tiny-label">04 / Purchase bill</span>
                    <h4 className="font-display">TechMart Electronics</h4>
                  </div>
                </div>
                <p className="document-subtitle">
                  “Record the TechMart bill for the new laptop.”
                </p>
                <Journal
                  rows={[
                    ["Computer equipment", "85,000", ""],
                    ["Input GST", "15,300", ""],
                    ["Accounts payable", "", "1,00,300"],
                  ]}
                />
                <div className="document-total small">
                  <span>Total payable</span>
                  <strong className="font-mono">₹1,00,300</strong>
                </div>
                <div className="document-note">
                  ↳ Bill, asset and tax stay together.
                </div>
              </article>
              <article className="story-panel">
                <div className="doc-heading">
                  <div>
                    <span className="tiny-label">05 / Payment received</span>
                    <h4 className="font-display">Alpha paid</h4>
                  </div>
                  <span className="document-tag">MATCHED</span>
                </div>
                <p className="document-subtitle">
                  “Alpha paid the invoice with 10% TDS.”
                </p>
                <Row label="Bank deposit" value="₹1,08,000" />
                <Row label="TDS receivable · 10% of fee" value="₹10,000" />
                <Row label="Invoice settled" value="₹1,18,000" />
                <div className="document-total">
                  <span>Alpha’s outstanding balance</span>
                  <strong className="font-mono">₹0</strong>
                </div>
                <div className="document-note">
                  ↳ Cash received. TDS accounted for. Invoice cleared.
                </div>
              </article>
              <article className="story-panel books-panel">
                <span className="tiny-label">06 / The resulting books</span>
                <h4 className="font-display">
                  River takes care
                  <br />
                  of the accounting
                </h4>
                <Row label="Consulting revenue" value="₹1,00,000" />
                <Row label="Alpha · outstanding" value="₹0" />
                <Row label="TechMart · payable" value="₹1,00,300" />
                <div className="books-seal">
                  <span>✓</span>
                  <div>
                    <strong>Debits equal credits.</strong>
                    <p>Every record traces back to what happened.</p>
                  </div>
                </div>
                <span className="tiny-label">
                  Instruction → Record → Entry → Books
                </span>
              </article>
            </div>
            <div className="document-bottom tiny-label">
              <span>Words to records. Records to books.</span>
              <span>↗ River</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
