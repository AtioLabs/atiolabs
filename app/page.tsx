"use client";

import { useEffect, useState } from "react";
import BackgroundFlows from "@/components/BackgroundFlows";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Philosophy from "@/components/Philosophy";
import ReviewQueue from "@/components/ReviewQueue";
import ConversationalAuditor from "@/components/ConversationalAuditor";
import BuiltByAtioLabs from "@/components/BuiltByAtioLabs";
import OceanFinale from "@/components/OceanFinale";
import Footer from "@/components/Footer";

export default function Home() {
  const [isJoined, setIsJoined] = useState(false);

  // Initialize status from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const joined = localStorage.getItem("river_waitlist_joined") === "true";
      if (joined) {
        setIsJoined(true);
      }
    }
  }, []);

  const handleJoin = () => {
    setIsJoined(true);
    if (typeof window !== "undefined") {
      localStorage.setItem("river_waitlist_joined", "true");
    }
  };

  useEffect(() => {
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
      { root: null, rootMargin: "0px 0px -50px 0px", threshold: 0.1 }
    );

    document.querySelectorAll(".framer-reveal").forEach((el) => observer.observe(el));

    // Immediately reveal Hero elements to avoid blank screen delay
    const timeout = setTimeout(() => {
      document.querySelectorAll(".hero .framer-reveal").forEach((el) => {
        el.classList.add("is-visible");
      });
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <BackgroundFlows />
      <Navbar />
      <main>
        <Hero isJoined={isJoined} onJoin={handleJoin} />
        <HowItWorks />
        <Philosophy />
        <ReviewQueue />
        <ConversationalAuditor />
        <BuiltByAtioLabs />
        <OceanFinale isJoined={isJoined} onJoin={handleJoin} />
      </main>
      <Footer />
    </>
  );
}
