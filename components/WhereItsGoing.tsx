import React from "react";

export default function WhereItsGoing() {
  return (
    <section id="where-its-going" className="section framer-reveal" style={{ borderBottom: "1px solid var(--border-color)", padding: "120px 0" }}>
      <div className="container" style={{ maxWidth: "860px", textAlign: "center" }}>
        <h2 className="reveal-item" style={{ "--delay": "0ms", fontSize: "clamp(2.2rem, 5.2vw, 3.4rem)", fontWeight: 500, marginBottom: "24px" } as React.CSSProperties}>
          The horizon
        </h2>
        <p className="reveal-item" style={{ "--delay": "120ms", fontSize: "1.25rem", lineHeight: "1.7", color: "var(--text-muted)", fontWeight: 400, margin: "0 auto" } as React.CSSProperties}>
          The cash book is the first thing River takes off your plate. It won't be the last. We're building toward a system that runs your books entirely — no accounting team standing between your business and your numbers, no software you have to operate. This is the starting place.
        </p>
      </div>
    </section>
  );
}
