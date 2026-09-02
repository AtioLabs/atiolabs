"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const monumentRef = useRef<HTMLDivElement | null>(null);
  const [modalType, setModalType] = useState<"privacy" | "terms" | null>(null);

  useEffect(() => {
    if (modalType) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalType]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Unified wordmark lift linked to scroll
      gsap.fromTo(
        ".river-wordmark",
        {
          opacity: 0.15,
          y: 40,
          scale: 0.92,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: monumentRef.current,
            start: "top 95%",
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );

      // Bi-directional converging left mascot
      gsap.fromTo(
        ".converging-mascot-left",
        {
          x: -80,
          opacity: 0,
          rotate: -15,
          scale: 0.75,
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
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );

      // Bi-directional converging right mascot
      gsap.fromTo(
        ".converging-mascot-right",
        {
          x: 80,
          opacity: 0,
          rotate: 15,
          scale: 0.75,
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
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="border-t border-[#141413]/08 bg-[#FBFAF6] pt-16 md:pt-20 pb-16 text-xs text-[#686461] select-none overflow-hidden relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        
        {/* Top Row: Institutional Brand & Navigation Directory */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20 border-b border-[#141413]/06">
          
          {/* Col 1: Product & Company Vision */}
          <div className="md:col-span-5 space-y-5">
            <div>
              <span className="font-mono text-base sm:text-lg font-bold text-[#141413] tracking-tight block">
                Asynarch
              </span>
            </div>

            <p className="text-sm font-sans text-[#57534E] max-w-sm leading-relaxed">
              Accounting shouldn’t be something you sit down and do. It should just move, the way a river does.
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
              <Link
                href="/about"
                className="hover:text-[#141413] transition-colors cursor-pointer text-xs font-mono text-[#686461] inline-block"
              >
                about ↗
              </Link>
            </div>
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

        {/* CLEAN ARCHITECTURAL "R I V E R" MONUMENT (Visible on Mobile & Desktop) */}
        <div
          ref={monumentRef}
          className="py-14 md:py-24 text-center relative overflow-hidden flex items-center justify-center gap-3 sm:gap-6 md:gap-12 select-none"
        >
          {/* Left River Mascot (Always visible on mobile & desktop, converging on scroll) */}
          <div className="converging-mascot-left w-7 h-7 sm:w-11 sm:h-11 md:w-14 md:h-14 relative flex items-center justify-center shrink-0">
            <Image
              src="/river-logo.png"
              alt="River Mascot"
              width={1402}
              height={1122}
              className="w-full h-full object-contain pointer-events-none"
              priority
            />
          </div>

          {/* Unified Wordmark Block - Balanced Editorial Tone (Not too dark, not dull 15%) */}
          <div className="river-wordmark select-none">
            <span className="font-display font-medium text-4xl sm:text-7xl md:text-9xl lg:text-[140px] text-[#141413]/40 uppercase tracking-tight leading-none inline-block">
              RIVER
            </span>
          </div>

          {/* Right River Mascot (Always visible on mobile & desktop, converging on scroll) */}
          <div className="converging-mascot-right w-7 h-7 sm:w-11 sm:h-11 md:w-14 md:h-14 relative flex items-center justify-center shrink-0">
            <Image
              src="/river-logo.png"
              alt="River Mascot"
              width={1402}
              height={1122}
              className="w-full h-full object-contain pointer-events-none"
              priority
            />
          </div>
        </div>

        {/* Bottom Colophon: About · Privacy · Terms · Contact */}
        <div className="pt-8 border-t border-[#141413]/06 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#8C8885]">
          <div className="flex items-center gap-3">
            <p>© 2026 Asynarch.</p>
            <span>·</span>
            <Link
              href="/about"
              className="hover:text-[#141413] underline underline-offset-2 cursor-pointer text-[11px] font-mono text-[#8C8885]"
            >
              About
            </Link>
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

      {/* Lightweight Modals: Privacy & Terms with Single Clean Top-Right Close Button */}
      {modalType && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141413]/50 backdrop-blur-sm animate-fadeIn"
          onClick={() => setModalType(null)}
        >
          <div
            className="mac-window bg-white w-full shadow-2xl max-w-md max-h-[85vh] overflow-y-auto select-text"
            onClick={(e) => e.stopPropagation()}
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {/* Modal Titlebar with Single Unified Close Button (Sticky) */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#141413]/08 px-6 py-4 bg-[#FAF8F4]/95 backdrop-blur-md rounded-t-2xl">
              <span className="font-mono text-xs font-bold text-[#141413] uppercase tracking-wider">
                {modalType === "privacy" ? "Privacy Notice" : "Terms & Conditions"}
              </span>
              <button
                onClick={() => setModalType(null)}
                className="text-xs font-mono text-[#686461] hover:text-[#141413] px-2.5 py-1 rounded-full bg-[#141413]/05 hover:bg-[#141413]/10 transition-colors cursor-pointer border-0"
              >
                ✕ Close
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-4 font-sans text-sm text-[#3D3A37] leading-[1.75]">
              {modalType === "privacy" ? (
                <div className="space-y-3">
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
              ) : (
                <div className="space-y-3">
                  <p>
                    River by Asynarch is currently in pre-launch early access. Early access features are subject to continuous refinement.
                  </p>
                  <p>
                    By submitting your email, you agree to receive product updates and onboarding communications regarding River.
                  </p>
                  <p className="pt-2 font-mono text-xs text-[#141413]">
                    Contact: <a href="mailto:asynarch.team@gmail.com" className="text-[#172554] underline">asynarch.team@gmail.com</a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Crawlable Semantic About Section for Search Engine Spiders (Always present in initial HTML payload) */}
      <section aria-label="About Asynarch" className="sr-only">
        <h2>About Asynarch</h2>
        <p>Asynarch started in Madurai, in April 2026.</p>
        <p>The idea didn&apos;t start with accounting. It started with a simpler thought: make people&apos;s lives easier. So I built things. Then I used them, and hated using them too. Easier still meant work.</p>
        <p>Software should do the job itself. Not wait for someone to run it.</p>
        <p>For accounting, that&apos;s the whole idea: you say what happened, it takes care of the rest. For GST-registered businesses, to start.</p>
        <p>We&apos;re a four-person team: Naveen (COO), Abu (CTO), Nantha (CFO), and Asrul (CEO).</p>
        <p>We called it River. Accounting shouldn&apos;t be something you sit down and do. It should just move, the way a river does, without you standing over it.</p>
        <p>Built by Asynarch in Madurai. Contact: asynarch.team@gmail.com</p>
        <a href="https://asynarch.com/about">Read full About Asynarch page</a>
      </section>
    </footer>
  );
}
