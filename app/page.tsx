"use client";

import { useEffect, useState } from "react";
import BackgroundFlows from "@/components/BackgroundFlows";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import YouStayInControl from "@/components/YouStayInControl";
import WhereRiverStarts from "@/components/WhereRiverStarts";
import WhereItsGoing from "@/components/WhereItsGoing";
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
      <BackgroundFlows />
      <Navbar />
      <main>
        <Hero isJoined={isJoined} onJoin={handleJoin} />
        <HowItWorks />
        <YouStayInControl />
        <WhereRiverStarts />
        <WhereItsGoing />
        <OceanFinale isJoined={isJoined} onJoin={handleJoin} />
      </main>
      <Footer />
    </>
  );
}
