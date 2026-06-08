export default function Philosophy() {
  return (
    <section id="problem" className="problem-section section">
      <div className="container">
        <div className="problem-split-grid">
          <div className="philosophy-text framer-reveal">
            <span className="label">Philosophy</span>
            <h2 style={{ marginTop: "12px", marginBottom: "24px" }}>
              Software should do the work.
              <br />
              Not create more of it.
            </h2>
            <p>
              Traditional accounting tools are passive. You do the heavy lifting: mapping columns,
              cross-checking line items, and hunting for errors.
            </p>
            <p>
              River flips the model. As an AI-native system, it reads your ledgers and bank
              statements directly to reconcile them automatically.
            </p>
          </div>
          {/* Interface Comparison replacing squished bar charts */}
          <div className="philosophy-comparison framer-reveal delay-1">
            <div className="comparison-container">
              {/* Left: Old Way */}
              <div
                className="comparison-column old-way"
                style={{ padding: 0, gap: 0, borderRadius: "6px", overflow: "hidden" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 12px",
                    background: "#e8e4d8",
                    borderBottom: "1px solid #c8c4b8",
                  }}
                >
                  <span className="comparison-badge badge-red">Legacy Software</span>
                  <span style={{ fontSize: "0.6rem", color: "#888" }}>Bookkeeping Module</span>
                </div>
                <div className="legacy-dashboard">
                  <div className="legacy-menubar">
                    <span>File</span>
                    <span>Edit</span>
                    <span>View</span>
                    <span>Reports</span>
                    <span>Tools</span>
                    <span>Help</span>
                  </div>
                  <div className="legacy-toolbar">
                    <span className="legacy-toolbar-btn">New Entry</span>
                    <span className="legacy-toolbar-btn">Import</span>
                    <span className="legacy-toolbar-btn">Match</span>
                    <span className="legacy-toolbar-btn">Reconcile</span>
                    <span className="legacy-toolbar-btn">Print BRS</span>
                    <span className="legacy-toolbar-btn">Export</span>
                  </div>
                  <div className="legacy-table-area">
                    <table className="legacy-table">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Particulars</th>
                          <th>Vch Type</th>
                          <th>Debit</th>
                          <th>Credit</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01-Jun</td>
                          <td>NEFT/Vendor Pay...</td>
                          <td>Payment</td>
                          <td>45,200</td>
                          <td></td>
                          <td className="cell-warn">Pending</td>
                        </tr>
                        <tr>
                          <td>03-Jun</td>
                          <td>CHQ#1042/Rent</td>
                          <td>Payment</td>
                          <td>10,000</td>
                          <td></td>
                          <td className="cell-error">UNMATCH</td>
                        </tr>
                        <tr>
                          <td>15-Jun</td>
                          <td>BILL.COM *GITHUB</td>
                          <td>???</td>
                          <td className="cell-error">11,800</td>
                          <td></td>
                          <td className="cell-error">NO ENTRY</td>
                        </tr>
                        <tr>
                          <td>22-Jun</td>
                          <td>IMPS/Client Rcpt</td>
                          <td>Receipt</td>
                          <td></td>
                          <td>1,20,000</td>
                          <td className="cell-warn">Verify</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="legacy-error-popup">
                    <span className="legacy-error-icon">⚠</span>
                    <span>3 unmatched entries. Manual reconciliation required. Export to Excel?</span>
                  </div>
                  <div className="legacy-statusbar">
                    <span>Last reconciled: 45 days ago</span>
                    <span>Entries: 4 of 150 mapped</span>
                  </div>
                </div>
              </div>
              {/* Right: River Way */}
              <div className="comparison-column river-way">
                <div className="comparison-header">
                  <span className="comparison-badge badge-blue">The River Way</span>
                  <span className="comparison-sub">100% Automated</span>
                </div>
                <div className="comparison-body">
                  <div className="river-success-card">
                    <div className="river-success-title">
                      <span className="river-success-circle">✓</span>
                      <span>June Reconciled</span>
                    </div>
                    <p
                      className="river-success-desc"
                      style={{ fontSize: "0.8rem", margin: "8px 0 0", color: "var(--ocean-muted)" }}
                    >
                      All 150 bank statement entries reconciled directly against books in 0.4s.
                    </p>
                    <div className="river-success-stat font-mono">
                      <span>Difference:</span>
                      <span className="highlight-success">₹0.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
