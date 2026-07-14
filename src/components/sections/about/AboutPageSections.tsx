"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { NavIcon } from "@/components/layout/NavIcons";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollAnimations";
import { aboutPageContent } from "@/lib/about-content";
import type { NavIconName } from "@/lib/navigation";

/* ─── Shared UI primitives ─────────────────────────────────────────── */

function MortarboardIcon({ className = "h-5 w-5 shrink-0 text-accent" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 8l10 5 10-5-10-5zM4 10v5c0 2.5 3.5 4.5 8 4.5s8-2 8-4.5v-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 10l-10 5" />
    </svg>
  );
}

function DecorativeBlobs() {
  return (
    <>
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10" aria-hidden />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-primary/5" aria-hidden />
    </>
  );
}

function SectionCard({
  children,
  className = "",
  noPadding = false,
}: {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm ${className}`}>
      <DecorativeBlobs />
      <div className={noPadding ? "relative" : "relative"}>{children}</div>
    </div>
  );
}

function CardHeaderStrip({
  eyebrow,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`relative border-b border-border bg-surface/60 px-6 py-5 lg:px-8 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <div className={`flex items-center gap-2.5 ${align === "center" ? "justify-center" : ""}`}>
        {align === "left" && <MortarboardIcon />}
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </span>
      </div>
      {subtitle && (
        <p className={`mt-1.5 text-sm text-muted ${align === "center" ? "" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
      <div
        className={`mt-3 h-0.5 w-10 rounded-full bg-accent/50 ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden
      />
    </div>
  );
}

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <MortarboardIcon />
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {label}
      </span>
    </div>
  );
}

function IconBadge({
  icon,
  size = "md",
}: {
  icon: NavIconName;
  size?: "sm" | "md" | "lg";
}) {
  const config = {
    sm: { box: "h-10 w-10 rounded-xl", icon: "h-4 w-4" },
    md: { box: "h-12 w-12 rounded-xl", icon: "h-5 w-5" },
    lg: { box: "h-14 w-14 rounded-2xl", icon: "h-6 w-6" },
  }[size];

  return (
    <span
      className={`flex shrink-0 items-center justify-center bg-primary/5 text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:ring-primary/20 group-hover:shadow-md ${config.box}`}
    >
      <NavIcon name={icon} className={config.icon} />
    </span>
  );
}

function AccentBar({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-0.5 w-8 rounded-full bg-accent/40 transition-all duration-300 group-hover:w-12 group-hover:bg-accent ${className}`}
      aria-hidden
    />
  );
}

function ArrowPillLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:border-primary/25 hover:shadow-md"
    >
      {children}
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white transition-transform group-hover:scale-110">
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
  );
}

function QuoteMark() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white shadow-sm">
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
      </svg>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg className="h-6 w-6 translate-x-0.5 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

function useCountUp(target: number, duration: number, started: boolean): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;
    let frame: number;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, started]);

  return count;
}

function StatBlock({
  value,
  suffix,
  label,
  icon,
  started,
  showDivider,
}: {
  value: number;
  suffix?: string;
  label: string;
  icon: NavIconName;
  started: boolean;
  showDivider?: boolean;
}) {
  const count = useCountUp(value, 2000, started);

  return (
    <div className="group relative flex h-full flex-col items-center px-4 py-6 text-center sm:py-4">
      {showDivider && (
        <div
          className="absolute right-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-border to-transparent sm:block"
          aria-hidden
        />
      )}

      <IconBadge icon={icon} size="lg" />

      <p className="mt-5 text-4xl font-bold leading-none tracking-tight text-primary lg:text-[2.75rem]">
        {count.toLocaleString()}
        <span className="text-accent">{suffix}</span>
      </p>

      <p className="mt-3 max-w-[9rem] text-xs font-semibold uppercase tracking-[0.14em] text-muted">
        {label}
      </p>

      <AccentBar className="mt-4" />
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/5 text-sm font-bold text-primary ring-1 ring-primary/10">
        {rating.toFixed(1)}
      </span>
      <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`h-4 w-4 ${i < Math.floor(rating) ? "text-accent" : i < rating ? "text-accent/50" : "text-border"}`}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
    </div>
  );
}

/* ─── Sections ─────────────────────────────────────────────────────── */

export function AboutMainSection() {
  const { sidebar, main, stats } = aboutPageContent;
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-14 xl:gap-16">
          <ScrollReveal direction="left">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <SectionCard noPadding>
                <CardHeaderStrip eyebrow={sidebar.title} subtitle="Explore our institute" align="left" />
                <nav aria-label="About navigation">
                  <ul className="divide-y divide-border">
                    {sidebar.links.map((link) => {
                      const isActive = link.href === "/about";
                      return (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className={`group flex items-center gap-3 px-5 py-3.5 text-sm font-medium transition-colors ${
                              isActive
                                ? "bg-primary/5 text-primary"
                                : "text-foreground hover:bg-surface hover:text-primary"
                            }`}
                          >
                            <IconBadge icon={link.icon} size="sm" />
                            <span className="flex-1">{link.label}</span>
                            {isActive && (
                              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <div className="group relative aspect-[4/3] overflow-hidden border-t border-border">
                  <Image
                    src={sidebar.image}
                    alt="Students at SBIST"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <p className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.12em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Campus Life
                  </p>
                </div>
              </SectionCard>
            </aside>
          </ScrollReveal>

          <div className="min-w-0 space-y-8">
            <ScrollReveal direction="right">
              <SectionCard>
                <CardHeaderStrip
                  eyebrow={main.eyebrow}
                  subtitle="Learn about our mission, values, and community"
                  align="left"
                />
                <div className="px-6 py-8 lg:px-8 lg:py-10">
                  <h2 className="text-3xl leading-tight text-foreground lg:text-[2.25rem]">
                    {main.title}
                  </h2>
                  <div className="mt-6 space-y-4 border-b border-border pb-8 text-[15px] leading-relaxed text-muted">
                    {main.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>
                  <AccentBar className="group mt-6" />
                </div>
              </SectionCard>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <SectionCard>
                <div className="px-6 py-8 lg:px-8 lg:py-10">
                  <div className="flex items-start gap-4">
                    <QuoteMark />
                    <div className="min-w-0 flex-1">
                      <p className="font-serif text-base italic leading-relaxed text-foreground lg:text-lg">
                        &ldquo;{main.quote.text}&rdquo;
                      </p>
                      <footer className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                        <div className="text-right">
                          <p className="text-sm font-semibold text-primary">{main.quote.author}</p>
                          <p className="text-xs text-muted">{main.quote.role}</p>
                        </div>
                      </footer>
                    </div>
                  </div>
                </div>
              </SectionCard>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <SectionCard>
                <div className="px-6 py-6 lg:px-8">
                  <p className="text-[15px] leading-relaxed text-muted">{main.closingParagraph}</p>
                </div>
              </SectionCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[main.images.primary, main.images.secondary].map((src, i) => (
                  <div
                    key={src}
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-white shadow-sm motion-lift"
                  >
                    <Image
                      src={src}
                      alt={i === 0 ? "SBIST campus building" : "Students in lecture hall at SBIST"}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-primary/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-primary/30 px-4 py-3 backdrop-blur-sm">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white">
                        {i === 0 ? "Our Campus" : "Student Life"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <div ref={statsRef}>
              <SectionCard noPadding>
                <CardHeaderStrip
                  eyebrow="SBIST at a Glance"
                  subtitle="Numbers that reflect our growing engineering community"
                />
                <StaggerContainer
                  className="relative grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0"
                  stagger={0.08}
                >
                  {stats.map((stat, index) => (
                    <StaggerItem key={stat.label}>
                      <StatBlock
                        value={stat.value}
                        suffix={stat.suffix}
                        label={stat.label}
                        icon={stat.icon}
                        started={statsStarted}
                        showDivider={index < stats.length - 1}
                      />
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </SectionCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutVisionSection() {
  const { vision } = aboutPageContent;

  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <SectionCard noPadding>
            <CardHeaderStrip
              eyebrow="Our Vision"
              subtitle="Shaping engineers who lead with integrity and innovation"
            />
            <div className="px-6 py-8 lg:px-10 lg:py-10">
              <h2 className="text-3xl leading-tight text-foreground lg:text-4xl">
                {vision.title}
              </h2>
              <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-muted lg:text-base">
                {vision.description}
              </p>
            </div>
          </SectionCard>
        </ScrollReveal>

        <StaggerContainer className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8" stagger={0.08}>
          {vision.pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <SectionCard className="group motion-lift h-full">
                <div className="px-6 py-8 lg:px-8 lg:py-10">
                  <IconBadge icon={pillar.icon} size="md" />
                  <h3 className="mt-5 text-xl text-foreground">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.description}</p>
                  <AccentBar className="mt-6" />
                </div>
              </SectionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function AboutCampusTourSection() {
  const { campusTour } = aboutPageContent;

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionCard noPadding>
          <div className="grid items-stretch lg:grid-cols-2">
            <ScrollReveal direction="left" className="flex flex-col">
              <CardHeaderStrip
                eyebrow="Virtual Tour"
                subtitle="Walk through our Chrompet campus"
                align="left"
              />
              <div className="flex flex-1 flex-col px-6 py-8 lg:px-10 lg:py-10">
                <h2 className="text-3xl leading-tight text-foreground lg:text-4xl">
                  {campusTour.title}
                </h2>
                <p className="mt-5 flex-1 text-[15px] leading-relaxed text-muted lg:text-base">
                  {campusTour.description}
                </p>
                <div className="mt-8">
                  <ArrowPillLink href={campusTour.videoHref}>Watch Campus Tour</ArrowPillLink>
                </div>
                <AccentBar className="group mt-8" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <div className="group relative min-h-[280px] overflow-hidden border-t border-border lg:min-h-full lg:border-l lg:border-t-0">
                <Image
                  src={campusTour.image}
                  alt="SBIST campus aerial view"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <div className="absolute inset-0 bg-primary/30 transition-colors group-hover:bg-primary/40" />
                <Link
                  href={campusTour.videoHref}
                  className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  aria-label="Play campus tour video"
                >
                  <span className="absolute inset-0 -m-2 rounded-full border-2 border-white/40" />
                  <PlayIcon />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-primary/40 px-5 py-4 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white">
                    Chrompet Campus · Chennai
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </SectionCard>
      </div>
    </section>
  );
}

export function AboutTestimonialsSection() {
  const { testimonials } = aboutPageContent;

  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <SectionCard noPadding>
            <CardHeaderStrip eyebrow="Voices from Campus" subtitle={testimonials.description} />
          </SectionCard>
        </ScrollReveal>

        <ScrollReveal delay={0.05} className="mt-8 text-center">
          <h2 className="text-3xl leading-tight text-foreground lg:text-4xl">
            {testimonials.title}
          </h2>
        </ScrollReveal>

        <StaggerContainer className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-8" stagger={0.06}>
          {testimonials.items.map((item) => (
            <StaggerItem key={item.name}>
              <SectionCard className="group motion-lift flex h-full flex-col">
                <div className="flex flex-1 flex-col px-6 py-8 lg:px-8 lg:py-10">
                  <div className="flex items-center justify-between gap-4">
                    <StarRating rating={item.rating} />
                    <QuoteMark />
                  </div>
                  <blockquote className="mt-5 flex-1 font-serif text-base italic leading-relaxed text-foreground">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-border ring-2 ring-primary/5">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-primary">{item.name}</p>
                      <p className="text-xs text-muted">{item.role}</p>
                    </div>
                    <AccentBar />
                  </footer>
                </div>
              </SectionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function AboutGallerySection() {
  const { gallery } = aboutPageContent;

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <SectionCard noPadding>
            <div className="flex flex-col items-center justify-between gap-6 px-6 py-6 sm:flex-row lg:px-8 lg:py-8">
              <div>
                <SectionEyebrow label={gallery.subtitle} />
                <h2 className="mt-3 text-3xl text-foreground lg:text-4xl">{gallery.title}</h2>
                <AccentBar className="group mt-4" />
              </div>
              <ArrowPillLink href={gallery.ctaHref}>Discover Campus Life</ArrowPillLink>
            </div>
          </SectionCard>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-6">
              {gallery.images.map((image, index) => (
                <div
                  key={image.src}
                  className={`group relative overflow-hidden bg-white ${
                    index === 0
                      ? "col-span-2 row-span-2 aspect-square sm:aspect-auto sm:min-h-[280px]"
                      : "aspect-square"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full border-t border-white/10 bg-primary/50 px-4 py-3 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white">
                      {image.alt}
                    </p>
                    {image.caption && (
                      <p className="mt-0.5 text-[11px] text-white/75">{image.caption}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
