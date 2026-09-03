"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      autoRaf: false, // Critical: Disable Lenis internal RAF to prevent dual-RAF collision with GSAP
    });

    lenisRef.current = lenis;

    // Connect Lenis scroll updates directly to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Single unified GSAP RAF loop for perfect frame sync
    const updateGsap = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateGsap);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateGsap);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // When route changes (e.g. / to /about or /about to /), reset scroll to top cleanly
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
      ScrollTrigger.refresh();
    }
  }, [pathname]);

  return <>{children}</>;
}
