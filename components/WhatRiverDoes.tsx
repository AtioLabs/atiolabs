import React from "react";

export default function WhatRiverDoes() {
  return (
    <section id="what-river-does" className="section framer-reveal" style={{ borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
      <div className="container" style={{ maxWidth: "860px", textAlign: "center" }}>
        <h2 className="reveal-item" style={{ "--delay": "0ms", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 500, marginBottom: "28px" } as React.CSSProperties}>
          What River does
        </h2>
        <p className="reveal-item" style={{ "--delay": "160ms", fontSize: "1.22rem", lineHeight: "1.7", color: "var(--text-muted)", margin: "0 auto" } as React.CSSProperties}>
          Every business already keeps one record that's always accurate: its bank statement. River turns that statement into a finished cash book the moment you upload it. Every payment in, every payment out, recorded and organized by who paid you and who you paid. No software to configure. No entries to type. No accounts to set up.
        </p>
      </div>
    </section>
  );
}
