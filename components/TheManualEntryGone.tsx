import React from "react";

export default function TheManualEntryGone() {
  return (
    <section id="it-just-happens" className="section framer-reveal" style={{ borderBottom: "1px solid var(--border-color)" }}>
      <div className="container" style={{ maxWidth: "860px", textAlign: "center" }}>
        <h2 className="reveal-item" style={{ "--delay": "0ms", fontSize: "clamp(2.2rem, 5.2vw, 3.4rem)", fontWeight: 500, marginBottom: "28px" } as React.CSSProperties}>
          It just happens
        </h2>
        <p className="reveal-item" style={{ "--delay": "120ms", fontSize: "1.24rem", lineHeight: "1.7", color: "var(--text-muted)", margin: "0 auto" } as React.CSSProperties}>
          Traditional software forces someone to open an entry, match a Chart of Accounts, pick a contact, and click save—one payment at a time. River eliminates that manual loop entirely. Most payments, it understands right away. When one isn't obvious, it simply asks who the payment is with. Tell it once. River remembers, and never asks again.
        </p>
      </div>
    </section>
  );
}
