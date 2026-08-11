import React from "react";

export default function ItLearnsOnce() {
  return (
    <section id="it-learns-once" className="section framer-reveal" style={{ borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
      <div className="container" style={{ maxWidth: "860px", textAlign: "center" }}>
        <h2 className="reveal-item" style={{ "--delay": "0ms", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 500, marginBottom: "24px" } as React.CSSProperties}>
          It learns, once
        </h2>
        <p className="reveal-item" style={{ "--delay": "160ms", fontSize: "1.22rem", lineHeight: "1.7", color: "var(--text-muted)", margin: "0 auto" } as React.CSSProperties}>
          Most payments, River understands right away. When one isn't obvious, it simply asks: who is this payment with? Tell it once, and River remembers. Every future payment with that person or business is recorded the same way: you're never asked again.
        </p>
      </div>
    </section>
  );
}
