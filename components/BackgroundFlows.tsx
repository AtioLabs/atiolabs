"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BackgroundFlows() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // Background Transition (Waterfall to River flow)
      // On screens larger than 1024px, we transition the background
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1025px)", () => {
        gsap.to("#bg-river", {
          opacity: 1,
          scrollTrigger: {
            trigger: "#problem",
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        });
      });

      // Deep Dark Ocean Background Fade (All screen sizes)
      gsap.to("#bg-ocean", {
        opacity: 1,
        scrollTrigger: {
          trigger: "#finale",
          start: "top 85%",
          end: "center center",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="bg-waterfall" id="bg-waterfall"></div>
      <div className="bg-river" id="bg-river"></div>
      <div className="bg-ocean" id="bg-ocean"></div>
    </>
  );
}
