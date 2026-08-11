import React from "react";
import HeroSimulator from "./HeroSimulator";

export default function WhereRiverStarts() {
  return (
    <section id="where-starts" className="section framer-reveal">
      <div className="container" style={{ textAlign: "center" }}>
        <p className="reveal-item" style={{ "--delay": "0ms", maxWidth: "640px", margin: "0 auto 36px", fontSize: "1.18rem", fontWeight: 500, color: "var(--text-primary)" } as React.CSSProperties}>
          See how River converts a bank statement into an organized cash book in seconds
        </p>
        
        <div className="simulator-reveal" style={{ "--delay": "240ms", maxWidth: "960px", margin: "0 auto" } as React.CSSProperties}>
          <HeroSimulator />
        </div>
        <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", opacity: 0.55, marginTop: "20px", fontStyle: "italic", letterSpacing: "0.01em" }}>
          This is a conceptual simulation for demonstration purposes and does not represent the final product experience.
        </p>
      </div>
    </section>
  );
}
