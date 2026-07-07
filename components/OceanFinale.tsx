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
          River is opening soon. Be first to try it
        </p>

        <div className="reveal-item" style={{ "--delay": "200ms" } as React.CSSProperties}>
          <WaitlistForm variant="finale" isJoined={isJoined} onJoin={onJoin} />
        </div>
      </div>
    </section>
  );
}
