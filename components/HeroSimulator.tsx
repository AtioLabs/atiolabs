"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ChatMessage {
  id: string;
  sender: "river" | "user";
  text: string;
}

export default function HeroSimulator() {
  const [scenario, setScenario] = useState<"github" | "adobe">("github");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [xlsLoaded, setXlsLoaded] = useState(false);
  const [brsVisible, setBrsVisible] = useState(false);
  const [brsLedgerVal, setBrsLedgerVal] = useState("₹14,13,200.00");
  const [brsLedgerClass, setBrsLedgerClass] = useState("brs-value");
  const [brsDiffVal, setBrsDiffVal] = useState("₹11,800.00");
  const [brsDiffClass, setBrsDiffClass] = useState("brs-value highlight-warning");
  const [brsStatusText, setBrsStatusText] = useState("Pending Resolution");
  const [brsStatusClass, setBrsStatusClass] = useState("brs-badge warning");
  const [showActions, setShowActions] = useState(false);

  const threadRef = useRef<HTMLDivElement>(null);
  const simTimeoutIds = useRef<NodeJS.Timeout[]>([]);
  const reconcilerRef = useRef<HTMLDivElement>(null);

  const clearSimTimeouts = () => {
    simTimeoutIds.current.forEach((id) => clearTimeout(id));
    simTimeoutIds.current = [];
  };

  const addMsg = (sender: "river" | "user", text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        sender,
        text,
      },
    ]);
  };

  const runSimulator = (targetScenario = scenario) => {
    clearSimTimeouts();

    // Reset states dynamically based on selected scenario
    setMessages([]);
    setPdfLoaded(false);
    setXlsLoaded(false);
    setBrsVisible(false);
    setShowActions(false);

    if (targetScenario === "github") {
      setBrsLedgerVal("₹14,13,200.00");
      setBrsLedgerClass("brs-value");
      setBrsDiffVal("₹11,800.00");
      setBrsDiffClass("brs-value highlight-warning");
    } else {
      setBrsLedgerVal("₹14,25,000.00");
      setBrsLedgerClass("brs-value");
      setBrsDiffVal("₹24,500.00");
      setBrsDiffClass("brs-value highlight-warning");
    }
    setBrsStatusText("Pending Resolution");
    setBrsStatusClass("brs-badge warning");

    // Step 1: Files load + reading message
    const t1 = setTimeout(() => {
      setPdfLoaded(true);
    }, 800);
    simTimeoutIds.current.push(t1);

    const t2 = setTimeout(() => {
      setXlsLoaded(true);
      setBrsVisible(true);
      addMsg(
        "river",
        `Reading your bank statement and ledger...`
      );
    }, 1500);
    simTimeoutIds.current.push(t2);

    // Step 2: Discrepancy found + action prompt
    const t3 = setTimeout(() => {
      if (targetScenario === "github") {
        addMsg(
          "river",
          '<strong><span style="display:inline-flex; align-items:center; gap:4px; color:#d97706;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px; height:14px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> 1 discrepancy found:</span></strong><br>₹11,800 charge from <code>BILL.COM *GITHUB</code>. No ledger entry. Categorize as Software Expense?'
        );
      } else {
        addMsg(
          "river",
          '<strong><span style="display:inline-flex; align-items:center; gap:4px; color:#d97706;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px; height:14px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> 1 discrepancy found:</span></strong><br>Two identical charges of ₹24,500 from <code>ADOBE SYSTEMS</code> on June 18. Did they charge you twice?'
        );
      }
      setShowActions(true);
    }, 3500);
    simTimeoutIds.current.push(t3);
  };

  const handleResolveSim = (isAffirmative: boolean) => {
    clearSimTimeouts();
    setShowActions(false);

    if (scenario === "github") {
      addMsg("user", isAffirmative ? "Yes, Software Expense" : "Categorize Manually");

      const t1 = setTimeout(() => {
        setBrsLedgerVal("₹14,25,000.00");
        setBrsLedgerClass("brs-value highlight-success");
        setBrsDiffVal("₹0.00");
        setBrsDiffClass("brs-value highlight-success");
        setBrsStatusText("✓ Reconciled");
        setBrsStatusClass("brs-badge success");

        addMsg(
          "river",
          '<strong><span style="color:#059669;">Done. June BRS generated</span></strong>. All accounts matched.'
        );
      }, 1200);
      simTimeoutIds.current.push(t1);
    } else {
      addMsg("user", isAffirmative ? "Flag as Duplicate" : "Approve Both");

      const t1 = setTimeout(() => {
        setBrsLedgerVal("₹14,25,000.00");
        setBrsLedgerClass("brs-value highlight-success");
        setBrsDiffVal("₹0.00");
        setBrsDiffClass("brs-value highlight-success");
        setBrsStatusText("✓ Reconciled");
        setBrsStatusClass("brs-badge success");

        addMsg(
          "river",
          '<strong><span style="color:#059669;">Flagged. Duplicate charge marked.</span></strong> dispute email drafted to Adobe support.'
        );
      }, 1200);
      simTimeoutIds.current.push(t1);
    }
  };

  const selectScenario = (target: "github" | "adobe") => {
    setScenario(target);
    runSimulator(target);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Trigger simulator when it enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runSimulator();
          } else {
            clearSimTimeouts();
          }
        });
      },
      { threshold: 0.05 }
    );

    if (reconcilerRef.current) {
      observer.observe(reconcilerRef.current);
    }

    return () => {
      observer.disconnect();
      clearSimTimeouts();
    };
  }, []);

  // Auto-scroll chat thread to bottom on message updates
  useEffect(() => {
    if (threadRef.current) {
      threadRef.current.scrollTo({
        top: threadRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, showActions]);

  // GSAP 3D Rotation Animation on Scroll (Triggered locally by the section)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1025px)", () => {
        if (reconcilerRef.current) {
          gsap.to(reconcilerRef.current, {
            scale: 1.02,
            rotateX: 0,
            ease: "none",
            scrollTrigger: {
              trigger: "#where-starts",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="hero-perspective-container">
      <div className="simulator-tabs" style={{ display: "flex", gap: "8px", marginBottom: "18px", justifyContent: "center" }}>
        <button 
          onClick={() => selectScenario("github")} 
          className={`tab-btn ${scenario === "github" ? "active" : ""}`}
        >
          Scenario 1: Missing Receipt
        </button>
        <button 
          onClick={() => selectScenario("adobe")} 
          className={`tab-btn ${scenario === "adobe" ? "active" : ""}`}
        >
          Scenario 2: Double Billing
        </button>
      </div>

      <div className="simulator-window" id="reconciler-simulator" ref={reconcilerRef}>
        <div className="simulator-header">
          <div className="mac-dots">
            <div className="mac-dot" />
            <div className="mac-dot" />
            <div className="mac-dot" />
          </div>
          <div className="simulator-title">River Audit Console</div>
          <div className="simulator-status-dot">
            <span className="status-indicator" />
            <span className="status-text">Active</span>
          </div>
        </div>
        <div className="simulator-body">
          {/* Left Panel: Sources and BRS */}
          <div className="simulator-panel-left">
            <div className="panel-header">Source Documents</div>
            <div className="ingest-box">
              <div className={`ingest-item file-pdf ${pdfLoaded ? "loaded" : ""}`} id="sim-file-pdf">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <div className="file-info">
                  <span className="file-name">
                    {scenario === "github" ? "HDFC_Statement_June.pdf" : "SBI_Statement_June.pdf"}
                  </span>
                  <span className="file-status" id="sim-status-pdf">
                    {pdfLoaded ? "Ready" : "Pending upload"}
                  </span>
                </div>
                <svg
                  className="icon-check"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className={`ingest-item file-excel ${xlsLoaded ? "loaded" : ""}`} id="sim-file-xls">
                <svg
                  className="icon"
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
                <div className="file-info">
                  <span className="file-name">General_Ledger_June.xlsx</span>
                  <span className="file-status" id="sim-status-xls">
                    {xlsLoaded ? "Ready" : "Pending upload"}
                  </span>
                </div>
                <svg
                  className="icon-check"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
            {/* BRS Sheet */}
            <div className={`brs-container ${brsVisible ? "visible" : ""}`} id="brs-output">
              <div className="brs-header">
                <span>Bank Reconciliation Statement</span>
                <span className="brs-period">June 30, 2026</span>
              </div>
              <div className="brs-sheet font-mono">
                <div className="brs-row">
                  <span>Balance per Bank (HDFC)</span>
                  <span className="brs-value">₹14,50,000.00</span>
                </div>
                <div className="brs-row">
                  <span>Less: Uncleared Cheques</span>
                  <span className="brs-value negative">-₹25,000.00</span>
                </div>
                <div className="brs-row border-top">
                  <span>Adjusted Bank Balance</span>
                  <span className="brs-value">₹14,25,000.00</span>
                </div>
                <div className="brs-row" id="brs-ledger-row">
                  <span>Balance per General Ledger</span>
                  <span className={brsLedgerClass} id="brs-ledger-val">
                    {brsLedgerVal}
                  </span>
                </div>
                <div className="brs-row border-double">
                  <span style={{ fontWeight: 500 }}>Reconciliation Difference</span>
                  <span className={brsDiffClass} id="brs-diff-val">
                    {brsDiffVal}
                  </span>
                </div>
              </div>
              <div className={brsStatusClass} id="brs-status-badge">
                {brsStatusText}
              </div>
            </div>
          </div>
          {/* Right Panel: Conversation Feed */}
          <div className="simulator-panel-right">
            <div className="panel-header">Reconciliation Feed</div>
            <div className="chat-thread" id="sim-chat-thread" ref={threadRef}>
              {messages.map((msg) => (
                <div key={msg.id} className={`chat-msg ${msg.sender}-msg`}>
                  <div className="msg-avatar">{msg.sender === "river" ? "R" : "U"}</div>
                  <div className="msg-bubble" dangerouslySetInnerHTML={{ __html: msg.text }} />
                </div>
              ))}
              {showActions && (
                <div className="chat-msg river-msg">
                  <div className="msg-avatar">R</div>
                  <div className="msg-bubble">
                    <div className="chat-actions" id="sim-actions">
                      <button className="chat-btn" onClick={() => handleResolveSim(true)}>
                        {scenario === "github" ? "Yes, Software Expense" : "Flag as Duplicate"}
                      </button>
                      <button className="chat-btn secondary" onClick={() => handleResolveSim(false)}>
                        {scenario === "github" ? "Categorize Manually" : "Approve Both"}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
