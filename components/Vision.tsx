"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import TeaCharacter from "./TeaCharacter";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Vision() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".vision-line", {
        y: 70,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 60%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={root} id="vision" className="vision-editorial section-pad">
      <div id="benefits" className="sr-only" aria-hidden="true" />
      <div className="section-kicker">
        <span>04 / Everyday business activity</span>
        <span>You describe what happened</span>
      </div>
      <div className="benefits-scene-grid">
        <h2 className="font-display">
          <span className="vision-line">You don’t need</span>
          <span className="vision-line">to know</span>
          <span className="vision-line">
            <em>accounting</em>
          </span>
        </h2>
        <div className="freedom-scene">
          <div className="freedom-halo" />
          <TeaCharacter />
          <div className="business-message">
            <span className="tiny-label">You tell River</span>
            <p>
              Paid office rent
              <br />
              for this month.
            </p>
            <span className="message-tick">✓✓</span>
          </div>
          <div className="accounting-slip">
            <span className="tiny-label">River records</span>
            <p>Office Rent Expense</p>
            <p>Input GST</p>
            <p>
              Bank <span>✓</span>
            </p>
          </div>
          <div className="freedom-ground" />
        </div>
      </div>
      <div className="vision-bottom">
        <span className="tiny-label">
          You only need to describe what happened.
        </span>
        <div>
          <p>
            River understands the accounting behind everyday business activity.
          </p>
          <p className="vision-first">
            It works out how that should be recorded.
          </p>
        </div>
      </div>
    </section>
  );
}
