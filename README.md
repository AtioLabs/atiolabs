# River by Asynarch — The Accounting, as it happens

River is the autonomous accounting engine built by Asynarch. Tell River what happened. It does the rest.

Website: [https://asynarch.com](https://asynarch.com)

---

## Overview

River understands the accounting behind everyday business activity. You only need to describe what happened—in River or on WhatsApp—and River works out how that should be recorded:
* **Tax Invoicing:** Composes GST-compliant sales invoices, computes SAC/HSN codes, and debits accounts receivable.
* **Vendor Bills & ITC:** Extracts vendor invoices, capitalizes fixed assets, and claims Input Tax Credit (ITC).
* **Bank Reconciliation & TDS:** Matches bank statements against receivables, accounts for Section 194J TDS withholdings, and updates ledger balances.

---

## Core Invariants

1. **Every entry is checked before it is posted.**
2. **GST and TDS are recorded correctly.**
3. **Locked periods reject new entries.**
4. **Corrections keep their history.**
5. **Every report comes from the transactions in the books.**

---

## Tech Stack

* **Framework:** Next.js (App Router, Turbopack)
* **Motion & Animation:** GSAP (`gsap`, `ScrollTrigger`, `Draggable`) + Lenis Smooth Scroll (`lenis`)
* **Styling:** Tailwind CSS + Vanilla CSS Custom Properties
* **Typography:** Fraunces (Display), Inter (Body UI), IBM Plex Mono (Tabular Numbers)

---

## Development

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Build production bundle
npm run build
```

---

## Routes

* `/` — River landing page with interactive software simulators & draggable desktop canvas.
* `/privacy` — Privacy Policy.
* `/api/waitlist` — Early access waitlist submission endpoint.
