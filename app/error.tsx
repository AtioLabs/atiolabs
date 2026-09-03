"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Runtime application error:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#FBFAF6] flex flex-col items-center justify-center px-4 py-16 text-[#141413] selection:bg-[#172554]/15 selection:text-[#172554]">
      <div className="max-w-md w-full text-center space-y-6">
        
        {/* River Architectural Card */}
        <div className="bg-[#FFFEFA] border border-[#141413]/10 shadow-[0_16px_50px_rgba(20,20,19,0.05)] rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="w-20 h-20 relative mx-auto flex items-center justify-center">
            <Image
              src="/river-logo.png"
              alt="River Retro Computer"
              width={754}
              height={649}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs text-[#C2410C] font-bold block uppercase tracking-wider">
              (x_x) Temporary Disruption
            </span>
            <h1 className="font-display font-medium text-2xl sm:text-3xl text-[#141413] tracking-tight">
              Something went wrong
            </h1>
            <p className="font-sans text-sm text-[#57534E] leading-relaxed">
              An unexpected client error occurred. Your accounting ledger remains safe and intact.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => reset()}
              className="btn-indigo px-5 py-2.5 text-xs font-sans font-medium rounded-full shadow-sm hover:scale-105 transition-transform cursor-pointer w-full sm:w-auto"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="px-5 py-2.5 text-xs font-mono text-[#57534E] hover:text-[#141413] rounded-full border border-[#141413]/10 bg-white/80 hover:bg-white shadow-xs transition-colors w-full sm:w-auto"
            >
              Return Home
            </Link>
          </div>
        </div>

        {/* Institutional Subtext */}
        <p className="font-mono text-[11px] text-[#8C8885]">
          River by Asynarch · Autonomous Financial Operations
        </p>

      </div>
    </main>
  );
}
