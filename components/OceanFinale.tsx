import React from "react";

export default function OceanFinale() {
  return (
    <section id="finale" className="ocean-finale framer-reveal">
      <div className="container finale-content">
        <h2 className="reveal-item" style={{ "--delay": "0ms", fontSize: "clamp(2.6rem, 6.5vw, 4.8rem)", lineHeight: "1.15", fontWeight: 500 } as React.CSSProperties}>
          Ready to see your cash book?
        </h2>
        <p className="reveal-item" style={{ "--delay": "100ms", marginTop: "16px", marginBottom: "40px", fontSize: "1.24rem" } as React.CSSProperties}>
          Drop your bank file and see your books updated automatically.
        </p>

        <div className="reveal-item" style={{ "--delay": "200ms", display: "flex", justifyContent: "center" } as React.CSSProperties}>
          <a
            href="https://river.asynarch.com/"
            className="btn btn-primary"
            style={{
              padding: "16px 36px",
              fontSize: "1.05rem",
              letterSpacing: "0.03em",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <span>Upload your statement</span>
            <span className="btn-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M9 7h8v8" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
