"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FBFAF6] flex flex-col items-center justify-center px-6 py-20 text-[#141413] selection:bg-[#172554] selection:text-white">
      <div className="max-w-md w-full text-center space-y-8">
        
        {/* macOS Window 404 */}
        <div className="mac-window bg-white shadow-2xl p-8 sm:p-10 space-y-6">
          <div className="w-24 h-24 relative mx-auto flex items-center justify-center">
            <Image
              src="/river-logo.png"
              alt="River Retro Computer"
              width={1402}
              height={1122}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          <div className="space-y-2">
            <span className="font-mono text-sm text-[#DC2626] font-bold block">
              (;-;) 404 · Unbalanced Entry
            </span>
            <h1 className="font-display font-medium text-2xl sm:text-3xl text-[#141413]">
              Page Not Found
            </h1>
            <p className="font-sans text-sm text-[#57534E] leading-relaxed">
              The page or ledger entry you are looking for does not exist or has been moved.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/"
              className="btn-indigo inline-flex items-center gap-2 px-6 py-3 text-sm font-sans font-medium rounded-full shadow-md hover:scale-105 transition-transform"
            >
              <span>Return to River Home →</span>
            </Link>
          </div>
        </div>

        {/* Institutional Subtext */}
        <p className="font-mono text-[11px] text-[#8C8885]">
          River by Asynarch · Autonomous Double-Entry Ledger
        </p>

      </div>
    </main>
  );
}
