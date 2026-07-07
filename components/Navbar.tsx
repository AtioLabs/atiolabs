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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo-mark-img" src="/atio-mark.png" alt="" width={32} height={32} />
          </span>
          <span className="logo-kicker">ATIO LABS</span>
          <span className="logo-divider" aria-hidden="true" />
          <span className="logo-river">River</span>
        </a>
        <div className={`nav-links ${isMobileOpen ? "mobile-open" : ""}`} id="nav-links">
          <a href="#how-it-works" onClick={() => setIsMobileOpen(false)}>
            How it Works
          </a>
          <a href="#control" onClick={() => setIsMobileOpen(false)}>
            Control
          </a>
          <a href="#where-starts" onClick={() => setIsMobileOpen(false)}>
            Reconciliation
          </a>
          <a href="#where-its-going" onClick={() => setIsMobileOpen(false)}>
            Vision
          </a>
          <a
            href="#finale"
            className="nav-cta-mobile btn btn-primary"
            onClick={() => setIsMobileOpen(false)}
          >
            <span>Join the waitlist</span>
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
          <span>Join the waitlist</span>
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
