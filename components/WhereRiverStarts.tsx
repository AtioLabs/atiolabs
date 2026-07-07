import React from "react";
import HeroSimulator from "./HeroSimulator";

export default function WhereRiverStarts() {
  return (
    <section id="where-starts" className="section framer-reveal">
      <div className="container" style={{ textAlign: "center" }}>
        <span className="label reveal-item" style={{ "--delay": "0ms" } as React.CSSProperties}>
          Where River Starts
        </span>
        <h2 className="reveal-item" style={{ "--delay": "80ms", maxWidth: "700px", margin: "12px auto 20px", fontSize: "clamp(2rem, 5vw, 3rem)" } as React.CSSProperties}>
          First up: your bank reconciliation
        </h2>
        <p className="reveal-item" style={{ "--delay": "160ms", maxWidth: "640px", margin: "0 auto 48px", fontSize: "1.1rem" } as React.CSSProperties}>
          River's first job is the one nobody wants to do by hand. Drop in your statements and books, get a clean reconciliation back, with every exception flagged.
        </p>
        
        <div className="simulator-reveal" style={{ "--delay": "240ms", maxWidth: "960px", margin: "0 auto" } as React.CSSProperties}>
          <HeroSimulator />
        </div>
      </div>
    </section>
  );
}
