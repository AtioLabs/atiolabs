"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CashBookEntry {
  id: string;
  entity: string;
  type: "in" | "out";
  amount: string;
  description: string;
  status: "recorded" | "pending";
}

export default function HeroSimulator() {
  const [statementLoaded, setStatementLoaded] = useState(false);
  const [cashBookReady, setCashBookReady] = useState(false);
  const [messages, setMessages] = useState<{ id: string; sender: "river" | "user"; text: string }[]>([]);
  const [showLearningPrompt, setShowLearningPrompt] = useState(false);
  const [learnedEntity, setLearnedEntity] = useState(false);

  const threadRef = useRef<HTMLDivElement>(null);
  const simTimeoutIds = useRef<NodeJS.Timeout[]>([]);
  const reconcilerRef = useRef<HTMLDivElement>(null);

  const initialEntries: CashBookEntry[] = [
    { id: "1", entity: "Stripe Billing", type: "in", amount: "+₹1,45,000", description: "Client Payments Inbound", status: "recorded" },
    { id: "2", entity: "AWS Infrastructure", type: "out", amount: "-₹18,200", description: "Cloud Services Outbound", status: "recorded" },
    { id: "3", entity: "Rahul Sharma", type: "in", amount: "+₹45,000", description: "Consulting Retainer", status: "recorded" },
  ];

  const [entries, setEntries] = useState<CashBookEntry[]>(initialEntries);

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

  const runSimulator = () => {
    clearSimTimeouts();

    setMessages([]);
    setStatementLoaded(false);
    setCashBookReady(false);
    setShowLearningPrompt(false);
    setLearnedEntity(false);
    setEntries(initialEntries);

    const t1 = setTimeout(() => {
      setStatementLoaded(true);
    }, 600);
    simTimeoutIds.current.push(t1);

    const t2 = setTimeout(() => {
      setCashBookReady(true);
      addMsg(
        "river",
        `Reading your bank statement... Recorded 42 payments automatically in plain language.`
      );
    }, 1400);
    simTimeoutIds.current.push(t2);

    const t3 = setTimeout(() => {
      addMsg(
        "river",
        `<strong>1 payment needs a quick confirmation:</strong><br>₹8,500 transferred to <code>UPI/8920/VendorX</code>. Who is this payment with?`
      );
      setShowLearningPrompt(true);
    }, 3200);
    simTimeoutIds.current.push(t3);
  };

  const handleLearnResolution = () => {
    clearSimTimeouts();
    setShowLearningPrompt(false);
    setLearnedEntity(true);

    addMsg("user", "Acme Corp - Office Supplies");

    const t1 = setTimeout(() => {
      setEntries((prev) => [
        ...prev,
        { id: "4", entity: "Acme Corp", type: "out", amount: "-₹8,500", description: "Office Supplies", status: "recorded" },
      ]);

      addMsg(
        "river",
        `<strong>Saved!</strong> Recorded under <code>Acme Corp</code>. River will remember Acme Corp for all future payments. Your cash book is ready and in balance with your bank.`
      );
    }, 1000);
    simTimeoutIds.current.push(t1);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

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

  useEffect(() => {
    if (threadRef.current) {
      threadRef.current.scrollTo({
        top: threadRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, showLearningPrompt]);

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
      <div className="simulator-window" id="reconciler-simulator" ref={reconcilerRef}>
        <div className="simulator-header">
          <div className="mac-dots">
            <div className="mac-dot" />
            <div className="mac-dot" />
            <div className="mac-dot" />
          </div>
          <div className="simulator-title">River Cash Book Engine</div>
          <div className="simulator-status-dot">
            <span className="status-indicator" />
            <span className="status-text">{cashBookReady ? "In Balance" : "Processing"}</span>
          </div>
        </div>
        <div className="simulator-body">
          {/* Left Panel: Bank Statement & Generated Cash Book Table */}
          <div className="simulator-panel-left">
            <div className="panel-header">Bank Statement Ingestion</div>
            <div className="ingest-box" style={{ marginBottom: "20px" }}>
              <div className={`ingest-item file-pdf ${statementLoaded ? "loaded" : ""}`}>
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <div className="file-info">
                  <span className="file-name">HDFC_Bank_Statement.pdf</span>
                  <span className="file-status">{statementLoaded ? "Parsed 42 Payments" : "Uploading..."}</span>
                </div>
                <svg className="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>

            {/* Cash Book Live View */}
            <div className={`brs-container ${cashBookReady ? "visible" : ""}`}>
              <div className="brs-header">
                <span>Generated Cash Book</span>
                <span className="brs-period">Organized by People & Businesses</span>
              </div>
              <div className="brs-sheet font-mono" style={{ gap: "10px" }}>
                {entries.map((item) => (
                  <div key={item.id} className="brs-row" style={{ alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>{item.entity}</span>
                      <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{item.description}</span>
                    </div>
                    <span className={`brs-value ${item.type === "in" ? "highlight-success" : ""}`} style={{ fontWeight: 600 }}>
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>
              <div className={`brs-badge ${learnedEntity ? "success" : "warning"}`} style={{ marginTop: "14px" }}>
                {learnedEntity ? "✓ Cash Book Finished & Balanced" : "Organizing Transactions..."}
              </div>
            </div>
          </div>

          {/* Right Panel: River Learning Feed */}
          <div className="simulator-panel-right">
            <div className="panel-header">River Learning Feed</div>
            <div className="chat-thread" ref={threadRef}>
              {messages.map((msg) => (
                <div key={msg.id} className={`chat-msg ${msg.sender}-msg`}>
                  <div className="msg-avatar">{msg.sender === "river" ? "R" : "U"}</div>
                  <div className="msg-bubble" dangerouslySetInnerHTML={{ __html: msg.text }} />
                </div>
              ))}
              {showLearningPrompt && (
                <div className="chat-msg river-msg">
                  <div className="msg-avatar">R</div>
                  <div className="msg-bubble">
                    <div className="chat-actions">
                      <button className="chat-btn" onClick={handleLearnResolution}>
                        Acme Corp - Office Supplies
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
