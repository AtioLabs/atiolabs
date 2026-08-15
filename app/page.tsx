"use client";

import TeaserPage from "@/components/TeaserPage";

// Preserved landing page components for quick toggle anytime:
// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import Thesis from "@/components/Thesis";
// import TheManualEntryGone from "@/components/TheManualEntryGone";
// import HowItWorks from "@/components/HowItWorks";
// import EndYourDay from "@/components/EndYourDay";
// import WhyThisMatters from "@/components/WhyThisMatters";
// import WhereItsGoing from "@/components/WhereItsGoing";
// import OceanFinale from "@/components/OceanFinale";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Asynarch",
              "alternateName": ["Asynarch River", "Asynarch AI", "asynarch.com"],
              "url": "https://asynarch.com"
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Asynarch",
              "formerName": "Atio Labs",
              "alternateName": ["Asynarch River", "Asynarch AI", "asynarch.com"],
              "url": "https://asynarch.com",
              "logo": "https://asynarch.com/apple-touch-icon.png",
              "founder": [
                {
                  "@type": "Person",
                  "name": "Asrul Ishath",
                  "jobTitle": "Founder & CEO"
                },
                {
                  "@type": "Person",
                  "name": "Mohamed Abubakkar",
                  "jobTitle": "Co-Founder & CTO"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/asynarch",
                "https://x.com/asynarch?s=11"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "River",
              "url": "https://asynarch.com",
              "logo": "https://asynarch.com/apple-touch-icon.png",
              "applicationCategory": "AccountingApplication",
              "operatingSystem": "All",
              "description": "Something new is taking shape. River by Asynarch.",
              "publisher": {
                "@type": "Organization",
                "name": "Asynarch",
                "url": "https://asynarch.com"
              }
            }
          ])
        }}
      />
      <TeaserPage />
    </>
  );
}
