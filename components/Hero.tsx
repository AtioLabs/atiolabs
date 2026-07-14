import WaitlistForm from "./WaitlistForm";

interface HeroProps {
  isJoined: boolean;
  onJoin: () => void;
}

export default function Hero({ isJoined, onJoin }: HeroProps) {
  return (
    <section className="hero framer-reveal">
      <div className="container">
        <h1 className="reveal-item" style={{ "--delay": "0ms", marginBottom: "28px", maxWidth: "1080px", margin: "0 auto 28px", fontSize: "clamp(2.4rem, 5.2vw, 3.8rem)" } as React.CSSProperties}>
          The accountant and the accounting software,
          <br className="desktop-br" />
          fused into one
        </h1>
        <p className="subtext reveal-item" style={{ "--delay": "80ms", fontSize: "1.28rem", maxWidth: "700px", margin: "0 auto 36px" } as React.CSSProperties}>
          River reads your bank statements and ledgers, handles the reconciliation, and flags only what needs your eye, so you can run the business instead of the bank ledger
        </p>

        <div className="reveal-item" style={{ "--delay": "160ms", marginBottom: "48px" } as React.CSSProperties}>
          <WaitlistForm variant="hero" isJoined={isJoined} onJoin={onJoin} />
        </div>

        <a href="#how-it-works" className="reveal-item" style={{
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

