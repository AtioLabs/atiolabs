"use client";

import React from "react";

interface PixelSpriteSheetProps {
  sheetSrc: string;
  totalFrames: number;
  frameWidth: number;
  frameHeight: number;
  durationSeconds?: number;
  className?: string;
  alt?: string;
}

export default function PixelSpriteSheet({
  sheetSrc,
  totalFrames,
  frameWidth,
  frameHeight,
  durationSeconds = 0.8,
  className = "",
  alt = "Pixel Sprite Animation",
}: PixelSpriteSheetProps) {
  const animKey = `sprite_${totalFrames}_${Math.round(durationSeconds * 100)}_${frameWidth}`;
  const totalWidth = frameWidth * totalFrames;

  return (
    <div
      role="img"
      aria-label={alt}
      style={{
        width: `${frameWidth}px`,
        height: `${frameHeight}px`,
        backgroundImage: `url(${sheetSrc})`,
        backgroundSize: `${totalWidth}px ${frameHeight}px`,
        backgroundRepeat: "no-repeat",
        imageRendering: "pixelated",
        animation: `${animKey} ${durationSeconds}s steps(${totalFrames}) infinite`,
      }}
      className={`inline-block select-none pointer-events-none ${className}`}
    >
      <style jsx>{`
        @keyframes ${animKey} {
          from {
            background-position: 0px 0px;
          }
          to {
            background-position: -${totalWidth}px 0px;
          }
        }
      `}</style>
    </div>
  );
}
