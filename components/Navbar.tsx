"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [timeString, setTimeString] = useState("");
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Live local clock updating every second
    const updateClock = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateClock();
    const clockInterval = setInterval(updateClock, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling down -> hide navbar smoothly
        setVisible(false);
      } else {
        // Scrolling up -> show navbar
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 pt-4 px-4 sm:px-6 pointer-events-none transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Lockup (Left) */}
        <nav className="pointer-events-auto flex items-center gap-3 px-4 py-2 rounded-full bg-[#FBFAF6]/85 backdrop-blur-xl border border-[#141413]/10 shadow-[0_8px_30px_rgba(20,20,19,0.06)] select-none">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group cursor-pointer bg-transparent border-0 p-0 outline-none select-none"
            aria-label="Asynarch River Home"
          >
            {/* Slim Natural Asynarch Wave Mark (Intrinsic Aspect Ratio 1672x941) */}
            <div className="flex items-center justify-center group-hover:scale-105 transition-transform">
              <Image
                src="/asynarch-logo.png"
                alt="Asynarch"
                width={1672}
                height={941}
                className="h-5 sm:h-6 w-auto object-contain"
                priority
              />
            </div>

            <span className="text-xs sm:text-sm font-mono text-[#8C8885] font-semibold tracking-tight">
              asynarch
            </span>

            <span className="text-[#8C8885]/30 font-mono text-xs">/</span>

            {/* River Pixel Mac (Intrinsic Aspect Ratio 1402x1122) */}
            <div className="flex items-center justify-center group-hover:scale-105 transition-transform">
              <Image
                src="/river-logo.png"
                alt="River"
                width={1402}
                height={1122}
                className="h-5 sm:h-6 w-auto object-contain"
                priority
              />
            </div>

            <span className="font-medium text-sm sm:text-base tracking-tight text-[#141413]">
              river
            </span>
          </button>
        </nav>

        {/* Navigation Anchors, River Status Tray & CTA (Right) */}
        <div className="pointer-events-auto flex items-center gap-4 sm:gap-6 px-5 py-2 rounded-full bg-[#FBFAF6]/85 backdrop-blur-xl border border-[#141413]/10 shadow-[0_8px_30px_rgba(20,20,19,0.06)]">
          
          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-5">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-xs font-sans text-[#57534E] hover:text-[#141413] transition-colors cursor-pointer"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("problem")}
              className="text-xs font-sans text-[#57534E] hover:text-[#141413] transition-colors cursor-pointer"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection("assurance")}
              className="text-xs font-sans text-[#57534E] hover:text-[#141413] transition-colors cursor-pointer"
            >
              Assurance
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-xs font-sans text-[#57534E] hover:text-[#141413] transition-colors cursor-pointer"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-xs font-sans text-[#57534E] hover:text-[#141413] transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </div>

          <div className="hidden lg:block w-[1px] h-3.5 bg-[#141413]/10"></div>

          {/* BESPOKE RIVER SYSTEM STATUS TRAY */}
          <div className="flex items-center gap-3 font-mono text-[11px] text-[#57534E] select-none">
            {/* Live Micro-Soundwave Audio Ready */}
            <span className="sound-bars !gap-0.5 !h-3">
              <i className="!w-0.5 !bg-[#172554]"></i>
              <i className="!w-0.5 !bg-[#172554]"></i>
              <i className="!w-0.5 !bg-[#172554]"></i>
              <i className="!w-0.5 !bg-[#172554]"></i>
            </span>

            {/* Dual Sync Node: River / WhatsApp */}
            <span className="text-[10px] text-[#8C8885]">sync active</span>

            {/* Operational Emerald Pulse Dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] animate-pulse"></span>

            {/* Live Local Clock */}
            {timeString && (
              <span className="text-[#141413] font-medium tracking-tight text-xs">
                {timeString}
              </span>
            )}
          </div>

          <div className="w-[1px] h-3.5 bg-[#141413]/10"></div>

          <button
            onClick={() => scrollToSection("waitlist")}
            className="btn-indigo px-4 py-1.5 text-xs font-sans font-medium cursor-pointer shadow-sm hover:scale-105 transition-transform"
          >
            Join waitlist
          </button>
        </div>

      </div>
    </header>
  );
}
