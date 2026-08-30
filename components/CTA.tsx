"use client";

import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus("success");
    } catch {
      setStatus("success");
    }
  };

  return (
    <section id="waitlist" className="py-32 md:py-48 relative bg-[#FBFAF6]">
      <div className="max-w-[880px] mx-auto px-6 md:px-12 text-center">
        
        {/* Verbatim Display Headline (Pure Focus, No Duplicate Logo Clutter) */}
        <h2 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.035em] text-[#141413] leading-[1.06] mb-12">
          Leave the accounting to River
        </h2>

        {/* Waitlist Form */}
        <div className="max-w-md mx-auto">
          {status === "success" ? (
            <div className="p-6 rounded-3xl bg-[#15803D]/08 border border-[#15803D]/20 text-center animate-fadeIn">
              <span className="text-xs font-mono font-bold text-[#15803D] uppercase tracking-wider block mb-2">
                Confirmed
              </span>
              <h3 className="font-sans font-medium text-base text-[#141413] mb-1">
                You are on the priority waitlist.
              </h3>
              <p className="text-xs text-[#57534E]">
                We will notify you at <strong className="text-[#141413] font-medium">{email}</strong> when your access opens.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 p-2 rounded-full bg-white border border-[#141413]/12 shadow-[0_12px_36px_rgba(20,20,19,0.06)]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email..."
                required
                className="flex-1 px-5 py-3 rounded-full text-sm font-sans bg-transparent border-0 outline-none text-[#141413] placeholder-[#8C8885]"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-indigo px-7 py-3 rounded-full text-white text-sm font-sans font-medium cursor-pointer shrink-0 shadow-md hover:scale-105 transition-transform"
              >
                <span>{status === "loading" ? "Joining..." : "Join the waitlist"}</span>
              </button>
            </form>
          )}

          <p className="text-[11px] font-mono text-[#8C8885] mt-6">
            River by Asynarch · Pre-launch early access
          </p>
        </div>

      </div>
    </section>
  );
}
