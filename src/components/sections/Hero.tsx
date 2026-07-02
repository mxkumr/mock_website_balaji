"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { heroContent } from "@/lib/home-content";

/** Sky band: image fades in below so the hero watermark stays visible in open sky */
const IMAGE_SKY_MASK =
  "linear-gradient(to bottom, transparent 0%, transparent 20%, rgba(0,0,0,0.45) 26%, rgba(0,0,0,0.9) 34%, black 42%, black 100%)";

/* function GraduationCapIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3L2 8l10 5 10-5-10-5zM4 10v5c0 2.5 3.5 4.5 8 4.5s8-2 8-4.5v-5"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 10l-10 5" />
    </svg>
  );
} */

function PlayIcon() {
  return (
    <svg className="ml-0.5 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

function Watermark({ y }: { y?: ReturnType<typeof useTransform<number, string>> }) {
  const text = (
    <span
      className="mx-auto max-w-5xl px-4 text-center font-serif text-2xl font-semibold leading-[1.15] tracking-tight text-white/90 drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] sm:text-3xl md:text-4xl lg:text-[2.75rem]"
      style={{ textShadow: "0 2px 30px rgba(0,0,0,0.35)" }}
    >
      {heroContent.watermark}
    </span>
  );

  const className =
    "pointer-events-none absolute inset-x-0 top-[19%] z-[2] flex justify-center select-none";

  if (y) {
    return (
      <motion.div aria-hidden className={className} style={{ y }}>
        {text}
      </motion.div>
    );
  }

  return (
    <div aria-hidden className={className}>
      {text}
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const imageLayer = (
    <Image
      src={heroContent.buildingImage}
      alt="Sree Balaji Institute of Science and Technology campus"
      fill
      priority
      quality={100}
      unoptimized
      className="object-cover object-[center_38%]"
      sizes="100vw"
    />
  );

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#6a9fd4] via-[#4a7db5] to-[#2d5080]"
    >
      {/* Sky backdrop — matches photo twilight blue */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[38%] bg-gradient-to-b from-[#7eb3e8] via-[#5a94c9] to-transparent" />

      {/* SBIST watermark in open sky */}
      {prefersReducedMotion ? <Watermark /> : <Watermark y={watermarkY} />}

      {/* Campus image — top fades out so watermark reads in sky */}
      <div
        className="absolute inset-0 z-[3]"
        style={{
          WebkitMaskImage: IMAGE_SKY_MASK,
          maskImage: IMAGE_SKY_MASK,
        }}
      >
        {prefersReducedMotion ? (
          imageLayer
        ) : (
          <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
            {imageLayer}
          </motion.div>
        )}
      </div>

      {/* Soft sky blend at horizon */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[4] h-[32%] bg-gradient-to-b from-[#5a94c9]/50 via-transparent to-transparent" />

      {/* Bottom gradient for headline legibility */}
      <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-b from-transparent via-transparent to-[#0f2744]/92" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-56 bg-gradient-to-t from-[#0f2744] via-[#0f2744]/80 to-transparent" />

      {/* Foreground content */}
      {prefersReducedMotion ? (
        <div className="absolute inset-x-0 bottom-0 z-[6] mx-auto max-w-7xl px-4 pb-10 pt-24 lg:px-8 lg:pb-14">
          <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
            <HeroContent />
            <CampusTourLink />
          </div>
        </div>
      ) : (
        <motion.div
          className="absolute inset-x-0 bottom-0 z-[6] mx-auto max-w-7xl px-4 pb-10 pt-24 lg:px-8 lg:pb-14"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
            <HeroContent />
            <CampusTourLink />
          </div>
        </motion.div>
      )}
    </section>
  );
}

function HeroContent() {
  return (
    <div className="max-w-2xl">
      {/* <motion.div
        className="mb-4 flex items-start gap-2.5 text-xs text-white/90 sm:items-center sm:text-sm"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <GraduationCapIcon />
        <span>{heroContent.eyebrow}</span>
      </motion.div> */}
      <motion.h1
        className="text-3xl leading-[1.2] text-white sm:text-4xl lg:text-[2.75rem]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.3 }}
      >
        {heroContent.title}
      </motion.h1>
    </div>
  );
}

function CampusTourLink() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.45 }}
    >
      <Link
        href={heroContent.campusTourHref}
        className="group flex flex-col items-center gap-3 text-white transition-opacity hover:opacity-90"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm transition-transform group-hover:scale-105">
          <PlayIcon />
        </span>
        <span className="text-sm font-semibold tracking-wide">
          {heroContent.campusTourLabel}
        </span>
      </Link>
    </motion.div>
  );
}
