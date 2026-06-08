"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ChatMessage {
  id: string;
  sender: "river" | "user";
  text: string;
}

const responses: Record<string, { user: string; river: string }> = {
  cheques: {
    user: "Which cheques haven't cleared yet?",
    river: `As of June 30, 2026, there are 3 uncleared cheques totaling ₹25,000.00:<br><br>
    <table class="chat-data-table">
        <thead>
            <tr>
                <th>Cheque #</th>
                <th>Bank</th>
                <th>Date</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>#1042</td>
                <td>HDFC</td>
                <td>June 24</td>
                <td>₹10,000.00</td>
            </tr>
            <tr>
                <td>#1045</td>
                <td>SBI</td>
                <td>June 26</td>
                <td>₹8,000.00</td>
            </tr>
            <tr>
                <td>#1049</td>
                <td>ICICI</td>
                <td>June 28</td>
                <td>₹7,000.00</td>
            </tr>
        </tbody>
    </table>`,
  },
  june: {
    user: "Is June fully reconciled?",
    river: "Yes. All 150 transactions from your HDFC bank statement have been reconciled. The final BRS has been generated, and your ledger accounts are up to date. Reconciliation difference: <strong>₹0.00</strong>.",
  },
  mismatch: {
    user: "Why didn't this ₹11,800 entry match?",
    river: "The bank statement showed a charge of ₹11,800 from <code>BILL.COM *GITHUB</code> on June 15, but there was no corresponding record in the General Ledger. It was routed to the Smart Review Queue and resolved as a Software Expense subscription.",
  },
};

export default function ConversationalAuditor() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "river",
      text: "Hi, I'm River. I replaced the complex dashboard with a conversation. When you need financial clarity, you don't need to generate a 20-page report. You just ask.",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isBtnsDisabled, setIsBtnsDisabled] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const threadRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const autoDemoFired = useRef(false);

  const handleQuery = (query: string) => {
    const data = responses[query];
    if (!data || isBtnsDisabled) return;

    setIsBtnsDisabled(true);

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        sender: "user",
        text: data.user,
      },
    ]);

    // Show typing after a short delay
    let typingTimeout = setTimeout(() => {
      setIsTyping(true);
    }, 400);

    // Show response and hide typing
    let responseTimeout = setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substring(7),
          sender: "river",
          text: data.river,
        },
      ]);
      setIsBtnsDisabled(false);
    }, 1800);

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(responseTimeout);
    };
  };

  useEffect(() => {
    if (threadRef.current) {
      threadRef.current.scrollTo({
        top: threadRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let autoDemoTimeout: NodeJS.Timeout;

    if (sectionRef.current) {
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        onEnter: () => {
          if (autoDemoFired.current) return;
          autoDemoFired.current = true;
          // Auto-trigger the first query after 1.2s
          autoDemoTimeout = setTimeout(() => {
            handleQuery("cheques");
          }, 1200);
        },
      });
    }

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      clearTimeout(autoDemoTimeout);
    };
  }, []); // Only run once on mount to register the ScrollTrigger

  return (
    <section id="conversational-audit" className="chat-section section" ref={sectionRef}>
      <div className="container chat-section-grid">
        <div className="chat-content framer-reveal">
          <span className="label">Conversational Audit</span>
          <h2 style={{ marginTop: "12px", marginBottom: "24px" }}>
            Stop navigating.
            <br />
            Start asking.
          </h2>
          <p>
            We replaced the complex dashboard with a conversation. When you need financial
            clarity, you don't need to generate a 20-page report. You just ask.
          </p>
        </div>
        <div className="chat-visual-wrapper framer-reveal delay-1">
          <div className="auditor-window">
            <div className="auditor-header">
              <div className="mac-dots">
                <div className="mac-dot" />
                <div className="mac-dot" />
                <div className="mac-dot" />
              </div>
              <div className="auditor-title">Conversational Auditor</div>
            </div>
            <div className="auditor-chat-thread" id="auditor-thread" ref={threadRef}>
              {messages.map((msg) => (
                <div key={msg.id} className={`chat-msg ${msg.sender}-msg`}>
                  <div className="msg-avatar">{msg.sender === "river" ? "R" : "U"}</div>
                  <div className="msg-bubble" dangerouslySetInnerHTML={{ __html: msg.text }} />
                </div>
              ))}
              {isTyping && (
                <div className="chat-msg river-msg">
                  <div className="msg-avatar">R</div>
                  <div className="msg-bubble">
                    <span className="typing-dot">.</span>
                    <span className="typing-dot">.</span>
                    <span className="typing-dot">.</span>
                  </div>
                </div>
              )}
            </div>
            <div className="auditor-suggestions">
              <span className="panel-header" style={{ marginLeft: "4px", fontSize: "0.65rem" }}>
                Suggested Queries
              </span>
              <button
                className="suggestion-btn"
                onClick={() => handleQuery("cheques")}
                disabled={isBtnsDisabled}
                style={{ pointerEvents: isBtnsDisabled ? "none" : "auto" }}
              >
                "Which cheques haven't cleared yet?"
              </button>
              <button
                className="suggestion-btn"
                onClick={() => handleQuery("june")}
                disabled={isBtnsDisabled}
                style={{ pointerEvents: isBtnsDisabled ? "none" : "auto" }}
              >
                "Is June fully reconciled?"
              </button>
              <button
                className="suggestion-btn"
                onClick={() => handleQuery("mismatch")}
                disabled={isBtnsDisabled}
                style={{ pointerEvents: isBtnsDisabled ? "none" : "auto" }}
              >
                "Why didn't this ₹11,800 entry match?"
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
