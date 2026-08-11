import React from "react";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="hero framer-reveal">
      <div className="container">
        <h1 className="reveal-item" style={{ "--delay": "0ms", marginBottom: "28px", maxWidth: "1080px", margin: "0 auto 28px", fontSize: "clamp(2.6rem, 5.6vw, 4.2rem)" } as React.CSSProperties}>
          The cash book that writes itself
        </h1>
        <p className="subtext reveal-item" style={{ "--delay": "80ms", fontSize: "1.28rem", maxWidth: "740px", margin: "0 auto 36px" } as React.CSSProperties}>
          Upload your statement. See every payment recorded, in minutes.
        </p>

        <div className="reveal-item" style={{ "--delay": "160ms", marginBottom: "48px", display: "flex", justifyContent: "center" } as React.CSSProperties}>
          <button
            onClick={onOpenModal}
            className="btn btn-primary"
            style={{
              padding: "16px 36px",
              fontSize: "1.05rem",
              letterSpacing: "0.03em",
              cursor: "pointer",
            }}
          >
            <span>Upload your statement</span>
            <span className="btn-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M9 7h8v8" />
              </svg>
            </span>
          </button>
        </div>

        <a href="#it-just-happens" className="reveal-item" style={{
          "--delay": "240ms",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          color: "var(--text-muted)",
          textDecoration: "none",
          fontSize: "0.9rem",
          fontWeight: 500,
          transition: "color 0.2s"
        } as React.CSSProperties}>
          <span>See how it works</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </a>
      </div>
    </section>
  );
}
