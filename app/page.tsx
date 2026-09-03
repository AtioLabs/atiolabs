"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Problem from "@/components/Problem";
import Assurance from "@/components/Assurance";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FBFAF6] text-[#141413] selection:bg-[#172554]/15 selection:text-[#172554] antialiased">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Problem />
        <Assurance />
        <Benefits />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
