export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-section section framer-reveal">
      <div className="container">
        <h2 className="reveal-item" style={{ "--delay": "0ms", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 500, marginBottom: "72px" } as React.CSSProperties}>
          Three steps. That's the whole thing
        </h2>
        <div className="how-steps">
          <div className="how-step reveal-item" style={{ "--delay": "100ms" } as React.CSSProperties}>
            <div className="how-step-number">01</div>
            <h3>Drop in your records</h3>
            <p>Statements, ledgers, spreadsheets, however they come.</p>
            <div className="how-connector" />
          </div>
          <div className="how-step reveal-item" style={{ "--delay": "180ms" } as React.CSSProperties}>
            <div className="how-step-number">02</div>
            <h3>River reads and matches</h3>
            <p>It lines up every transaction against your bank ledger and drafts the reconciliation.</p>
            <div className="how-connector" />
          </div>
          <div className="how-step reveal-item" style={{ "--delay": "260ms" } as React.CSSProperties}>
            <div className="how-step-number">03</div>
            <h3>You review what needs a human eye</h3>
            <p>River flags the exceptions; you approve.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

