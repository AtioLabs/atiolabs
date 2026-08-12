import React from "react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-section section framer-reveal">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 className="reveal-item" style={{ "--delay": "0ms", fontSize: "clamp(2.2rem, 5.2vw, 3.4rem)", fontWeight: 500 } as React.CSSProperties}>
            How it works
          </h2>
        </div>

        <div className="how-steps">
          <div className="how-step reveal-item" style={{ "--delay": "160ms" } as React.CSSProperties}>
            <div className="how-step-number">01</div>
            <h3>Drop your bank file</h3>
            <p>Excel or CSV from any bank.</p>
            <div className="how-connector" />
          </div>
          <div className="how-step reveal-item" style={{ "--delay": "240ms" } as React.CSSProperties}>
            <div className="how-step-number">02</div>
            <h3>River identifies each counterparty</h3>
            <p>Translates raw bank lines into plain-language people and businesses.</p>
            <div className="how-connector" />
          </div>
          <div className="how-step reveal-item" style={{ "--delay": "320ms" } as React.CSSProperties}>
            <div className="how-step-number">03</div>
            <h3>Your running ledger updates</h3>
            <p>Your cash book stays in exact balance with your bank.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
