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
    <nav id="navbar" className={isScrolled ? "scrolled" : ""}>
      <div className="container nav-container">
        <a href="#" className="logo-container">
          <span className="logo-mark-tile" aria-hidden="true">
            <svg className="logo-mark" viewBox="0 0 32 32" fill="none">
              <defs>
                <linearGradient id="riverGrad" x1="2" y1="6" x2="30" y2="26" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#106EBE" />
                  <stop offset="1" stopColor="#0FFCBE" />
                </linearGradient>
              </defs>
              <path d="M3 11c4-4 7 4 11 0s7-4 11 0" stroke="url(#riverGrad)" />
              <path d="M3 17c4-4 7 4 11 0s7-4 11 0" stroke="url(#riverGrad)" opacity="0.7" />
              <path d="M3 23c4-4 7 4 11 0s7-4 11 0" stroke="url(#riverGrad)" opacity="0.45" />
            </svg>
          </span>
          <span className="logo-kicker">ATIO LABS</span>
          <span className="logo-divider" aria-hidden="true" />
          <span className="logo-river">River</span>
        </a>
        <div className={`nav-links ${isMobileOpen ? "mobile-open" : ""}`} id="nav-links">
          <a href="#problem" onClick={() => setIsMobileOpen(false)}>
            Philosophy
          </a>
          <a href="#review-queue" onClick={() => setIsMobileOpen(false)}>
            Review Queue
          </a>
          <a href="#conversational-audit" onClick={() => setIsMobileOpen(false)}>
            Conversational BRS
          </a>
          <a
            href="#finale"
            className="nav-cta-mobile btn btn-primary"
            onClick={() => setIsMobileOpen(false)}
          >
            <span>Join the Waitlist</span>
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
        <a href="#finale" className="btn btn-primary nav-cta-desktop" style={{ padding: "8px 10px 8px 20px", fontSize: "0.85rem" }}>
          <span>Join Waitlist</span>
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
