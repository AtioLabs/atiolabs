import type { Metadata } from "next";
import { Inter, Fraunces, IBM_Plex_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.asynarch.com"),
  title: "River by Asynarch — The Accounting, as it happens",
  description: "Tell River what happened. It does the rest. Conversational accounting built for modern business, in River or on WhatsApp.",
  alternates: {
    canonical: "https://www.asynarch.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Asynarch", url: "https://www.asynarch.com" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "The Accounting, as it happens | River by Asynarch",
    description: "Tell River what happened. It does the rest.",
    url: "https://www.asynarch.com",
    siteName: "River by Asynarch",
    type: "website",
    images: [
      {
        url: "/og.png",
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
    images: ["/og.png"],
  },
  other: {
    "brand": "Asynarch",
    "product": "River",
    "publisher": "Asynarch",
    "copyright": "Asynarch",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.asynarch.com/#organization",
      "name": "Asynarch",
      "url": "https://www.asynarch.com",
      "logo": "https://www.asynarch.com/asynarch-logo.png",
      "sameAs": ["https://x.com/asynarch", "https://linkedin.com/company/asynarch"],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.asynarch.com/#software",
      "name": "River",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, WhatsApp, iOS, Android",
      "description": "Tell River what happened. It does the rest. Conversational accounting built for modern business, in River or on WhatsApp.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
      "publisher": {
        "@id": "https://www.asynarch.com/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.asynarch.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is River for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "River is for GST-registered service companies in India.",
          },
        },
        {
          "@type": "Question",
          "name": "How does River decide what to record?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "River uses the business details, documents, accounts, and context you provide. It interprets the event, prepares the accounting treatment, and checks the entry before posting it.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I see what River recorded?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. River keeps the transaction, accounting entry, and source information connected so the result can be reviewed and traced.",
          },
        },
        {
          "@type": "Question",
          "name": "What happens after I join early access?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We’ll contact you when River is ready to understand your business and bring in your existing accounting data.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
