"use client";
import { useState } from "react";
const items = [
  [
    "Who is River for?",
    "River is for GST-registered service companies in India.",
  ],
  [
    "How does River decide what to record?",
    "River uses the business details, documents, accounts, and context you provide. It interprets the event, prepares the accounting treatment, and checks the entry before posting it.",
  ],
  [
    "Can I see what River recorded?",
    "Yes. River keeps the transaction, accounting entry, and source information connected so the result can be reviewed and traced.",
  ],
  [
    "Can River handle GST and TDS?",
    "Yes. River applies the relevant tax treatment when it records the transaction.",
  ],
  [
    "Do I still need an accountant?",
    "River handles the accounting work. You can still keep an accountant for judgment, review, or sign-off.",
  ],
  [
    "What happens to my existing books?",
    "River can work from your existing accounting data and opening balances when you move from another system.",
  ],
];
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="faq-editorial section-pad">
      <div>
        <span className="tiny-label">A few things worth knowing</span>
        <h2 className="font-display">
          Frequently asked
          <br />
          questions
        </h2>
      </div>
      <div className="faq-list">
        {items.map(([q, a], i) => (
          <div className="faq-row" key={q}>
            <h3>
              <button
                aria-expanded={open === i}
                aria-controls={`answer-${i}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{q}</span>
                <span className="font-mono">{open === i ? "−" : "+"}</span>
              </button>
            </h3>
            <div
              id={`answer-${i}`}
              className={`faq-answer ${open === i ? "open" : ""}`}
            >
              <p>{a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
