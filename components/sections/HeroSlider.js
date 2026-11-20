"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslation } from '@/lib/useTranslation';

const EnglishImages = [
  "/mechnova/banner/english-website-banner1.webp",
  "/mechnova/banner/english-website-banner2.webp",
  "/mechnova/banner/english-website-banner3.webp",
  "/mechnova/banner/english-website-banner4.webp",
];

const HindiImages = [
  "/mechnova/banner/hindi-website-banner1.webp",
  "/mechnova/banner/hindi-website-banner2.webp",
  "/mechnova/banner/hindi-website-banner3.webp",
  "/mechnova/banner/hindi-website-banner4.webp",
];

const DefaultImages = [
  "/mechnova/banner/website-banner1.webp",
  "/mechnova/banner/website-banner2.webp",
  "/mechnova/banner/website-banner3.webp",
  "/mechnova/banner/website-banner4.webp",
];

export default function HeroSlider() {
  const { locale } = useTranslation();
  const sliderRef = useRef(null);
  const indexRef = useRef(0);

  // Select images based on locale
  let selectedImages;
  if (locale === 'en') selectedImages = EnglishImages;
  else if (locale === 'hi') selectedImages = HindiImages;
  else selectedImages = DefaultImages;

  // Duplicate images for infinite effect
  const infiniteImages = [...selectedImages, ...selectedImages, ...selectedImages, ...selectedImages];
  const total = infiniteImages.length;
  const visibleCount = selectedImages.length;

  useEffect(() => {
    if (!sliderRef.current) return;
    // Start at the first set
    sliderRef.current.scrollLeft = sliderRef.current.offsetWidth * visibleCount;
    indexRef.current = visibleCount;
    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      indexRef.current++;
      sliderRef.current.scrollTo({
        left: sliderRef.current.offsetWidth * indexRef.current,
        behavior: "smooth"
      });
      // If at the end, reset to the middle set instantly
      if (indexRef.current === total - visibleCount) {
        setTimeout(() => {
          if (!sliderRef.current) return;
          sliderRef.current.scrollTo({
            left: sliderRef.current.offsetWidth * visibleCount,
            behavior: "auto"
          });
          indexRef.current = visibleCount;
        }, 300);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [selectedImages, visibleCount, total]);

  return (
    <div
      ref={sliderRef}
      className="w-full flex overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {infiniteImages.map((src, i) => (
        <div key={i} className="min-w-full w-full flex-shrink-0 relative snap-center">
          <img
            src={src}
            alt={`Hero Slide ${(i % visibleCount) + 1}`}
            className="w-full h-auto block object-cover"
          />
        </div>
      ))}
    </div>
  );
}
