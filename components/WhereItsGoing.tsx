import React from "react";

export default function WhereItsGoing() {
  return (
    <section id="where-its-going" className="stone-section framer-reveal">
      <div className="container going-grid">
        <div className="going-headline">
          <span className="label reveal-item" style={{ "--delay": "0ms", background: "rgba(255, 255, 255, 0.4)", border: "1px solid rgba(31, 31, 27, 0.05)" } as React.CSSProperties}>
            Where it's going
          </span>
          <h2 className="reveal-item" style={{ "--delay": "80ms", marginTop: "12px", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", lineHeight: "1.2" } as React.CSSProperties}>
            Reconciliation is where River starts
            <br />
            <span style={{ color: "var(--brand-indigo)" }}>Not where it stops</span>
          </h2>
        </div>

        <div className="going-divider" />

        <div className="going-paragraphs reveal-item" style={{ "--delay": "160ms" } as React.CSSProperties}>
          <p>
            Every business drowns in the same back-office busywork of matching, reconciling, chasing, and closing. We're building River to handle all of it, so running a business feels less like paperwork.
          </p>
          <p>
            We started with reconciliation because it's the part nobody should be doing by hand.
          </p>
        </div>
      </div>
    </section>
  );
}
