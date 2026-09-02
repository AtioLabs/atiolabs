"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

interface MagneticFloaterProps {
  children: React.ReactNode;
  className?: string;
  draggable?: boolean;
  magneticStrength?: number;
  tiltAngle?: number;
  floatAmplitudeY?: number;
  floatDuration?: number;
}

export default function MagneticFloater({
  children,
  className = "",
  draggable = true,
  magneticStrength = 0.35,
  tiltAngle = 12,
  floatAmplitudeY = 6,
  floatDuration = 3.2,
}: MagneticFloaterProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(Draggable);

    const el = containerRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    // 1. Organic Zero-Gravity Floating (Lissajous Sine Wave)
    const floatTween = gsap.to(inner, {
      y: `+=${floatAmplitudeY}`,
      x: `+=${floatAmplitudeY * 0.4}`,
      rotation: "+=1.5",
      duration: floatDuration,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // 2. Magnetic Attraction & 3D Gyroscopic Tilt
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Magnetic pull and 3D perspective rotation
      gsap.to(inner, {
        x: deltaX * magneticStrength,
        y: deltaY * magneticStrength,
        rotateX: -deltaY * (tiltAngle / (rect.height / 2)),
        rotateY: deltaX * (tiltAngle / (rect.width / 2)),
        duration: 0.35,
        ease: "power2.out",
        transformPerspective: 800,
        overwrite: "auto",
      });
    };

    const handleMouseLeave = () => {
      // Elastic spring back to center
      gsap.to(inner, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto",
        onComplete: () => {
          floatTween.restart(true);
        },
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    // 3. Tactile Mechanical Press Reaction
    const handlePointerDown = () => {
      gsap.to(inner, {
        scale: 0.92,
        scaleY: 0.88,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const handlePointerUp = () => {
      gsap.to(inner, {
        scale: 1,
        scaleY: 1,
        duration: 0.45,
        ease: "elastic.out(1.2, 0.35)",
      });
    };

    el.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    // 4. GSAP Draggable Physics with Inertia (If enabled)
    let draggableInstance: globalThis.Draggable[] = [];
    if (draggable) {
      draggableInstance = Draggable.create(el, {
        type: "x,y",
        edgeResistance: 0.75,
        inertia: true,
        cursor: "grab",
        activeCursor: "grabbing",
        zIndexBoost: true,
        onDragStart: () => {
          floatTween.pause();
        },
        onDragEnd: () => {
          floatTween.resume();
        },
      });
    }

    return () => {
      floatTween.kill();
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      draggableInstance.forEach((d) => d.kill());
    };
  }, [draggable, floatAmplitudeY, floatDuration, magneticStrength, tiltAngle]);

  return (
    <div
      ref={containerRef}
      style={{ touchAction: "none" }}
      className={`select-none will-change-transform ${className}`}
    >
      <div ref={innerRef} className="will-change-transform transform-gpu">
        {children}
      </div>
    </div>
  );
}
