"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AnimatedRow1() {
  const [typedText, setTypedText] = useState("");
  const [riverResponded, setRiverResponded] = useState(false);
  const [stepStage, setStepStage] = useState<"idle" | "typingItem" | "taxCalc" | "odometer" | "posted">("idle");
  const [counterValue, setCounterValue] = useState(0);
  const rowRef = useRef<HTMLDivElement | null>(null);
  const isStarted = useRef(false);

  const fullText = "Invoice Alpha Ltd ₹1,00,000 for this month's consulting";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let isCancelled = false;

    function runSequence() {
      if (isCancelled) return;
      setTypedText("");
      setRiverResponded(false);
      setStepStage("idle");
      setCounterValue(0);
      let index = 0;

      const typeInterval = setInterval(() => {
        if (isCancelled) {
          clearInterval(typeInterval);
          return;
        }
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(typeInterval);
          
          setTimeout(() => {
            if (isCancelled) return;
            setRiverResponded(true);

            setTimeout(() => {
              if (isCancelled) return;
              setStepStage("typingItem");

              setTimeout(() => {
                if (isCancelled) return;
                setStepStage("taxCalc");

                setTimeout(() => {
                  if (isCancelled) return;
                  setStepStage("odometer");
                  let count = 0;
                  const rollInterval = setInterval(() => {
                    if (isCancelled) {
                      clearInterval(rollInterval);
                      return;
                    }
                    count += 11800;
                    if (count >= 118000) {
                      setCounterValue(118000);
                      clearInterval(rollInterval);
                      setStepStage("posted");

                      setTimeout(() => {
                        if (isCancelled) return;
                        runSequence();
                      }, 7000);
                    } else {
                      setCounterValue(count);
                    }
                  }, 40);
                }, 400);
              }, 500);
            }, 500);
          }, 400);
        }
      }, 35);
    }

    const trigger = ScrollTrigger.create({
      trigger: rowRef.current,
      start: "top 75%",
      onEnter: () => {
        if (!isStarted.current) {
          isStarted.current = true;
          runSequence();
        }
      },
    });

    // GSAP Lateral & 3D Lift Reveal
    gsap.fromTo(
      rowRef.current,
      { opacity: 0.7, y: 50, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rowRef.current,
          start: "top 80%",
        },
      }
    );

    return () => {
      isCancelled = true;
      trigger.kill();
    };
  }, []);

  return (
    <div ref={rowRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
      {/* Left: Soundwave & Typing Speech Bubble */}
      <div className="lg:col-span-5 space-y-5">
        <div className="flex items-center gap-2">
          <span className="sound-bars">
            <i></i><i></i><i></i><i></i><i></i>
          </span>
          <span className="text-xs font-mono text-[#8C8885]">text / voice command</span>
        </div>

        {/* User Speech Bubble */}
        <div className="inline-block p-4 sm:p-5 rounded-3xl bg-white border border-[#141413]/10 shadow-md text-base sm:text-lg font-sans text-[#141413] max-w-md min-h-[72px]">
          &ldquo;{typedText}&rdquo;
        </div>

        {/* River Response Bubble */}
        <div className={`transition-all duration-500 transform ${
          riverResponded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95"
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#172554] text-white text-xs font-mono font-medium shadow-sm">
            <span>on it!</span>
          </div>
        </div>
      </div>

      {/* Right: macOS Invoicing Window */}
      <div className="lg:col-span-7">
        <div className="mac-window overflow-hidden bg-white shadow-2xl">
          <div className="mac-titlebar">
            <div className="traffic-dots">
              <span className="dot-close"></span>
              <span className="dot-min"></span>
              <span className="dot-zoom"></span>
            </div>
            <span className="font-mono text-[11px] text-[#686461]">
              Invoice.app — Sales Tax Invoice #INV-2026-084
            </span>
            <div className="w-8"></div>
          </div>

          <div className="p-6 sm:p-8 space-y-5 text-xs font-mono">
            <div className="flex justify-between items-center pb-3 border-b border-[#141413]/08">
              <div>
                <span className="text-[#8C8885] block text-[10px]">CUSTOMER</span>
                <span className="font-bold text-sm text-[#141413]">Alpha Ltd</span>
                <span className="text-[#57534E] text-[11px] block">Chennai, Tamil Nadu · GSTIN: 33AAAAA0000A1Z5</span>
              </div>
              <span className={`text-xs font-mono px-3 py-1 rounded-full font-semibold transition-all duration-500 ${
                stepStage === "posted" 
                  ? "text-[#15803D] bg-[#15803D]/10 scale-105" 
                  : "text-[#8C8885] bg-[#141413]/05"
              }`}>
                {stepStage === "posted" ? "ISSUED & BALANCED ✓" : "Composing..."}
              </span>
            </div>

            <div className="space-y-2.5 py-2">
              <div className="flex justify-between font-sans items-center">
                <span className={`transition-all duration-300 ${
                  stepStage !== "idle" ? "text-[#141413] font-medium" : "text-[#8C8885]"
                }`}>
                  Strategic Consulting (SAC 9983)
                </span>
                <span className="font-mono font-bold">
                  {stepStage !== "idle" ? "₹1,00,000.00" : "—"}
                </span>
              </div>

              <div className={`flex justify-between text-[#57534E] transition-all duration-500 ${
                stepStage === "taxCalc" || stepStage === "odometer" || stepStage === "posted"
                  ? "opacity-100 translate-x-0"
                  : "opacity-20 -translate-x-2"
              }`}>
                <span>Central GST (CGST @ 9%)</span>
                <span>₹9,000.00</span>
              </div>

              <div className={`flex justify-between text-[#57534E] transition-all duration-500 ${
                stepStage === "taxCalc" || stepStage === "odometer" || stepStage === "posted"
                  ? "opacity-100 translate-x-0"
                  : "opacity-20 -translate-x-2"
              }`}>
                <span>State GST (SGST @ 9%)</span>
                <span>₹9,000.00</span>
              </div>

              <div className="flex justify-between pt-3 border-t border-[#141413]/08 text-sm font-bold text-[#172554]">
                <span>TOTAL INVOICE PAYABLE</span>
                <span className="font-mono text-base text-[#172554]">
                  ₹{counterValue.toLocaleString("en-IN")}.00
                </span>
              </div>
            </div>

            <div className={`p-3.5 rounded-xl bg-[#FBFAF6] border text-[11px] space-y-1 transition-all duration-500 ${
              stepStage === "posted" ? "border-[#15803D]/40 bg-[#15803D]/05 opacity-100" : "border-[#141413]/06 opacity-50"
            }`}>
              <span className="text-[9px] uppercase tracking-wider text-[#8C8885] block font-semibold">
                General Ledger Journal
              </span>
              <div className="text-[#141413] font-semibold">Dr Accounts Receivable (Alpha Ltd) ₹1,18,000</div>
              <div className="text-[#57534E] pl-2">Cr Consulting Revenue ₹1,00,000 · Cr Output GST ₹18,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnimatedRow2() {
  const [typedText, setTypedText] = useState("");
  const [riverResponded, setRiverResponded] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const rowRef = useRef<HTMLDivElement | null>(null);
  const isStarted = useRef(false);

  const fullText = "Record the TechMart bill for the new laptop";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let isCancelled = false;

    function runSequence() {
      if (isCancelled) return;
      setTypedText("");
      setRiverResponded(false);
      setIsHighlighted(false);
      setIsLogged(false);
      let index = 0;

      const typeInterval = setInterval(() => {
        if (isCancelled) {
          clearInterval(typeInterval);
          return;
        }
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(typeInterval);
          
          setTimeout(() => {
            if (isCancelled) return;
            setRiverResponded(true);

            setTimeout(() => {
              if (isCancelled) return;
              setIsHighlighted(true);

              setTimeout(() => {
                if (isCancelled) return;
                setIsLogged(true);

                setTimeout(() => {
                  if (isCancelled) return;
                  runSequence();
                }, 7000);
              }, 600);
            }, 500);
          }, 400);
        }
      }, 35);
    }

    const trigger = ScrollTrigger.create({
      trigger: rowRef.current,
      start: "top 75%",
      onEnter: () => {
        if (!isStarted.current) {
          isStarted.current = true;
          runSequence();
        }
      },
    });

    gsap.fromTo(
      rowRef.current,
      { opacity: 0.7, y: 50, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rowRef.current,
          start: "top 80%",
        },
      }
    );

    return () => {
      isCancelled = true;
      trigger.kill();
    };
  }, []);

  return (
    <div ref={rowRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
      {/* Left: macOS Preview Window */}
      <div className="lg:col-span-7 order-2 lg:order-1">
        <div className="mac-window overflow-hidden bg-white shadow-2xl">
          <div className="mac-titlebar">
            <div className="traffic-dots">
              <span className="dot-close"></span>
              <span className="dot-min"></span>
              <span className="dot-zoom"></span>
            </div>
            <span className="font-mono text-[11px] text-[#686461]">
              Preview.app — TechMart_Bill_9921.pdf
            </span>
            <div className="w-8"></div>
          </div>

          <div className="p-6 sm:p-8 space-y-5 text-xs font-mono">
            <div className="flex justify-between items-center pb-3 border-b border-[#141413]/08">
              <div>
                <span className="text-[#8C8885] block text-[10px]">VENDOR</span>
                <span className="font-bold text-sm text-[#141413]">TechMart Electronics</span>
              </div>
              <span className={`text-xs font-mono px-3 py-1 rounded-full font-semibold transition-all duration-500 ${
                isLogged ? "text-[#172554] bg-[#172554]/10 scale-105" : "text-[#8C8885] bg-[#141413]/05"
              }`}>
                {isLogged ? "ITC CAPTURED ✓" : "Ingesting PDF..."}
              </span>
            </div>

            <div className="space-y-2.5 py-2">
              <div className="flex justify-between font-sans">
                <span className="text-[#141413]">Workstation Laptop (Fixed Asset)</span>
                <span className="font-mono font-bold">₹85,000.00</span>
              </div>

              <div className={`flex justify-between items-center px-2.5 py-1.5 rounded transition-all duration-700 ${
                isHighlighted
                  ? "bg-[#FEF08A] text-[#141413] font-semibold scale-100 shadow-sm"
                  : "bg-transparent text-[#8C8885] scale-95"
              }`}>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#EAB308] inline-block animate-pulse"></span>
                  Input Tax Credit (18% GST Claimable)
                </span>
                <span className="font-mono font-bold">₹15,300.00</span>
              </div>

              <div className="flex justify-between pt-3 border-t border-[#141413]/08 text-sm font-bold text-[#141413]">
                <span>ACCOUNTS PAYABLE</span>
                <span>₹1,00,300.00</span>
              </div>
            </div>

            <div className={`p-3.5 rounded-xl bg-[#FBFAF6] border text-[11px] space-y-1 transition-all duration-500 ${
              isLogged ? "border-[#172554]/40 bg-[#172554]/05 opacity-100" : "border-[#141413]/06 opacity-50"
            }`}>
              <span className="text-[9px] uppercase tracking-wider text-[#8C8885] block font-semibold">
                General Ledger Journal
              </span>
              <div className="text-[#141413] font-semibold">Dr Computer Equipment ₹85,000 · Dr Input GST ₹15,300</div>
              <div className="text-[#57534E] pl-2">Cr Accounts Payable (TechMart) ₹1,00,300</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Soundwave & Typing Speech Bubble */}
      <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
        <div className="flex items-center gap-2">
          <span className="sound-bars">
            <i></i><i></i><i></i><i></i><i></i>
          </span>
          <span className="text-xs font-mono text-[#8C8885]">text / voice command</span>
        </div>

        {/* User Speech Bubble */}
        <div className="inline-block p-4 sm:p-5 rounded-3xl bg-white border border-[#141413]/10 shadow-md text-base sm:text-lg font-sans text-[#141413] max-w-md min-h-[72px]">
          &ldquo;{typedText}&rdquo;
        </div>

        {/* River Response Bubble */}
        <div className={`transition-all duration-500 transform ${
          riverResponded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95"
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#172554] text-white text-xs font-mono font-medium shadow-sm">
            <span>recorded!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnimatedRow3() {
  const [typedText, setTypedText] = useState("");
  const [riverResponded, setRiverResponded] = useState(false);
  const [isDepositLanded, setIsDepositLanded] = useState(false);
  const [invoiceCleared, setInvoiceCleared] = useState(false);
  const rowRef = useRef<HTMLDivElement | null>(null);
  const isStarted = useRef(false);

  const fullText = "Alpha paid the invoice with 10% TDS";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let isCancelled = false;

    function runSequence() {
      if (isCancelled) return;
      setTypedText("");
      setRiverResponded(false);
      setIsDepositLanded(false);
      setInvoiceCleared(false);
      index = 0;

      const typeInterval = setInterval(() => {
        if (isCancelled) {
          clearInterval(typeInterval);
          return;
        }
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(typeInterval);
          
          setTimeout(() => {
            if (isCancelled) return;
            setRiverResponded(true);

            setTimeout(() => {
              if (isCancelled) return;
              setIsDepositLanded(true);

              setTimeout(() => {
                if (isCancelled) return;
                setInvoiceCleared(true);

                setTimeout(() => {
                  if (isCancelled) return;
                  runSequence();
                }, 7000);
              }, 600);
            }, 500);
          }, 400);
        }
      }, 35);
    }

    let index = 0;

    const trigger = ScrollTrigger.create({
      trigger: rowRef.current,
      start: "top 75%",
      onEnter: () => {
        if (!isStarted.current) {
          isStarted.current = true;
          runSequence();
        }
      },
    });

    gsap.fromTo(
      rowRef.current,
      { opacity: 0.7, y: 50, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rowRef.current,
          start: "top 80%",
        },
      }
    );

    return () => {
      isCancelled = true;
      trigger.kill();
    };
  }, []);

  return (
    <div ref={rowRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
      {/* Left: Soundwave & Typing Speech Bubble */}
      <div className="lg:col-span-5 space-y-5">
        <div className="flex items-center gap-2">
          <span className="sound-bars">
            <i></i><i></i><i></i><i></i><i></i>
          </span>
          <span className="text-xs font-mono text-[#8C8885]">text / voice command</span>
        </div>

        {/* User Speech Bubble */}
        <div className="inline-block p-4 sm:p-5 rounded-3xl bg-white border border-[#141413]/10 shadow-md text-base sm:text-lg font-sans text-[#141413] max-w-md min-h-[72px]">
          &ldquo;{typedText}&rdquo;
        </div>

        {/* River Response Bubble */}
        <div className={`transition-all duration-500 transform ${
          riverResponded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95"
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#172554] text-white text-xs font-mono font-medium shadow-sm">
            <span>reconciled!</span>
          </div>
        </div>
      </div>

      {/* Right: macOS Banking & Tax Window */}
      <div className="lg:col-span-7">
        <div className="mac-window overflow-hidden bg-white shadow-2xl">
          <div className="mac-titlebar">
            <div className="traffic-dots">
              <span className="dot-close"></span>
              <span className="dot-min"></span>
              <span className="dot-zoom"></span>
            </div>
            <span className="font-mono text-[11px] text-[#686461]">
              Bank.app — HDFC Statement Reconciliation
            </span>
            <div className="w-8"></div>
          </div>

          <div className="p-6 sm:p-8 space-y-5 text-xs font-mono">
            <div className="flex justify-between items-center pb-3 border-b border-[#141413]/08">
              <div>
                <span className="text-[#8C8885] block text-[10px]">ACCOUNT</span>
                <span className="font-bold text-sm text-[#141413]">HDFC Bank Current A/c</span>
              </div>
              <span className={`text-xs font-mono px-3 py-1 rounded-full font-semibold transition-all duration-500 ${
                invoiceCleared ? "text-[#15803D] bg-[#15803D]/10 scale-105" : "text-[#8C8885] bg-[#141413]/05"
              }`}>
                {invoiceCleared ? "FORM 26AS MATCHED ✓" : "Matching..."}
              </span>
            </div>

            <div className="space-y-2.5 py-2">
              <div className={`flex justify-between font-sans items-center transition-all duration-500 ${
                isDepositLanded ? "text-[#141413] font-medium" : "text-[#8C8885]"
              }`}>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#15803D] inline-block animate-pulse"></span>
                  Cash Received in HDFC Account
                </span>
                <span className="font-mono font-bold text-[#15803D]">
                  {isDepositLanded ? "+₹1,08,000.00" : "—"}
                </span>
              </div>

              <div className={`flex justify-between text-[#172554] transition-all duration-500 ${
                isDepositLanded ? "opacity-100 translate-x-0" : "opacity-20 -translate-x-2"
              }`}>
                <span>TDS Receivable (Sec 194J · Form 26AS)</span>
                <span className="font-mono font-bold">₹10,000.00</span>
              </div>

              <div className="flex justify-between pt-3 border-t border-[#141413]/08 text-sm font-bold text-[#141413]">
                <span>INVOICE #INV-084 BALANCE</span>
                <span className={`font-mono transition-all duration-500 ${
                  invoiceCleared ? "text-[#15803D] font-bold" : "text-[#8C8885]"
                }`}>
                  {invoiceCleared ? "Nil (100% Cleared)" : "₹1,18,000.00"}
                </span>
              </div>
            </div>

            <div className={`p-3.5 rounded-xl bg-[#FBFAF6] border text-[11px] space-y-1 transition-all duration-500 ${
              invoiceCleared ? "border-[#15803D]/40 bg-[#15803D]/05 opacity-100" : "border-[#141413]/06 opacity-50"
            }`}>
              <span className="text-[9px] uppercase tracking-wider text-[#8C8885] block font-semibold">
                General Ledger Journal
              </span>
              <div className="text-[#141413] font-semibold">Dr HDFC Bank ₹1,08,000 · Dr TDS Receivable ₹10,000</div>
              <div className="text-[#57534E] pl-2">Cr Accounts Receivable (Alpha Ltd) ₹1,18,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".vertical-flow-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 0.8,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="py-28 md:py-40 relative">
      <div className="max-w-[1240px] mx-auto px-4 md:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] text-[#141413] leading-[1.12]">
            Talk to it like a person, in River or on WhatsApp
          </h2>
        </div>

        {/* Connecting Vertical Flow Beam */}
        <div className="hidden lg:block absolute left-1/2 top-48 bottom-48 w-0.5 -translate-x-1/2 z-0">
          <div className="w-full h-full bg-[#141413]/06" />
          <div className="vertical-flow-line absolute inset-0 w-full bg-[#172554] origin-top" />
        </div>

        {/* 3 GSAP ScrollTrigger Driven Alternating Living Rows */}
        <div className="space-y-28 md:space-y-40">
          <AnimatedRow1 />
          <AnimatedRow2 />
          <AnimatedRow3 />
        </div>

        {/* Verbatim Core Summary Banner */}
        <div className="max-w-4xl mx-auto mt-28 md:mt-36 p-8 md:p-14 rounded-3xl bg-white border border-[#141413]/08 shadow-sm text-center relative z-10">
          <p className="font-display font-medium text-2xl sm:text-3xl md:text-4xl text-[#141413] leading-relaxed tracking-tight">
            River takes care of the accounting behind each command. It creates the invoice, records the bill, keeps track of what you&apos;re owed, and updates the books when money comes in.
          </p>
        </div>

      </div>
    </section>
  );
}
