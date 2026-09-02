"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function AboutPage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#FBFAF6] text-[#141413] selection:bg-[#172554]/15 selection:text-[#172554] antialiased flex flex-col justify-between">
        {/* Real Site Navbar */}
        <Navbar />

        {/* Main Content: Tactile River Stationery Sheet */}
        <main className="flex-1 pt-28 sm:pt-36 pb-20 px-4 sm:px-6 flex flex-col items-center">
          
          {/* Stationery Paper Canvas */}
          <article className="w-full max-w-[760px] bg-[#FFFEFA] border border-[#141413]/10 shadow-[0_16px_50px_rgba(20,20,19,0.05),0_1px_0_rgba(255,255,255,1)_inset] rounded-2xl sm:rounded-3xl p-7 sm:p-12 md:p-14 relative select-text">
            <div>
              
              {/* Top Stationery Header Bar with Top Back to Home */}
              <div className="pb-4 border-b border-[#141413]/10 flex items-center justify-between font-mono text-xs text-[#8C8885] select-none">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-[#57534E] hover:text-[#141413] transition-colors group"
                >
                  <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
                  <span className="underline underline-offset-4 decoration-[#141413]/20 font-medium">BACK TO HOME</span>
                </Link>

                <span className="font-bold text-[#141413] tracking-widest uppercase">
                  ABOUT
                </span>
              </div>

              {/* Story Narrative: Typewriter / Clean Editorial Cadence */}
              <div className="pt-8 sm:pt-10 space-y-6 sm:space-y-7 font-sans text-base sm:text-lg text-[#141413] leading-[1.8] text-left">
                
                <p className="font-medium text-lg sm:text-xl text-[#141413] leading-snug">
                  Asynarch started in Madurai, in April 2026.
                </p>

                <p>
                  The idea didn&apos;t start with accounting. It started with a simpler thought: make people&apos;s lives easier. So I built things. Then I used them, and hated using them too. Easier still meant work.
                </p>

                <p>
                  I stopped building and started watching. What people were doing with their time, everywhere, in businesses with nothing in common. One thought stuck: software should do the job itself. Not wait for someone to run it.
                </p>

                <p>
                  For accounting, that&apos;s the whole idea: you say what happened, it takes care of the rest. For GST-registered businesses, to start.
                </p>

                {/* Team Section: Clean Architectural Divider */}
                <div className="py-4 border-y border-[#141413]/10 font-mono text-xs sm:text-sm text-[#141413] leading-relaxed">
                  We&apos;re a four-person team: Naveen (COO), Abu (CTO), Nantha (CFO), and Asrul (CEO).
                </div>

                <p>
                  We called it River. Accounting shouldn&apos;t be something you sit down and do. It should just move, the way a river does, without you standing over it.
                </p>

                {/* Asrul's Authentic Nonchalant Conviction */}
                <p className="pt-4 border-t border-[#141413]/10 font-medium text-[#141413] text-base sm:text-lg leading-relaxed">
                  The human mind wasn&apos;t built to spend thirty years operating tools. Let people do the work that creates impact, and let the machine handle the rest. Accounting was just the first place to fix it.
                </p>

                {/* Sign-off */}
                <div className="pt-2">
                  <p className="font-mono text-base sm:text-lg text-[#141413] font-bold tracking-tight">
                    — Asrul
                  </p>
                </div>
              </div>

              {/* Stationery Bottom: Retro River Computer Mascot & Back to Home */}
              <div className="mt-12 sm:mt-16 pt-6 border-t border-[#141413]/10 flex flex-col items-center justify-center gap-4 text-center select-none">
                <div className="w-12 h-12 relative flex items-center justify-center">
                  <Image
                    src="/river-logo.png"
                    alt="River Mascot"
                    width={1192}
                    height={1063}
                    className="w-full h-full object-contain"
                  />
                </div>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 font-mono text-xs text-[#8C8885] hover:text-[#141413] transition-colors group"
                >
                  <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
                  <span className="underline underline-offset-4 decoration-[#141413]/20">BACK TO HOME</span>
                </Link>
              </div>

            </div>

          </article>

        </main>

        {/* Real Site Footer (With brand vision, directory, converging mascots & RIVER monument) */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
