"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const monumentRef = useRef<HTMLDivElement | null>(null);
  const [modalType, setModalType] = useState<"privacy" | "terms" | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Unified wordmark lift (Zero per-character vertical split, 100% locked baseline)
      gsap.fromTo(
        ".river-wordmark",
        {
          opacity: 0.2,
          y: 60,
          scale: 0.85,
          filter: "blur(6px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          ease: "none",
          scrollTrigger: {
            trigger: monumentRef.current,
            start: "top 95%",
            end: "bottom 75%",
            scrub: 1,
          },
        }
      );

      // Bi-directional converging left mascot
      gsap.fromTo(
        ".converging-mascot-left",
        {
          x: -120,
          opacity: 0,
          rotate: -20,
          scale: 0.7,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: monumentRef.current,
            start: "top 95%",
            end: "bottom 75%",
            scrub: 1,
          },
        }
      );

      // Bi-directional converging right mascot
      gsap.fromTo(
        ".converging-mascot-right",
        {
          x: 120,
          opacity: 0,
          rotate: 20,
          scale: 0.7,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: monumentRef.current,
            start: "top 95%",
            end: "bottom 75%",
            scrub: 1,
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="border-t border-[#141413]/08 bg-[#FBFAF6] pt-24 pb-16 text-xs text-[#686461] select-none overflow-hidden relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        
        {/* Top Row: Institutional Brand & Navigation Directory */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20 border-b border-[#141413]/06">
          
          {/* Col 1: Product & Company Vision */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              {/* Slim Asynarch Wave Mark */}
              <div className="flex items-center justify-center">
                <Image
                  src="/asynarch-logo.png"
                  alt="Asynarch Logo"
                  width={1672}
                  height={941}
                  className="h-6 w-auto object-contain"
                />
              </div>

              <span className="text-[#8C8885]/30 font-mono text-xs">/</span>

              {/* River Pixel Mac */}
              <div className="flex items-center justify-center">
                <Image
                  src="/river-logo.png"
                  alt="River Logo"
                  width={1402}
                  height={1122}
                  className="h-6 w-auto object-contain"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-base text-[#141413]">river</span>
                <span className="text-[10px] font-mono text-[#8C8885] bg-[#141413]/05 px-2 py-0.5 rounded">
                  by asynarch
                </span>
              </div>
            </div>

            <p className="text-sm font-sans text-[#57534E] max-w-sm leading-relaxed">
              River is the autonomous accounting engine built by Asynarch. The accounting, as it happens.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-[10px] uppercase tracking-wider text-[#8C8885] font-semibold block mb-3">
              Architecture
            </span>
            <div><a href="#how-it-works" className="hover:text-[#141413] transition-colors">how it works</a></div>
            <div><a href="#problem" className="hover:text-[#141413] transition-colors">problem</a></div>
            <div><a href="#assurance" className="hover:text-[#141413] transition-colors">assurance</a></div>
            <div><a href="#benefits" className="hover:text-[#141413] transition-colors">benefits</a></div>
            <div><a href="#faq" className="hover:text-[#141413] transition-colors">faq</a></div>
          </div>

          {/* Col 3: Company & Connect */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-[10px] uppercase tracking-wider text-[#8C8885] font-semibold block mb-3">
              Asynarch
            </span>
            <div>
              <a href="https://asynarch.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#141413] transition-colors">
                asynarch.com ↗
              </a>
            </div>
            <div>
              <a href="https://x.com/asynarch" target="_blank" rel="noopener noreferrer" className="hover:text-[#141413] transition-colors">
                x (twitter) ↗
              </a>
            </div>
            <div>
              <a href="https://linkedin.com/company/asynarch" target="_blank" rel="noopener noreferrer" className="hover:text-[#141413] transition-colors">
                linkedin ↗
              </a>
            </div>
            <div>
              <a href="mailto:asynarch.team@gmail.com" className="hover:text-[#141413] transition-colors">
                asynarch.team@gmail.com ↗
              </a>
            </div>
          </div>

        </div>

        {/* 100% LOCKED BASELINE "R I V E R" MONUMENT */}
        <div ref={monumentRef} className="py-20 md:py-32 text-center relative overflow-hidden flex items-center justify-center gap-6 sm:gap-12">
          
          {/* Left Converging River Silhouette Mascot */}
          <div className="converging-mascot-left w-10 h-10 sm:w-14 sm:h-14 relative hidden sm:flex items-center justify-center shrink-0">
            <Image src="/river-logo.png" alt="River Mascot" width={1402} height={1122} className="w-full h-full object-contain" />
          </div>

          {/* Unified Wordmark Block */}
          <div className="river-wordmark select-none">
            <span className="font-display font-medium text-6xl sm:text-8xl md:text-9xl lg:text-[140px] text-[#141413]/15 uppercase tracking-normal sm:tracking-tight leading-none inline-block">
              RIVER
            </span>
          </div>

          {/* Right Converging River Silhouette Mascot */}
          <div className="converging-mascot-right w-10 h-10 sm:w-14 sm:h-14 relative hidden sm:flex items-center justify-center shrink-0">
            <Image src="/river-logo.png" alt="River Mascot" width={1402} height={1122} className="w-full h-full object-contain" />
          </div>

        </div>

        {/* Bottom Colophon: Privacy · Terms · Contact */}
        <div className="pt-8 border-t border-[#141413]/06 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#8C8885]">
          <div className="flex items-center gap-3">
            <p>© 2026 Asynarch Inc.</p>
            <span>·</span>
            <button
              onClick={() => setModalType("privacy")}
              className="hover:text-[#141413] underline underline-offset-2 cursor-pointer bg-transparent border-0 p-0 text-[11px] font-mono text-[#8C8885]"
            >
              Privacy
            </button>
            <span>·</span>
            <button
              onClick={() => setModalType("terms")}
              className="hover:text-[#141413] underline underline-offset-2 cursor-pointer bg-transparent border-0 p-0 text-[11px] font-mono text-[#8C8885]"
            >
              Terms
            </button>
            <span>·</span>
            <a
              href="mailto:asynarch.team@gmail.com"
              className="hover:text-[#141413] underline underline-offset-2 text-[#8C8885]"
            >
              Contact
            </a>
          </div>
          <p>Built for autonomous financial operations.</p>
        </div>

      </div>

      {/* Lightweight Privacy & Terms Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141413]/40 backdrop-blur-sm animate-fadeIn">
          <div className="mac-window bg-white max-w-md w-full p-6 sm:p-8 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#141413]/08 pb-3">
              <span className="font-mono text-xs font-bold text-[#141413] uppercase tracking-wider">
                {modalType === "privacy" ? "Privacy Notice" : "Terms & Conditions"}
              </span>
              <button
                onClick={() => setModalType(null)}
                className="text-xs font-mono text-[#8C8885] hover:text-[#141413] cursor-pointer bg-transparent border-0"
              >
                ✕ Close
              </button>
            </div>

            <div className="space-y-3 font-sans text-xs sm:text-sm text-[#57534E] leading-relaxed">
              <p>
                We only collect your email address exclusively for the purpose of managing early access waitlist notifications.
              </p>
              <p>
                We do not sell, share, or use your email for marketing, tracking, or telemetry.
              </p>
              <p className="pt-2 font-mono text-xs text-[#141413]">
                Contact: <a href="mailto:asynarch.team@gmail.com" className="text-[#172554] underline">asynarch.team@gmail.com</a>
              </p>
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setModalType(null)}
                className="btn-indigo px-5 py-2 text-xs font-sans font-medium rounded-full cursor-pointer"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
