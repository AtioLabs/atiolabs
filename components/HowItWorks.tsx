"use client";

import React, { useState } from "react";

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"statement" | "ledger">("statement");

  return (
    <section id="how-it-works" className="how-section section framer-reveal">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="label reveal-item" style={{ "--delay": "0ms" } as React.CSSProperties}>
            Two Modes of Operation
          </span>
          <h2 className="reveal-item" style={{ "--delay": "80ms", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 500, marginTop: "12px" } as React.CSSProperties}>
            Two ways River works for you
          </h2>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="reveal-item" style={{ "--delay": "120ms", display: "flex", justifyContent: "center", marginBottom: "36px" } as React.CSSProperties}>
          <div className="mode-toggle-container">
            <button
              type="button"
              className={`mode-toggle-btn ${activeTab === "statement" ? "active" : ""}`}
              onClick={() => setActiveTab("statement")}
            >
              Mode 1: Bank Statement Only
            </button>
            <button
              type="button"
              className={`mode-toggle-btn ${activeTab === "ledger" ? "active" : ""}`}
              onClick={() => setActiveTab("ledger")}
            >
              Mode 2: Bank Statement + Bank Ledger
            </button>
          </div>
        </div>

        {/* Content Box for Active Mode */}
        <div className="reveal-item" style={{ "--delay": "160ms", maxWidth: "860px", margin: "0 auto 64px" } as React.CSSProperties}>
          {activeTab === "statement" ? (
            <div className="glass-panel mode-card">
              <div className="mode-badge">Your Direct Running Book</div>
              <h3 className="mode-title">Automatic Record-Keeping from Day One</h3>
              <p className="mode-desc">
                Upload your bank statement, and River records every line automatically without manual entry. River becomes your primary running book, built directly from your bank statement so your records always stay in perfect alignment with your bank. Month-end reconciliation happens continuously, keeping your finances harmonized every day.
              </p>
            </div>
          ) : (
            <div className="glass-panel mode-card">
              <div className="mode-badge">Automated Matching & BRS</div>
              <h3 className="mode-title">Complete Dual-Ledger Alignment</h3>
              <p className="mode-desc">
                Upload both your bank statement and your bank ledger, and River matches every transaction automatically. Anything unrecorded is quietly identified and added to your ledger with complete clarity. River surfaces information plainly, giving you a clean, audit-ready Bank Reconciliation Statement (BRS) ready to hand to your CA.
              </p>
            </div>
          )}
        </div>

        {/* Three Step Process */}
        <h3 className="reveal-item" style={{ "--delay": "200ms", textAlign: "center", fontSize: "1.5rem", fontWeight: 500, marginBottom: "40px" } as React.CSSProperties}>
          Three simple steps to financial harmony
        </h3>
        <div className="how-steps">
          <div className="how-step reveal-item" style={{ "--delay": "240ms" } as React.CSSProperties}>
            <div className="how-step-number">01</div>
            <h3>Upload your records</h3>
            <p>Statements, ledgers, or spreadsheets, in whichever format you have.</p>
            <div className="how-connector" />
          </div>
          <div className="how-step reveal-item" style={{ "--delay": "280ms" } as React.CSSProperties}>
            <div className="how-step-number">02</div>
            <h3>River reads and matches</h3>
            <p>It lines up transactions continuously and prepares your exact reconciliation.</p>
            <div className="how-connector" />
          </div>
          <div className="how-step reveal-item" style={{ "--delay": "320ms" } as React.CSSProperties}>
            <div className="how-step-number">03</div>
            <h3>Review with total clarity</h3>
            <p>River highlights key insights; you confirm and maintain full control.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

