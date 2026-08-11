import React from "react";

export default function ItLearnsOnce() {
  return (
    <section id="it-learns-once" className="section framer-reveal" style={{ borderBottom: "1px solid var(--border-color)" }}>
      <div className="container" style={{ maxWidth: "860px", textAlign: "center" }}>
        <h2 className="reveal-item" style={{ "--delay": "0ms", fontSize: "clamp(2.2rem, 5.2vw, 3.4rem)", fontWeight: 500, marginBottom: "28px" } as React.CSSProperties}>
          It learns, once
        </h2>
        <p className="reveal-item" style={{ "--delay": "120ms", fontSize: "1.24rem", lineHeight: "1.7", color: "var(--text-muted)", margin: "0 auto" } as React.CSSProperties}>
          Most payments, River understands right away. When one isn't obvious, it simply asks who the payment is with. Tell it once. River remembers, and never asks again.
        </p>
      </div>
    </section>
  );
}
