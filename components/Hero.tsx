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
        <span className="label framer-reveal">Atio Labs presents</span>
        <h1 className="framer-reveal delay-1">
          The accountant and the accounting software, fused into one.
        </h1>
        <p className="subtext framer-reveal delay-2">
          Drop your bank statements and books in. Get a perfect Bank Reconciliation Statement and updated ledgers out. No dashboards. Just answers.
        </p>

        <div className="framer-reveal delay-3" style={{ marginBottom: "50px" }}>
          <WaitlistForm variant="hero" isJoined={isJoined} onJoin={onJoin} />
        </div>

        <HeroSimulator />
      </div>
    </section>
  );
}
