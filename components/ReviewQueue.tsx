"use client";

import React, { useState } from "react";

export default function ReviewQueue() {
  const [isResolved, setIsResolved] = useState(false);

  return (
    <section id="review-queue" className="queue-section section">
      <div className="container queue-grid">
        <div className="queue-visual-wrapper framer-reveal">
          <div className="queue-card">
            <div className="queue-card-header">
              <span className="queue-card-title">Smart Review Queue</span>
              <span className="queue-count">{isResolved ? "0 Pending Items" : "1 Pending Item"}</span>
            </div>
            <div className="queue-item-discrepancy">
              <div className="discrepancy-meta">
                <span>Discrepancy #1</span>
                <span>June 15, 2026</span>
              </div>
              <div className="discrepancy-details">
                <div className="disc-source-item">
                  <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="22" x2="21" y2="22" />
                    <line x1="6" y1="18" x2="6" y2="11" />
                    <line x1="10" y1="18" x2="10" y2="11" />
                    <line x1="14" y1="18" x2="14" y2="11" />
                    <line x1="18" y1="18" x2="18" y2="11" />
                    <polygon points="12 2 2 7 22 7" />
                  </svg>
                  <div>
                    <div className="disc-source-name">HDFC Bank Statement</div>
                    <div className="disc-tx-desc font-mono">BILL.COM *GITHUB</div>
                  </div>
                  <span className="disc-amount font-mono">₹11,800.00</span>
                </div>
                <div className="disc-arrow">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: "12px", height: "12px", stroke: "var(--ocean-muted)" }}
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                </div>
                <div className="disc-source-item unmapped">
                  <svg
                    className="icon"
                    style={{ stroke: "#dc2626" }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="3" y1="15" x2="21" y2="15" />
                    <line x1="9" y1="3" x2="9" y2="21" />
                    <line x1="15" y1="3" x2="15" y2="21" />
                  </svg>
                  <div>
                    <div className="disc-source-name">General Ledger</div>
                    <div className="disc-tx-desc" style={{ color: "#dc2626", fontWeight: 500 }}>
                      Unmapped Transaction
                    </div>
                  </div>
                  <span className="disc-amount warning font-mono">Missing Entry</span>
                </div>
              </div>

              {!isResolved ? (
                <div className="queue-interaction" id="queue-box">
                  <div className="queue-interaction-question">
                    <strong>River asks:</strong> Is this charge a Software Subscription expense?
                  </div>
                  <div className="queue-checkbox-container">
                    <input type="checkbox" id="apply-rule-forever" defaultChecked />
                    <label htmlFor="apply-rule-forever">
                      Remember this business logic and auto-map for future reconciliations
                    </label>
                  </div>
                  <button
                    className="btn btn-primary btn-sm"
                    id="btn-resolve-queue"
                    style={{ alignSelf: "flex-start", marginTop: "4px" }}
                    onClick={() => setIsResolved(true)}
                  >
                    Save Business Logic
                  </button>
                </div>
              ) : (
                <div className="queue-success-state" id="queue-success">
                  <div className="success-icon">✓</div>
                  <div className="success-text">
                    <strong>Logic Saved!</strong>
                    <br />
                    Applied rule: <code>BILL.COM *GITHUB</code> → <code>Software Expenses</code>.
                    <br />
                    This logic will automatically reconcile all matching future transactions.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="queue-content framer-reveal delay-1">
          <span className="label">Smart Review Queue</span>
          <h2 style={{ marginTop: "12px", marginBottom: "24px" }}>
            Teach it once.
            <br />
            It remembers forever.
          </h2>
          <p>
            When River finds a mismatch, it doesn’t just flag it. It asks you a simple question — and remembers your answer for every future reconciliation.
          </p>
          <p>
            No more repeating the same fixes every month.
          </p>
        </div>
      </div>
    </section>
  );
}
