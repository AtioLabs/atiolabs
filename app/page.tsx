"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheManualEntryGone from "@/components/TheManualEntryGone";
import HowItWorks from "@/components/HowItWorks";
import EndYourDay from "@/components/EndYourDay";
import ItLearnsOnce from "@/components/ItLearnsOnce";
import WhyThisMatters from "@/components/WhyThisMatters";
import WhereItsGoing from "@/components/WhereItsGoing";
import OceanFinale from "@/components/OceanFinale";
import Footer from "@/components/Footer";
import EarlyAccessModal from "@/components/EarlyAccessModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !("IntersectionObserver" in window)) {
      document.querySelectorAll(".framer-reveal").forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    // Entrance Reveals via Intersection Observer
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -10px 0px", threshold: 0.02 }
    );

    document.querySelectorAll(".framer-reveal").forEach((el) => observer.observe(el));

    // Immediately reveal Hero elements to avoid blank screen delay
    const timeout = setTimeout(() => {
      document.querySelectorAll(".hero .framer-reveal").forEach((el) => {
        el.classList.add("is-visible");
      });
    }, 50);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

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
              "description": "The cash book that writes itself. Upload your statement. See every payment recorded, in minutes.",
              "publisher": {
                "@type": "Organization",
                "name": "Asynarch",
                "url": "https://asynarch.com"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/PreOrder"
              }
            }
          ])
        }}
      />
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <TheManualEntryGone />
        <HowItWorks />
        <EndYourDay />
        <ItLearnsOnce />
        <WhyThisMatters />
        <WhereItsGoing />
        <OceanFinale onOpenModal={() => setIsModalOpen(true)} />
      </main>
      <Footer />

      {/* Option A Modal Popup */}
      <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
