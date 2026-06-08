import WaitlistForm from "./WaitlistForm";

interface OceanFinaleProps {
  isJoined: boolean;
  onJoin: () => void;
}

export default function OceanFinale({ isJoined, onJoin }: OceanFinaleProps) {
  return (
    <section id="finale" className="ocean-finale">
      <div className="finale-glow" />
      <div className="container finale-content framer-reveal">
        <h2>Let the river flow.</h2>
        <p>
          Stop fighting with your accounting software. Let River handle your books and
          reconciliation, so you can focus on building the business.
        </p>

        <div style={{ marginBottom: "40px" }}>
          <WaitlistForm variant="finale" isJoined={isJoined} onJoin={onJoin} />
        </div>
      </div>
    </section>
  );
}
