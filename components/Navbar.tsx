"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={isScrolled ? "scrolled" : ""}>
      <div className="nav-container">
        <a href="#" className="logo-container">
          <span className="logo-mark-tile" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo-mark-img" src="/atio-mark.png" alt="" width={32} height={32} />
          </span>
          <span className="logo-kicker">ASYNARCH</span>
          <span className="logo-divider" aria-hidden="true" />
          <span className="logo-river">River</span>
        </a>
        <div className={`nav-links ${isMobileOpen ? "mobile-open" : ""}`} id="nav-links">
          <a href="#thesis" onClick={() => setIsMobileOpen(false)}>
            Thesis
          </a>
          <a href="#it-just-happens" onClick={() => setIsMobileOpen(false)}>
            Overview
          </a>
          <a href="#how-it-works" onClick={() => setIsMobileOpen(false)}>
            How it works
          </a>
          <a href="#every-evening" onClick={() => setIsMobileOpen(false)}>
            Routine
          </a>
          <a href="#why-this-matters" onClick={() => setIsMobileOpen(false)}>
            Why it matters
          </a>
          <a href="#where-its-going" onClick={() => setIsMobileOpen(false)}>
            The horizon
          </a>
          <a
            href="https://river.asynarch.com/"
            className="nav-cta-mobile btn btn-primary"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginTop: "8px",
              padding: "14px 24px",
            }}
            onClick={() => setIsMobileOpen(false)}
          >
            <span>Upload statement</span>
            <span className="btn-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M9 7h8v8" />
              </svg>
            </span>
          </a>
        </div>
        <button
          className="mobile-menu-btn"
          id="mobile-menu-btn"
          aria-label="Toggle menu"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <a
          href="https://river.asynarch.com/"
          className="btn btn-primary nav-cta-desktop" 
          style={{ padding: "8px 10px 8px 20px", fontSize: "0.85rem", cursor: "pointer", whiteSpace: "nowrap", textDecoration: "none", display: "inline-flex", alignItems: "center" }}
        >
          <span>Upload statement</span>
          <span className="btn-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" />
              <path d="M9 7h8v8" />
            </svg>
          </span>
        </a>
      </div>
    </nav>
  );
}
