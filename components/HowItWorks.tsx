export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-section section">
      <div className="container">
        <h2 className="framer-reveal">How it works</h2>
        <div className="how-steps">
          <div className="how-step framer-reveal delay-1">
            <div className="how-step-number">01</div>
            <h3>Drop in your files</h3>
            <p>Upload your bank statements and books. PDFs, Excel — River reads them all.</p>
            <div className="how-connector" />
          </div>
          <div className="how-step framer-reveal delay-2">
            <div className="how-step-number">02</div>
            <h3>River reconciles</h3>
            <p>AI matches every transaction, flags discrepancies, and drafts your BRS.</p>
            <div className="how-connector" />
          </div>
          <div className="how-step framer-reveal delay-3">
            <div className="how-step-number">03</div>
            <h3>Review what matters</h3>
            <p>Only unresolved items reach you. You teach River once, it remembers forever.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
