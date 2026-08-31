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
        <div className="inline-block p-4 sm:p-5 rounded-3xl bg-white border border-[#141413]/10 shadow-[0_4px_20px_rgba(20,20,19,0.04)] text-base sm:text-lg font-sans text-[#141413] max-w-md min-h-[72px]">
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

      {/* Right: Invoicing Card with Light Frosted River Floating Capsule */}
      <div className="lg:col-span-7 relative pt-4 sm:pt-5">
        
        {/* Light Frosted Apple Glass Kaomoji Capsule (Top-Center) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#141413] shadow-[0_4px_14px_rgba(20,20,19,0.06)] border border-[#141413]/10 text-[11px] font-mono tracking-tight transition-all duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] animate-pulse"></span>
            <span className="font-semibold text-[#141413]">River</span>
            <span className="text-[#8C8885]">·</span>
            <span className="font-bold text-[#172554]">
              {stepStage === "posted" ? "{ ^-^ }" : "{ ^o^ }"}
            </span>
          </div>
        </div>

        {/* Outer Wispr Ambient Frame */}
        <div className="relative rounded-[28px] p-2 sm:p-2.5 bg-gradient-to-b from-white/90 via-[#F9F7F1]/80 to-[#F2EFE8]/70 border border-[#141413]/10 shadow-[0_1px_3px_rgba(20,20,19,0.02),0_24px_60px_-12px_rgba(20,20,19,0.09)] backdrop-blur-xl">
          
          {/* Main Card Container */}
          <div className="bg-white rounded-[22px] border border-[#141413]/08 overflow-hidden shadow-sm">
            
            {/* Top Titlebar */}
            <div className="px-4 sm:px-6 py-3 bg-[#FAF8F5] border-b border-[#141413]/06 flex items-center justify-between">
              <div className="flex items-center gap-2.5 font-mono text-[11px] text-[#686461]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/90 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/90 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/90 inline-block"></span>
                </div>
                <span className="text-[#141413]/20">|</span>
                <span className="font-semibold text-[#141413]">Invoice.app</span>
                <span className="text-[#8C8885] hidden sm:inline">— Sales Tax Invoice #INV-2026-084</span>
              </div>
              <span className="font-mono text-[10px] text-[#8C8885]">#INV-2026-084</span>
            </div>

            {/* Stage Body */}
            <div className="p-5 sm:p-7 space-y-4 font-mono text-xs">
              
              {/* Customer Row */}
              <div className="flex justify-between items-center pb-3 border-b border-[#141413]/06">
                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#8C8885] block">CUSTOMER</span>
                  <span className="font-bold text-sm text-[#141413] block mt-0.5">Alpha Ltd</span>
                  <span className="text-[11px] text-[#57534E] block mt-0.5">Chennai, Tamil Nadu · GSTIN: 33AAAAA0000A1Z5</span>
                </div>
                <span className={`text-[10px] font-mono px-3 py-1 rounded-full font-semibold transition-all duration-500 flex items-center gap-1.5 ${
                  stepStage === "posted"
                    ? "text-[#15803D] bg-[#15803D]/10 border border-[#15803D]/25 shadow-sm scale-105"
                    : "text-[#8C8885] bg-[#141413]/05 border border-[#141413]/06"
                }`}>
                  {stepStage === "posted" ? "ISSUED & BALANCED ✓" : "Composing..."}
                </span>
              </div>

              {/* Line Items & Calculations */}
              <div className="space-y-2 py-1">
                <div className="flex justify-between font-sans items-center py-1">
                  <span className={`transition-all duration-300 ${
                    stepStage !== "idle" ? "text-[#141413] font-medium" : "text-[#8C8885]"
                  }`}>
                    Strategic Consulting (SAC 9983)
                  </span>
                  <span className="font-mono font-bold text-[#141413]">
                    {stepStage !== "idle" ? "₹1,00,000.00" : "—"}
                  </span>
                </div>

                <div className={`flex justify-between text-[#57534E] py-0.5 transition-all duration-500 ${
                  stepStage === "taxCalc" || stepStage === "odometer" || stepStage === "posted"
                    ? "opacity-100 translate-x-0"
                    : "opacity-20 -translate-x-2"
                }`}>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#172554]/40"></span>
                    Central GST (CGST @ 9%)
                  </span>
                  <span className="font-mono">₹9,000.00</span>
                </div>

                <div className={`flex justify-between text-[#57534E] py-0.5 transition-all duration-500 ${
                  stepStage === "taxCalc" || stepStage === "odometer" || stepStage === "posted"
                    ? "opacity-100 translate-x-0"
                    : "opacity-20 -translate-x-2"
                }`}>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#172554]/40"></span>
                    State GST (SGST @ 9%)
                  </span>
                  <span className="font-mono">₹9,000.00</span>
                </div>

                <div className="flex justify-between pt-2.5 border-t border-[#141413]/06 text-sm font-bold text-[#172554] items-center">
                  <span className="tracking-tight">TOTAL INVOICE PAYABLE</span>
                  <span className="font-mono text-base text-[#172554]">
                    ₹{counterValue.toLocaleString("en-IN")}.00
                  </span>
                </div>
              </div>

            </div>

            {/* Slotted Physical Journal Paper Ticket (Bottom Dock) */}
            <div className={`mx-3 sm:mx-4 mb-3 sm:mb-4 p-3.5 sm:p-4 rounded-xl bg-[#F6F4EE] border transition-all duration-500 ${
              stepStage === "posted" ? "border-[#15803D]/30 bg-[#F0FDF4]/60 shadow-sm" : "border-[#141413]/07 opacity-70"
            }`}>
              <div className="flex items-center justify-between text-[9px] uppercase tracking-wider text-[#8C8885] font-semibold border-b border-[#141413]/06 pb-1.5 mb-2">
                <span>General Ledger Journal Entry</span>
                <span className="font-mono text-[9px] text-[#15803D] font-bold">ZERO VARIANCE ✓</span>
              </div>
              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="flex items-center gap-2 text-[#141413] font-semibold">
                  <span className="px-1.5 py-0.5 rounded bg-[#172554] text-white text-[9px] font-bold">Dr</span>
                  <span>Accounts Receivable (Alpha Ltd)</span>
                  <span className="ml-auto">₹1,18,000</span>
                </div>
                <div className="flex items-center gap-2 text-[#57534E] pl-6 text-[10px]">
                  <span className="px-1 py-0.5 rounded bg-[#141413]/10 text-[#57534E] text-[8px] font-bold">Cr</span>
                  <span>Consulting Revenue ₹1,00,000 · Cr Output GST ₹18,000</span>
                </div>
              </div>
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
      {/* Left: PDF Bill Card with Light Frosted River Floating Capsule */}
      <div className="lg:col-span-7 order-2 lg:order-1 relative pt-4 sm:pt-5">
        
        {/* Light Frosted Apple Glass Kaomoji Capsule (Top-Center) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#141413] shadow-[0_4px_14px_rgba(20,20,19,0.06)] border border-[#141413]/10 text-[11px] font-mono tracking-tight transition-all duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308] animate-pulse"></span>
            <span className="font-semibold text-[#141413]">River</span>
            <span className="text-[#8C8885]">·</span>
            <span className="font-bold text-[#172554]">
              {isLogged ? "(⌐■_■)" : "{ ^-^ }"}
            </span>
          </div>
        </div>

        {/* Outer Wispr Ambient Frame */}
        <div className="relative rounded-[28px] p-2 sm:p-2.5 bg-gradient-to-b from-white/90 via-[#F9F7F1]/80 to-[#F2EFE8]/70 border border-[#141413]/10 shadow-[0_1px_3px_rgba(20,20,19,0.02),0_24px_60px_-12px_rgba(20,20,19,0.09)] backdrop-blur-xl">
          
          {/* Main Card Container */}
          <div className="bg-white rounded-[22px] border border-[#141413]/08 overflow-hidden shadow-sm">
            
            {/* Top Titlebar */}
            <div className="px-4 sm:px-6 py-3 bg-[#FAF8F5] border-b border-[#141413]/06 flex items-center justify-between">
              <div className="flex items-center gap-2.5 font-mono text-[11px] text-[#686461]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/90 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/90 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/90 inline-block"></span>
                </div>
                <span className="text-[#141413]/20">|</span>
                <span className="font-semibold text-[#141413]">Preview.app</span>
                <span className="text-[#8C8885] hidden sm:inline">— TechMart_Bill_9921.pdf</span>
              </div>
              <span className="font-mono text-[10px] text-[#8C8885]">TechMart_Bill.pdf</span>
            </div>

            {/* Stage Body */}
            <div className="p-5 sm:p-7 space-y-4 font-mono text-xs">
              
              {/* Vendor Row */}
              <div className="flex justify-between items-center pb-3 border-b border-[#141413]/06">
                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#8C8885] block">VENDOR</span>
                  <span className="font-bold text-sm text-[#141413] block mt-0.5">TechMart Electronics</span>
                </div>
                <span className={`text-[10px] font-mono px-3 py-1 rounded-full font-semibold transition-all duration-500 flex items-center gap-1.5 ${
                  isLogged
                    ? "text-[#172554] bg-[#172554]/10 border border-[#172554]/25 shadow-sm scale-105"
                    : "text-[#8C8885] bg-[#141413]/05 border border-[#141413]/06"
                }`}>
                  {isLogged ? "ITC CAPTURED ✓" : "Ingesting PDF..."}
                </span>
              </div>

              {/* Line Items & Yellow Highlighter Pen Sweep */}
              <div className="space-y-2 py-1">
                <div className="flex justify-between font-sans items-center py-1">
                  <span className="text-[#141413] font-medium">Workstation Laptop (Fixed Asset)</span>
                  <span className="font-mono font-bold text-[#141413]">₹85,000.00</span>
                </div>

                <div className={`flex justify-between items-center px-3 py-2 rounded-xl transition-all duration-700 ${
                  isHighlighted
                    ? "bg-[#FEF08A] text-[#141413] font-semibold scale-100 shadow-sm border border-[#EAB308]/30"
                    : "bg-transparent text-[#8C8885] scale-95"
                }`}>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#EAB308] inline-block animate-pulse"></span>
                    Input Tax Credit (18% GST Claimable)
                  </span>
                  <span className="font-mono font-bold text-[#141413]">₹15,300.00</span>
                </div>

                <div className="flex justify-between pt-2.5 border-t border-[#141413]/06 text-sm font-bold text-[#141413] items-center">
                  <span className="tracking-tight">ACCOUNTS PAYABLE</span>
                  <span className="font-mono text-base text-[#141413]">₹1,00,300.00</span>
                </div>
              </div>

            </div>

            {/* Slotted Physical Journal Paper Ticket (Bottom Dock) */}
            <div className={`mx-3 sm:mx-4 mb-3 sm:mb-4 p-3.5 sm:p-4 rounded-xl bg-[#F6F4EE] border transition-all duration-500 ${
              isLogged ? "border-[#172554]/30 bg-[#EFF6FF]/60 shadow-sm" : "border-[#141413]/07 opacity-70"
            }`}>
              <div className="flex items-center justify-between text-[9px] uppercase tracking-wider text-[#8C8885] font-semibold border-b border-[#141413]/06 pb-1.5 mb-2">
                <span>General Ledger Journal Entry</span>
                <span className="font-mono text-[9px] text-[#172554] font-bold">ITC CAPITALIZED ✓</span>
              </div>
              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="flex items-center gap-2 text-[#141413] font-semibold">
                  <span className="px-1.5 py-0.5 rounded bg-[#172554] text-white text-[9px] font-bold">Dr</span>
                  <span>Computer Equipment ₹85,000 · Input GST ₹15,300</span>
                </div>
                <div className="flex items-center gap-2 text-[#57534E] pl-6 text-[10px]">
                  <span className="px-1 py-0.5 rounded bg-[#141413]/10 text-[#57534E] text-[8px] font-bold">Cr</span>
                  <span>Accounts Payable (TechMart) ₹1,00,300</span>
                </div>
              </div>
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
        <div className="inline-block p-4 sm:p-5 rounded-3xl bg-white border border-[#141413]/10 shadow-[0_4px_20px_rgba(20,20,19,0.04)] text-base sm:text-lg font-sans text-[#141413] max-w-md min-h-[72px]">
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
        <div className="inline-block p-4 sm:p-5 rounded-3xl bg-white border border-[#141413]/10 shadow-[0_4px_20px_rgba(20,20,19,0.04)] text-base sm:text-lg font-sans text-[#141413] max-w-md min-h-[72px]">
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

      {/* Right: Bank Reconciler Card with Light Frosted River Floating Capsule */}
      <div className="lg:col-span-7 relative pt-4 sm:pt-5">
        
        {/* Light Frosted Apple Glass Kaomoji Capsule (Top-Center) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#141413] shadow-[0_4px_14px_rgba(20,20,19,0.06)] border border-[#141413]/10 text-[11px] font-mono tracking-tight transition-all duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] animate-pulse"></span>
            <span className="font-semibold text-[#141413]">River</span>
            <span className="text-[#8C8885]">·</span>
            <span className="font-bold text-[#15803D]">
              {invoiceCleared ? "{ ^-^ }" : "{ ^o^ }"}
            </span>
          </div>
        </div>

        {/* Outer Wispr Ambient Frame */}
        <div className="relative rounded-[28px] p-2 sm:p-2.5 bg-gradient-to-b from-white/90 via-[#F9F7F1]/80 to-[#F2EFE8]/70 border border-[#141413]/10 shadow-[0_1px_3px_rgba(20,20,19,0.02),0_24px_60px_-12px_rgba(20,20,19,0.09)] backdrop-blur-xl">
          
          {/* Main Card Container */}
          <div className="bg-white rounded-[22px] border border-[#141413]/08 overflow-hidden shadow-sm">
            
            {/* Top Titlebar */}
            <div className="px-4 sm:px-6 py-3 bg-[#FAF8F5] border-b border-[#141413]/06 flex items-center justify-between">
              <div className="flex items-center gap-2.5 font-mono text-[11px] text-[#686461]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/90 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/90 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/90 inline-block"></span>
                </div>
                <span className="text-[#141413]/20">|</span>
                <span className="font-semibold text-[#141413]">Bank.app</span>
                <span className="text-[#8C8885] hidden sm:inline">— HDFC Statement Reconciliation</span>
              </div>
              <span className="font-mono text-[10px] text-[#8C8885]">HDFC_Stmt.csv</span>
            </div>

            {/* Stage Body */}
            <div className="p-5 sm:p-7 space-y-4 font-mono text-xs">
              
              {/* Account Row */}
              <div className="flex justify-between items-center pb-3 border-b border-[#141413]/06">
                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#8C8885] block">ACCOUNT</span>
                  <span className="font-bold text-sm text-[#141413] block mt-0.5">HDFC Bank Current A/c</span>
                </div>
                <span className={`text-[10px] font-mono px-3 py-1 rounded-full font-semibold transition-all duration-500 flex items-center gap-1.5 ${
                  invoiceCleared
                    ? "text-[#15803D] bg-[#15803D]/10 border border-[#15803D]/25 shadow-sm scale-105"
                    : "text-[#8C8885] bg-[#141413]/05 border border-[#141413]/06"
                }`}>
                  {invoiceCleared ? "FORM 26AS MATCHED ✓" : "Matching..."}
                </span>
              </div>

              {/* Line Items: Bank Deposit & TDS Receivable Split */}
              <div className="space-y-2 py-1">
                <div className={`flex justify-between font-sans items-center py-1 transition-all duration-500 ${
                  isDepositLanded ? "text-[#141413]" : "text-[#8C8885]"
                }`}>
                  <span className="flex items-center gap-2 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#15803D] inline-block animate-pulse"></span>
                    Cash Received in HDFC Account
                  </span>
                  <span className="font-mono font-bold text-[#15803D]">
                    {isDepositLanded ? "+₹1,08,000.00" : "—"}
                  </span>
                </div>

                <div className={`flex justify-between text-[#172554] py-0.5 transition-all duration-500 ${
                  isDepositLanded ? "opacity-100 translate-x-0" : "opacity-20 -translate-x-2"
                }`}>
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#172554]/40"></span>
                    TDS Receivable (Sec 194J · Form 26AS)
                  </span>
                  <span className="font-mono font-bold">₹10,000.00</span>
                </div>

                <div className="flex justify-between pt-2.5 border-t border-[#141413]/06 text-sm font-bold text-[#141413] items-center">
                  <span className="tracking-tight">INVOICE #INV-084 BALANCE</span>
                  <span className={`font-mono transition-all duration-500 ${
                    invoiceCleared ? "text-[#15803D] font-bold text-base" : "text-[#8C8885]"
                  }`}>
                    {invoiceCleared ? "Nil (100% Cleared)" : "₹1,18,000.00"}
                  </span>
                </div>
              </div>

            </div>

            {/* Slotted Physical Journal Paper Ticket (Bottom Dock) */}
            <div className={`mx-3 sm:mx-4 mb-3 sm:mb-4 p-3.5 sm:p-4 rounded-xl bg-[#F6F4EE] border transition-all duration-500 ${
              invoiceCleared ? "border-[#15803D]/30 bg-[#F0FDF4]/60 shadow-sm" : "border-[#141413]/07 opacity-70"
            }`}>
              <div className="flex items-center justify-between text-[9px] uppercase tracking-wider text-[#8C8885] font-semibold border-b border-[#141413]/06 pb-1.5 mb-2">
                <span>General Ledger Journal Entry</span>
                <span className="font-mono text-[9px] text-[#15803D] font-bold">SETTLEMENT POSTED ✓</span>
              </div>
              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="flex items-center gap-2 text-[#141413] font-semibold">
                  <span className="px-1.5 py-0.5 rounded bg-[#172554] text-white text-[9px] font-bold">Dr</span>
                  <span>HDFC Bank ₹1,08,000 · Dr TDS Receivable ₹10,000</span>
                </div>
                <div className="flex items-center gap-2 text-[#57534E] pl-6 text-[10px]">
                  <span className="px-1 py-0.5 rounded bg-[#141413]/10 text-[#57534E] text-[8px] font-bold">Cr</span>
                  <span>Accounts Receivable (Alpha Ltd) ₹1,18,000</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 md:py-40 relative">
      <div className="max-w-[1240px] mx-auto px-4 md:px-6 relative">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] text-[#141413] leading-[1.12]">
            Talk to it like a person, in River or on WhatsApp
          </h2>
        </div>

        {/* Timeline Center Beam */}
        <div className="hidden lg:block absolute left-1/2 top-48 bottom-48 w-0.5 -translate-x-1/2 z-0">
          <div className="w-full h-full bg-[#141413]/06"></div>
          <div className="vertical-flow-line absolute inset-0 w-full bg-[#172554] origin-top"></div>
        </div>

        {/* 3 Living Interactive Rows */}
        <div className="space-y-28 md:space-y-40">
          <AnimatedRow1 />
          <AnimatedRow2 />
          <AnimatedRow3 />
        </div>

        {/* Footer Editorial Callout */}
        <div className="max-w-4xl mx-auto mt-28 md:mt-36 p-8 md:p-14 rounded-3xl bg-white border border-[#141413]/08 shadow-sm text-center relative z-10">
          <p className="font-display font-medium text-2xl sm:text-3xl md:text-4xl text-[#141413] leading-relaxed tracking-tight">
            River takes care of the accounting behind each command. It creates the invoice, records the bill, keeps track of what you&apos;re owed, and updates the books when money comes in.
          </p>
        </div>

      </div>
    </section>
  );
}
