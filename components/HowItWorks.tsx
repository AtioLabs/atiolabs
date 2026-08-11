import React from "react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-section section framer-reveal">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 className="reveal-item" style={{ "--delay": "0ms", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 500 } as React.CSSProperties}>
            How it works
          </h2>
        </div>

        <div className="how-steps">
          <div className="how-step reveal-item" style={{ "--delay": "160ms" } as React.CSSProperties}>
            <div className="how-step-number">01</div>
            <h3>Upload your bank statement</h3>
            <p>Any bank, any format.</p>
            <div className="how-connector" />
          </div>
          <div className="how-step reveal-item" style={{ "--delay": "240ms" } as React.CSSProperties}>
            <div className="how-step-number">02</div>
            <h3>River reads every payment</h3>
            <p>It figures out who it's with, and records it in plain language.</p>
            <div className="how-connector" />
          </div>
          <div className="how-step reveal-item" style={{ "--delay": "320ms" } as React.CSSProperties}>
            <div className="how-step-number">03</div>
            <h3>Your cash book is ready</h3>
            <p>Already in balance with your bank, because it came from your bank.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
