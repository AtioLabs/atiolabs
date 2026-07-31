import React from "react";

export default function WhereItsGoing() {
  return (
    <section id="where-its-going" className="stone-section framer-reveal">
      <div className="container going-grid">
        <div className="going-headline">
          <span className="label reveal-item" style={{ "--delay": "0ms", background: "rgba(255, 255, 255, 0.4)", border: "1px solid rgba(31, 31, 27, 0.05)" } as React.CSSProperties}>
            Where it's going
          </span>
          <h2 className="reveal-item" style={{ "--delay": "80ms", marginTop: "12px", fontSize: "clamp(2rem, 4.5vw, 3.2rem)", lineHeight: "1.2" } as React.CSSProperties}>
            Today, River reconciles your books.
            <br />
            <span style={{ color: "var(--brand-indigo)" }}>One day, River will be your accountant.</span>
          </h2>
        </div>

        <div className="going-divider" />

        <div className="going-paragraphs reveal-item" style={{ "--delay": "160ms" } as React.CSSProperties}>
          <p>
            We built River to bring complete automated harmony to every financial workflow: from statement recording and ledger matching to proactive tracking, conversational insights, and continuous financial alignment.
          </p>
          <p>
            Built so running a business feels as natural as building one.
          </p>
        </div>
      </div>
    </section>
  );
}
