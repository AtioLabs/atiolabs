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
            <h3>Upload your statement</h3>
            <p>Upload your bank statement in any format.</p>
            <div className="how-connector" />
          </div>
          <div className="how-step reveal-item" style={{ "--delay": "240ms" } as React.CSSProperties}>
            <div className="how-step-number">02</div>
            <h3>River writes down each payment</h3>
            <p>Who it's with, in plain words.</p>
            <div className="how-connector" />
          </div>
          <div className="how-step reveal-item" style={{ "--delay": "320ms" } as React.CSSProperties}>
            <div className="how-step-number">03</div>
            <h3>Your cash book is ready</h3>
            <p>In minutes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
