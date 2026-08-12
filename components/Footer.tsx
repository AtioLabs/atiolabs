export default function Footer() {
  return (
    <footer>
      <div className="footer-grid" style={{ gridTemplateColumns: "1.5fr 1fr" }}>
        <div className="footer-brand-col">
          <a href="#" className="logo-container footer-brand-logo">
            <span className="logo-mark-tile" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="logo-mark-img" src="/atio-mark.png" alt="" width={32} height={32} />
            </span>
            <span className="logo-kicker">ASYNARCH</span>
            <span className="logo-divider" aria-hidden="true" />
            <span className="logo-river">River</span>
          </a>
          <p className="footer-tagline">The cash book that writes itself.</p>
          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/company/asynarch"
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
            <a href="https://x.com/asynarch?s=11" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="X / Twitter">
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
          <p style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.4)", marginTop: "24px", lineHeight: "1.4", fontFamily: "var(--sans-font)" }}>
            Built by Asynarch · Our aspiration is to make running a business as easy as building one.
          </p>
        </div>
        <div>
          <div className="footer-col-title">Product</div>
          <ul className="footer-links">
            <li>
              <a href="#thesis">Thesis</a>
            </li>
            <li>
              <a href="#it-just-happens">Overview</a>
            </li>
            <li>
              <a href="#how-it-works">How it works</a>
            </li>
            <li>
              <a href="#every-evening">Routine</a>
            </li>
            <li>
              <a href="#why-this-matters">Why this matters</a>
            </li>
            <li>
              <a href="#where-its-going">The horizon</a>
            </li>
            <li>
              <a href="mailto:contact@asynarch.com">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-bottom-text">&copy; 2026 Asynarch. All rights reserved.</span>
        <span className="footer-bottom-text">asynarch.com</span>
      </div>
    </footer>
  );
}
