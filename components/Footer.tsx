export default function Footer() {
  return (
    <footer>
      <div className="footer-grid" style={{ gridTemplateColumns: "1.5fr 1fr" }}>
        <div className="footer-brand-col">
          <a href="#" className="logo-container footer-brand-logo">
            <span className="logo-mark-tile" aria-hidden="true">
              <svg className="logo-mark" viewBox="0 0 32 32" fill="none">
                <defs>
                  <linearGradient id="riverGradFooter" x1="2" y1="6" x2="30" y2="26" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2585D1" />
                    <stop offset="1" stopColor="#0FFCBE" />
                  </linearGradient>
                </defs>
                <path d="M3 11c4-4 7 4 11 0s7-4 11 0" stroke="url(#riverGradFooter)" />
                <path d="M3 17c4-4 7 4 11 0s7-4 11 0" stroke="url(#riverGradFooter)" opacity="0.7" />
                <path d="M3 23c4-4 7 4 11 0s7-4 11 0" stroke="url(#riverGradFooter)" opacity="0.45" />
              </svg>
            </span>
            <span className="logo-kicker">ATIO LABS</span>
            <span className="logo-divider" aria-hidden="true" />
            <span className="logo-river">River</span>
          </a>
          <p className="footer-tagline">The accountant and the accounting software, fused into one.</p>
          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/company/atio-labs/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://x.com/atiolabsai?s=11" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="X / Twitter">
              <svg
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Product</div>
          <ul className="footer-links">
            <li>
              <a href="#how-it-works">How it Works</a>
            </li>
            <li>
              <a href="#review-queue">Smart Review Queue</a>
            </li>
            <li>
              <a href="#conversational-audit">Conversational BRS</a>
            </li>
            <li>
              <a href="mailto:atiolabs.tech@gmail.com">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-bottom-text">&copy; 2026 Atio Labs. All rights reserved.</span>
        <span className="footer-bottom-text">atiolabs.tech@gmail.com</span>
      </div>
    </footer>
  );
}
