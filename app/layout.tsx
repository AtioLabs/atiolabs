import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://atiolabs.com"),
  alternates: {
    canonical: "/",
  },
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
    url: "https://atiolabs.com",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "River — Run the business instead of the books",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "River by Atio Labs | The accountant and the accounting software, fused into one",
    description: "Drop your bank statements and books. River reads, matches, and reconciles — you only review what it can't.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${bricolage.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
