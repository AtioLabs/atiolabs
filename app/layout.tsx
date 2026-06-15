import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

// Body / UI text
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Display / large headings
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// Capitalised label / mono text
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Uppercase labels / eyebrows / badges
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-label",
  display: "swap",
});

export const metadata: Metadata = {
  title: "River | AI-Native Bank Reconciliation by Atio Labs",
  description: "Atio Labs presents River. Drop your bank statements and books in. Get a perfect Bank Reconciliation Statement and updated ledgers out. No dashboards. Just answers.",
  keywords: ["River", "Atio Labs", "AI accounting", "automated bank reconciliation", "AI accountant", "general ledger matching", "BRS generation"],
  authors: [{ name: "Atio Labs" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "River | AI-Native Bank Reconciliation by Atio Labs",
    description: "Drop your bank statements and books in. Get a perfect Bank Reconciliation Statement and updated ledgers out. No dashboards. Just answers.",
    url: "https://atiolabs.com/river",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "River | AI-Native Bank Reconciliation by Atio Labs",
    description: "The accountant and the accounting software, fused into one.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${bricolage.variable} ${geistMono.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
