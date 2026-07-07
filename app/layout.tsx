import type { Metadata } from "next";
import { Fraunces, Newsreader, Cormorant_Garamond, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "River by Atio Labs | The accountant and the accounting software, fused into one",
  description: "Drop your bank statements and books. River reads, matches, and reconciles — you only review what it can't. AI-native bank reconciliation.",
  keywords: ["River", "Atio Labs", "AI accounting", "automated bank reconciliation", "AI accountant", "general ledger matching", "BRS generation"],
  authors: [{ name: "Atio Labs" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "River by Atio Labs | The accountant and the accounting software, fused into one",
    description: "Drop your bank statements and books. River reads, matches, and reconciles — you only review what it can't.",
    url: "https://atiolabs.com/river",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "River by Atio Labs | The accountant and the accounting software, fused into one",
    description: "Drop your bank statements and books. River reads, matches, and reconciles — you only review what it can't.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${newsreader.variable} ${cormorant.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
