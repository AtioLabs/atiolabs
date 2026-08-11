import React from "react";

export default function WhyThisMatters() {
  return (
    <section id="why-this-matters" className="section framer-reveal" style={{ borderBottom: "1px solid var(--border-color)" }}>
      <div className="container" style={{ maxWidth: "860px", textAlign: "center" }}>
        <h2 className="reveal-item" style={{ "--delay": "0ms", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 500, marginBottom: "24px" } as React.CSSProperties}>
          Why this matters
        </h2>
        <p className="reveal-item" style={{ "--delay": "160ms", fontSize: "1.22rem", lineHeight: "1.7", color: "var(--text-muted)", margin: "0 auto" } as React.CSSProperties}>
          A business isn't a set of accounts. It's the people you do business with: the ones who pay you, and the ones you pay. River keeps your books that way, because that's how you already think about your business.
        </p>
      </div>
    </section>
  );
}
