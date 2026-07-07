"use client";

import React from "react";

export default function FontTestPage() {
  const headlineText = "Your accounting, handled.";

  return (
    <div style={{
      background: "#FBFAF6",
      color: "#1F1F1B",
      minHeight: "100vh",
      padding: "60px 40px",
      fontFamily: "var(--font-sans), sans-serif"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "40px", borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: "20px" }}>
          Display Serif Pressure-Test Page
        </h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "60px", color: "#666" }}>
          Compare the three candidates side-by-side at actual size. We want a quiet, confident, institutional feel. Look closely at the serifs and character shapes. Canela and GT Sectra are commercial/paid, so these three Google Fonts are our candidates.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "80px" }}>
          
          {/* Option 1: Fraunces */}
          <div>
            <div style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--brand-blue)", marginBottom: "16px", fontFamily: "var(--font-mono)" }}>
              Option 1: Fraunces (low soft/wonk axis)
            </div>
            <h2 style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "6.2vw",
              lineHeight: "1.05",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              margin: 0
            }}>
              {headlineText}
            </h2>
            <div style={{ marginTop: "12px", fontSize: "0.85rem", color: "#888", fontFamily: "var(--font-sans)" }}>
              font-family: var(--font-fraunces); font-weight: 500; letter-spacing: -0.03em
            </div>
          </div>

          {/* Option 2: Newsreader */}
          <div>
            <div style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--brand-blue)", marginBottom: "16px", fontFamily: "var(--font-mono)" }}>
              Option 2: Newsreader (sharp, editorial)
            </div>
            <h2 style={{
              fontFamily: "var(--font-newsreader), serif",
              fontSize: "6.2vw",
              lineHeight: "1.05",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              margin: 0
            }}>
              {headlineText}
            </h2>
            <div style={{ marginTop: "12px", fontSize: "0.85rem", color: "#888", fontFamily: "var(--font-sans)" }}>
              font-family: var(--font-newsreader); font-weight: 500; letter-spacing: -0.02em
            </div>
          </div>

          {/* Option 3: Cormorant Garamond */}
          <div>
            <div style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--brand-blue)", marginBottom: "16px", fontFamily: "var(--font-mono)" }}>
              Option 3: Cormorant Garamond (calligraphic, elegant)
            </div>
            <h2 style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "6.2vw",
              lineHeight: "1.05",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              margin: 0
            }}>
              {headlineText}
            </h2>
            <div style={{ marginTop: "12px", fontSize: "0.85rem", color: "#888", fontFamily: "var(--font-sans)" }}>
              font-family: var(--font-cormorant); font-weight: 500; letter-spacing: -0.01em
            </div>
          </div>

        </div>

        <div style={{ marginTop: "80px", paddingTop: "40px", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
          <p style={{ fontWeight: "bold" }}>Decision Criteria:</p>
          <ul>
            <li><strong>Fraunces:</strong> Very warm and modern. If soft is kept at 0, it behaves nicely, but can feel boutique.</li>
            <li><strong>Newsreader:</strong> Very sharp, institutional, clean serifs. Less decorative, feels like a newspaper or high-end publishing house.</li>
            <li><strong>Cormorant Garamond:</strong> High contrast, delicate. Tends to feel classical and high-fashion.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
