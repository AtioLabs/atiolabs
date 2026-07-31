import React from "react";

export default function YouStayInControl() {
  const pillars = [
    "Talk to your books in plain English",
    "Transparent honesty & zero guesswork",
    "Proactive forward-looking alerts",
    "Reclaiming your most valuable hours",
  ];

  return (
    <section id="control" className="section framer-reveal" style={{ borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", padding: "100px 0" }}>
      <div className="container control-grid" style={{ gridTemplateColumns: "1fr 1.3fr", alignItems: "center" }}>
        <div className="reveal-item" style={{ "--delay": "0ms" } as React.CSSProperties}>
          <span className="label">Total Financial Control</span>
          <h2 style={{ marginTop: "16px", lineHeight: "1.2", fontSize: "clamp(2.2rem, 4.8vw, 3.4rem)", fontWeight: 500 }}>
            Built for clarity,
            <br />
            honesty, and peace of mind
          </h2>
        </div>

        <div className="control-pillars-grid reveal-item" style={{ "--delay": "100ms" } as React.CSSProperties}>
          {pillars.map((title, idx) => (
            <div key={idx} className="pillar-tile">
              <span className="pillar-num">{`0${idx + 1}`}</span>
              <h3 className="pillar-title">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
