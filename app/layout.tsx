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
  metadataBase: new URL("https://asynarch.com"),
  alternates: {
    canonical: "/",
  },
  title: "The cash book that writes itself | River by Asynarch",
  description: "Upload your bank statement. Every payment gets recorded, organized by who it's with. No accounts to set up, no software to configure.",
  applicationName: "Asynarch",
  appleWebApp: {
    title: "Asynarch",
  },
  keywords: ["Asynarch", "River", "Asynarch River", "asynarch.com", "cash book", "automated cash book", "AI accounting", "bank statement parsing", "automated bookkeeping"],
  authors: [{ name: "Asynarch", url: "https://asynarch.com" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "The cash book that writes itself | River by Asynarch",
    description: "Upload your bank statement. Every payment gets recorded, organized by who it's with. No accounts to set up, no software to configure.",
    url: "https://asynarch.com",
    siteName: "Asynarch",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The cash book that writes itself",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The cash book that writes itself | River by Asynarch",
    description: "Upload your bank statement. Every payment gets recorded, organized by who it's with. No accounts to set up, no software to configure.",
    images: ["/og-image.png"],
  },
  other: {
    "brand": "Asynarch",
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
    <html lang="en" className={`${jakarta.variable} ${bricolage.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
