import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
