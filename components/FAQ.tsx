"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FAQ_ITEMS = [
  {
    q: "Who is River for?",
    a: "River is for GST-registered service companies in India.",
  },
  {
    q: "How does River decide what to record?",
    a: "River uses the business details, documents, accounts, and context you provide. It interprets the event, prepares the accounting treatment, and checks the entry before posting it.",
  },
  {
    q: "Can I see what River recorded?",
    a: "Yes. River keeps the transaction, accounting entry, and source information connected so the result can be reviewed and traced.",
  },
  {
    q: "What happens after I join early access?",
    a: "We’ll contact you when River is ready to understand your business and bring in your existing accounting data.",
  },
  {
    q: "What do I need to give River?",
    a: "River needs the information that makes up your business, such as your customers, vendors, services, and bank accounts. After that, you can give it work in plain language.",
  },
  {
    q: "Do I need to know how to make an accounting entry?",
    a: "No. You describe the business event. River works out the accounting and records it.",
  },
  {
    q: "Can River create invoices for me?",
    a: "Yes. Tell River who to invoice, what the invoice is for, and the amount. It creates the invoice and records it in your books.",
  },
  {
    q: "Can River handle GST and TDS?",
    a: "Yes. River applies the relevant tax treatment when it records the transaction.",
  },
  {
    q: "What happens to my existing books?",
    a: "River can work from your existing accounting data and opening balances when you move from another system.",
  },
  {
    q: "Do I still need an accountant?",
    a: "River handles the accounting work. You can still keep an accountant for judgment, review, or sign-off.",
  },
  {
    q: "Is River something I operate?",
    a: "You give River commands in River or on WhatsApp. It takes care of the accounting work behind them.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-item-card",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} id="faq" className="py-32 md:py-48 relative">
      <div className="max-w-[920px] mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
          <h2 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#141413] leading-[1.12]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion List with Scroll Animation */}
        <div className="flex flex-col gap-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-item-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#172554]/30 shadow-[0_8px_24px_rgba(23,37,84,0.05)]"
                    : "bg-white/60 border-[#141413]/08 hover:bg-white hover:border-[#141413]/15"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 md:p-7 flex items-center justify-between gap-4 cursor-pointer outline-none select-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans font-medium text-base sm:text-lg text-[#141413] leading-snug">
                    {item.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border border-[#141413]/10 flex items-center justify-center shrink-0 transition-transform duration-300 text-xs font-mono ${
                      isOpen ? "rotate-45 bg-[#172554] text-white border-[#172554]" : "text-[#686461] bg-[#141413]/03"
                    }`}
                  >
                    +
                  </div>
                </button>

                {/* Animated Answer Body */}
                <div
                  className={`grid transition-all duration-300 ease-in-out px-6 md:px-7 ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-6 md:pb-7" : "grid-rows-[0fr] opacity-0 pb-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm md:text-[15px] font-sans text-[#57534E] leading-relaxed pt-3 border-t border-[#141413]/06">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
