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
          <span className="logo-company-name">ATIO LABS</span>
          <span className="logo-separator">|</span>
          <span className="navbar-logo-text">River</span>
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
        <a href="#finale" className="btn btn-primary" style={{ padding: "10px 20px", fontSize: "0.85rem" }}>
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}
