import React from "react";

export default function YouStayInControl() {
  return (
    <section id="control" className="section framer-reveal" style={{ borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
      <div className="container control-grid">
        <div className="reveal-item" style={{ "--delay": "0ms" } as React.CSSProperties}>
          <span className="label">You stay in control</span>
          <h2 style={{ marginTop: "12px", lineHeight: "1.2" }}>
            You're the final signer
            <br />
            Always
          </h2>
        </div>
        <div className="control-list reveal-item" style={{ "--delay": "100ms" } as React.CSSProperties}>
          <div className="control-item">
            <h3>Matches what it's sure about</h3>
            <p>No guessing, no silent errors. Only perfect matches go through automatically.</p>
          </div>
          <div className="control-item">
            <h3>Flags every exception</h3>
            <p>Anything uncertain comes straight to you. You maintain complete visibility.</p>
          </div>
          <div className="control-item">
            <h3>You stay the signer</h3>
            <p>River drafts the reconciliation; you approve the final output. Always in full control.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
