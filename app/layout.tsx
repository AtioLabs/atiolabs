import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Body / UI text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Display / large headings
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

// Tabular numbers & financial figures
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asynarch.com"),
  alternates: {
    canonical: "/",
  },
  title: "River by Asynarch — The Accounting, as it happens",
  description: "Tell River what happened. It does the rest. Conversational accounting built for modern business, in River or on WhatsApp.",
  applicationName: "River by Asynarch",
  appleWebApp: {
    title: "River",
  },
  keywords: ["Asynarch", "River", "River accounting", "Asynarch River", "asynarch.com", "autonomous accounting", "conversational accounting", "WhatsApp accounting", "double-entry ledger"],
  authors: [{ name: "Asynarch", url: "https://asynarch.com" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "The Accounting, as it happens | River by Asynarch",
    description: "Tell River what happened. It does the rest.",
    url: "https://asynarch.com",
    siteName: "River by Asynarch",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Accounting, as it happens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Accounting, as it happens | River by Asynarch",
    description: "Tell River what happened. It does the rest.",
    images: ["/og-image.png"],
  },
  other: {
    "brand": "Asynarch",
    "product": "River",
    "publisher": "Asynarch",
    "copyright": "Asynarch",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
