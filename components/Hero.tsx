import WaitlistForm from "./WaitlistForm";
import HeroSimulator from "./HeroSimulator";

interface HeroProps {
  isJoined: boolean;
  onJoin: () => void;
}

export default function Hero({ isJoined, onJoin }: HeroProps) {
  return (
    <section className="hero section">
      <div className="container">
        <span className="label framer-reveal">FOR ACCOUNTANTS & FINANCE TEAMS</span>
        <h1 className="framer-reveal delay-1">
          Get your last three days of the month back
        </h1>
        <p className="framer-reveal delay-2 brand-blue" style={{ fontSize: "1.28rem", fontWeight: 500, margin: "20px auto 16px" }}>
          The accountant and the accounting software, fused into one.
        </p>
        <p className="subtext framer-reveal delay-2" style={{ marginTop: "0", fontSize: "1.1rem" }}>
          River ingests your bank statements and ledgers, auto-matches every transaction it's sure about, and flags only the exceptions that need you. A perfect reconciliation statement out the other side — in minutes, not days.
        </p>

        <div className="framer-reveal delay-3" style={{ marginBottom: "50px" }}>
          <WaitlistForm variant="hero" isJoined={isJoined} onJoin={onJoin} />
        </div>

        <HeroSimulator />
      </div>
    </section>
  );
}
