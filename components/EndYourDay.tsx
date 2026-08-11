import React from "react";

export default function EndYourDay() {
  return (
    <section id="every-evening" className="section framer-reveal" style={{ borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
      <div className="container" style={{ maxWidth: "860px", textAlign: "center" }}>
        <h2 className="reveal-item" style={{ "--delay": "0ms", fontSize: "clamp(2.2rem, 5.2vw, 3.4rem)", fontWeight: 500, marginBottom: "28px" } as React.CSSProperties}>
          Every evening
        </h2>
        <p className="reveal-item" style={{ "--delay": "120ms", fontSize: "1.24rem", lineHeight: "1.7", color: "var(--text-muted)", margin: "0 auto" } as React.CSSProperties}>
          Upload today's statement before you go home. In a few minutes, every payment from today is recorded and ready.
        </p>
      </div>
    </section>
  );
}
