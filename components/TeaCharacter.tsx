"use client";
import { useEffect, useRef, useState } from "react";

export default function TeaCharacter() {
  const [frame, setFrame] = useState(0);
  const eyes = useRef<HTMLImageElement>(null);
  const actor = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setFrame((f) => (f + 1) % 4), 1200);
    return () => window.clearInterval(timer);
  }, []);
  useEffect(() => {
    const scene = actor.current?.closest(".freedom-scene");
    if (!scene) return;
    const reset = () => {
      if (eyes.current) eyes.current.style.transform = "translate(0, 0)";
    };
    const move = (event: Event) => {
      if (
        !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        return;
      const e = event as PointerEvent;
      const r = actor.current!.getBoundingClientRect();
      const x = Math.max(
        -1,
        Math.min(1, (e.clientX - (r.left + r.width * 0.56)) / (r.width * 0.65)),
      );
      const y = Math.max(
        -1,
        Math.min(1, (e.clientY - (r.top + r.height * 0.23)) / (r.height * 0.5)),
      );
      if (eyes.current)
        eyes.current.style.transform = `translate(${Math.round(x * 2)}px, ${Math.round(y * 1.5)}px)`;
    };
    scene.addEventListener("pointermove", move);
    scene.addEventListener("pointerleave", reset);
    return () => {
      scene.removeEventListener("pointermove", move);
      scene.removeEventListener("pointerleave", reset);
    };
  }, []);
  return (
    <div
      ref={actor}
      className="tea-character tea-owner"
      role="img"
      aria-label="An owner sipping tea. On desktop, the eyes follow your cursor within the scene."
    >
      {[0, 1, 2, 3].flatMap((f) =>
        ["body", "eyes"].map((part) => (
          <link
            key={`${part}-${f}`}
            rel="preload"
            as="image"
            href={`/sprites/review/owner-tea-${part}-${f}.png`}
          />
        )),
      )}
      <img
        className="tea-body-layer"
        src={`/sprites/review/owner-tea-body-${frame}.png`}
        alt=""
        draggable={false}
      />
      <img
        ref={eyes}
        className="tea-eye-layer"
        src={`/sprites/review/owner-tea-eyes-${frame}.png`}
        alt=""
        draggable={false}
      />
    </div>
  );
}
