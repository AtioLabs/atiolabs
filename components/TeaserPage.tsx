"use client";

import React from "react";

export default function TeaserPage() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: 'url("/web.png")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "28px 36px",
        color: "#1c1917",
        boxSizing: "border-box",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {/* Top Header - Company Logo Alone */}
      <header
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          background: "transparent",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(255, 255, 255, 0.45)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            padding: "8px 18px",
            borderRadius: "100px",
            border: "1px solid rgba(255, 255, 255, 0.65)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/atio-mark.png" alt="Asynarch Logo" width={26} height={26} style={{ display: "block" }} />
          <span
            style={{
              fontFamily: "var(--font-sans, system-ui, sans-serif)",
              fontWeight: 600,
              fontSize: "0.72rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(28, 25, 23, 0.65)",
            }}
          >
            ASYNARCH
          </span>
          <span style={{ width: "1px", height: "14px", background: "rgba(28, 25, 23, 0.2)" }} aria-hidden="true" />
          <span
            style={{
              fontFamily: "var(--font-serif, 'Newsreader', serif)",
              fontWeight: 500,
              fontSize: "1.15rem",
              letterSpacing: "-0.01em",
              color: "#1c1917",
            }}
          >
            River
          </span>
        </div>
      </header>

      {/* Main Center Message Overlay (Responsive Crisp Serif Typography) */}
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          margin: "0 auto",
          flex: 1,
          width: "100%",
        }}
      >
        <h1
          style={{
            fontFamily: "'Newsreader', 'Georgia', serif",
            fontWeight: 400,
            fontSize: "clamp(2.4rem, 5.8vw, 4.8rem)",
            lineHeight: 1.18,
            letterSpacing: "-0.02em",
            color: "#1c1917",
            maxWidth: "14ch",
            textAlign: "center",
            margin: 0,
            textShadow: "0 2px 20px rgba(255, 255, 255, 0.4)",
          }}
        >
          Something new
          <br />
          is taking shape.
        </h1>
      </main>

      {/* Clean Floating Footer Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          fontFamily: "var(--font-sans, system-ui, sans-serif)",
          fontSize: "0.82rem",
          background: "transparent",
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.45)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            padding: "8px 18px",
            borderRadius: "100px",
            border: "1px solid rgba(255, 255, 255, 0.65)",
            color: "#1c1917",
            fontWeight: 500,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
          }}
        >
          © {new Date().getFullYear()} Asynarch
        </div>

        <div
          style={{
            display: "flex",
            gap: "14px",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.45)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            padding: "8px 20px",
            borderRadius: "100px",
            border: "1px solid rgba(255, 255, 255, 0.65)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
          }}
        >
          <a
            href="https://www.linkedin.com/company/asynarch"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1c1917", textDecoration: "none", fontWeight: 500 }}
          >
            LinkedIn
          </a>
          <span style={{ opacity: 0.35 }}>•</span>
          <a
            href="https://x.com/asynarch?s=11"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1c1917", textDecoration: "none", fontWeight: 500 }}
          >
            X
          </a>
        </div>
      </div>
    </div>
  );
}
