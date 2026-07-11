# River — AI-Native Bank Reconciliation

River is an AI-native bank reconciliation engine that fuses your accountant and your accounting software. Built by Atio Labs.

Website: [https://atiolabs.com](https://atiolabs.com)

---

## Value Proposition
* **Fuses Software & Service:** River is not a tool you learn, nor an accountant you hire. It handles the back-office matching work automatically and flags only what needs a human eye.
* **Autopilot Reconciliation:** Automatically matches bank statements (PDFs) and general ledgers (spreadsheets), drafts the Bank Reconciliation Statement (BRS), and resolves discrepancies.
* **Focus on Business:** Removes the administrative bookkeeping burden so leaders can focus on building the business instead of managing the books.

---

## Tech Stack
* **Framework:** Next.js (App Router)
* **Styling:** CSS Variables (Vanilla CSS)
* **Visuals:** Custom SVG canvas background flow, tactile glassmorphism elements, dynamic scenario switcher.

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the landing page locally.

### 3. Build Production Bundle
```bash
npm run build
```

---

## Directory Structure
* `/app` — Pages, dynamic sitemap routing, and global stylesheets.
* `/components` — Reusable UI modules (Hero, HowItWorks, Reconciler Simulator, BackgroundFlows).
* `/public` — Static branding assets (favicons, og-image previews, verification tokens).
