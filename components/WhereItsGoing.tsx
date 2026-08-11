import React from "react";

export default function WhereItsGoing() {
  return (
    <section id="where-its-going" className="section framer-reveal" style={{ borderBottom: "1px solid var(--border-color)", padding: "120px 0" }}>
      <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
        <h2 className="reveal-item" style={{ "--delay": "0ms", fontSize: "clamp(2.2rem, 5.2vw, 3.4rem)", fontWeight: 500, marginBottom: "24px" } as React.CSSProperties}>
          The horizon
        </h2>
        <p className="reveal-item" style={{ "--delay": "120ms", fontSize: "1.25rem", lineHeight: "1.7", color: "var(--text-muted)", fontWeight: 400, margin: "0 auto" } as React.CSSProperties}>
          This is the first page. River's next job is to know your business the way you do.
        </p>
      </div>
    </section>
  );
}
