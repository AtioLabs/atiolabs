import WaitlistForm from "./WaitlistForm";

interface OceanFinaleProps {
  isJoined: boolean;
  onJoin: () => void;
}

export default function OceanFinale({ isJoined, onJoin }: OceanFinaleProps) {
  return (
    <section id="finale" className="ocean-finale framer-reveal">
      <div className="container finale-content">
        <h2 className="reveal-item" style={{ "--delay": "0ms", fontSize: "clamp(2.6rem, 6.5vw, 4.8rem)", lineHeight: "1.15", fontWeight: 500 } as React.CSSProperties}>
          Get your accounting off your <span style={{ color: "var(--brand-indigo)", borderBottom: "3px solid rgba(34, 28, 98, 0.3)", paddingBottom: "2px" }}>plate</span>
        </h2>
        <p className="reveal-item" style={{ "--delay": "100ms", marginTop: "16px", marginBottom: "40px" } as React.CSSProperties}>
          Start simplifying your bank reconciliation today. Set up in minutes.
        </p>

        <div className="reveal-item" style={{ "--delay": "200ms", display: "flex", justifyContent: "center" } as React.CSSProperties}>
          <a
            href="https://river.asynarch.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              padding: "16px 36px",
              fontSize: "1.05rem",
              letterSpacing: "0.03em"
            }}
          >
            <span>Try River Today</span>
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
