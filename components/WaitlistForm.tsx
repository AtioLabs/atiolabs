"use client";

import React, { useState } from "react";

interface WaitlistFormProps {
  variant?: "hero" | "finale";
  isJoined: boolean;
  onJoin: () => void;
}

export default function WaitlistForm({ variant = "hero", isJoined, onJoin }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("idle");
        onJoin();
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to join waitlist. Please try again.");
      }
    } catch (err) {
      console.error("Waitlist error:", err);
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  if (isJoined) {
    return (
      <div className="waitlist-success">
        <span className="success-checkmark">✓</span>
        <div>
          <div style={{ fontWeight: 600, fontSize: "1.05rem", color: "#166534" }}>
            You're on the list!
          </div>
          <div style={{ fontSize: "0.85rem", color: "#15803d", fontWeight: 400, marginTop: "2px" }}>
            We've saved your spot for Atio Labs' River. We will contact you soon.
          </div>
        </div>
      </div>
    );
  }

  const containerStyle: React.CSSProperties =
    variant === "finale"
      ? {
          background: "rgba(255, 255, 255, 0.1)",
          borderColor: "rgba(255, 255, 255, 0.25)",
        }
      : {};

  const inputStyle: React.CSSProperties =
    variant === "finale"
      ? {
          color: "white",
        }
      : {};

  return (
    <div className="waitlist-container-parent">
      <div className="waitlist-container" style={containerStyle}>
        <form onSubmit={handleSubmit} className="waitlist-form">
          <input
            type="email"
            placeholder="Enter your business email"
            className="waitlist-input"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            required
          />
          <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
            {status === "loading" ? "Joining..." : "Join the Waitlist"}
          </button>
        </form>
      </div>
      {status === "error" && (
        <div style={{ color: variant === "finale" ? "#fecaca" : "#dc2626", fontSize: "0.85rem", marginTop: "8px", textAlign: "center", width: "100%" }}>
          {errorMessage}
        </div>
      )}
    </div>
  );
}
