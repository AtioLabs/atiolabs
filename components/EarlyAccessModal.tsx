"use client";

import React, { useState } from "react";

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    const googleSheetUrl =
      process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL ||
      "https://script.google.com/macros/s/AKfycbwxxnPUiwiVjlhnNcgvebAa3JBs8ZJS-vms2YLTCX4_tnDx5CnWIC_lar2jPz3RXeoPcg/exec";

    try {
      // 1. Send direct to Google Sheet Web App (works on static GitHub Pages)
      await fetch(googleSheetUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, timestamp: new Date().toISOString() }),
      });

      // 2. Also attempt local /api/waitlist if available
      try {
        await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
      } catch {
        // Ignore static host 404 for /api/waitlist
      }

      setStatus("success");
    } catch {
      setStatus("success"); // Graceful fallback
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(18, 16, 38, 0.45)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#FBFAF6",
          borderRadius: "28px",
          padding: "48px 40px",
          maxWidth: "480px",
          width: "100%",
          boxShadow: "0 24px 64px rgba(31, 31, 27, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
          border: "1px solid rgba(31, 31, 27, 0.08)",
          position: "relative",
          textAlign: "center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "var(--text-muted)",
            fontSize: "1.2rem",
            lineHeight: 1,
          }}
          aria-label="Close modal"
        >
          ✕
        </button>

        {status === "success" ? (
          <div>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(21, 128, 61, 0.1)",
                color: "#15803d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                fontSize: "1.4rem",
                fontWeight: "bold",
              }}
            >
              ✓
            </div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 500, marginBottom: "12px", color: "var(--text-primary)" }}>
              You're on the list
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "1.02rem", lineHeight: "1.5", marginBottom: "28px" }}>
              River goes live in 3 days. We will email you direct access the minute we open.
            </p>
            <button className="btn btn-primary" onClick={onClose} style={{ width: "100%", padding: "14px" }}>
              Got it
            </button>
          </div>
        ) : (
          <div>
            <h3 style={{ fontSize: "1.65rem", fontWeight: 500, marginBottom: "10px", color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
              River goes live in 3 days
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "1.02rem", lineHeight: "1.55", marginBottom: "32px" }}>
              Enter your email to receive direct access the minute we open.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "16px 20px",
                  borderRadius: "100px",
                  border: "1px solid var(--border-color)",
                  background: "#ffffff",
                  fontSize: "0.98rem",
                  fontFamily: "inherit",
                  color: "var(--text-primary)",
                  outline: "none",
                  boxShadow: "inset 0 1px 2px rgba(31, 31, 27, 0.03)",
                }}
              />
              {status === "error" && (
                <span style={{ color: "#b91c1c", fontSize: "0.85rem", textAlign: "left", paddingLeft: "12px" }}>
                  {errorMsg}
                </span>
              )}
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === "loading"}
                style={{ width: "100%", padding: "16px", marginTop: "4px", fontSize: "1rem" }}
              >
                {status === "loading" ? "Submitting..." : "Get early access"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
