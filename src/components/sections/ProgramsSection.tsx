"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem, premiumTransitionFast } from "@/components/motion/ScrollAnimations";
import { departments, notices } from "@/lib/home-content";

type TabId = "faculty" | "programs" | "research";

type Department = (typeof departments)[number];

const tabs: { id: TabId; label: string; icon: ReactNode }[] = [
  {
    id: "faculty",
    label: "Academic Programs",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" d="M12 3L2 8l10 5 10-5-10-5z" />
        <path strokeLinecap="round" d="M4 10v5c0 2.5 3.5 4.5 8 4.5s8-2 8-4.5v-5" />
      </svg>
    ),
  },
  {
    id: "programs",
    label: "All Programs",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path strokeLinecap="round" d="M4 4.5A2.5 2.5 0 016.5 7H20" />
        <path strokeLinecap="round" d="M6.5 7v10" />
      </svg>
    ),
  },
  {
    id: "research",
    label: "Research",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" d="M9 3h6v7l5 9H4l5-9V3z" />
        <path strokeLinecap="round" d="M9 3h6" />
      </svg>
    ),
  },
];

const studentAvatars = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
];

const bentoGridClass =
  "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[minmax(170px,1fr)]";

function BentoCell({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`h-full min-h-[170px] ${className}`}>{children}</div>;
}

function MortarboardIcon() {
  return (
    <svg className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 8l10 5 10-5-10-5zM4 10v5c0 2.5 3.5 4.5 8 4.5s8-2 8-4.5v-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 10l-10 5" />
    </svg>
  );
}

/* ─── Academic Programs grid ─── */

function DepartmentCard({
  title,
  image,
  href,
}: {
  title: string;
  image: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block h-full min-h-[220px] overflow-hidden rounded-2xl bg-primary-dark/40 motion-lift"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 400px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/30 to-transparent" />
      <h3 className="absolute bottom-0 left-0 right-0 p-5 text-lg leading-snug text-white lg:text-xl">
        {title}
      </h3>
    </Link>
  );
}

function ApplyCard() {
  return (
    <div className="flex h-full min-h-[220px] flex-col rounded-2xl border border-white/10 bg-primary-dark/80 p-6 text-white">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5">
        <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" d="M12 3L2 8l10 5 10-5-10-5z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>

      <div className="mt-5 flex -space-x-2">
        {studentAvatars.map((src) => (
          <div
            key={src}
            className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-primary-dark"
          >
            <Image src={src} alt="" fill className="object-cover" sizes="36px" />
          </div>
        ))}
      </div>

      <p className="mt-4 text-2xl font-semibold">1,500+</p>
      <p className="text-sm text-white/75">Students Enrolled</p>

      <Link
        href="/apply"
        className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold uppercase tracking-wide text-primary-dark transition-colors hover:bg-accent-hover"
      >
        Apply Now
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}

function NoticeCard() {
  return (
    <div className="flex h-full min-h-[220px] flex-col rounded-2xl bg-white p-6">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <h3 className="text-base font-semibold text-foreground">Notice</h3>
      </div>

      <ul className="mt-4 flex flex-1 flex-col justify-between gap-3">
        {notices.map((notice) => (
          <li
            key={notice.ref}
            className="flex items-start justify-between gap-3 border-b border-border pb-3 last:border-0 last:pb-0"
          >
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold leading-snug text-foreground">
                {notice.title}
              </p>
              <div className="mt-1.5 flex items-center gap-1.5 text-xs text-muted">
                <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                {notice.date}
              </div>
              <p className="mt-1 font-mono text-[10px] text-muted/80">{notice.ref}</p>
            </div>
            <button
              type="button"
              className="shrink-0 rounded-full p-2 text-muted transition-colors hover:bg-surface hover:text-primary"
              aria-label={`Download notice: ${notice.title}`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FacultyGrid() {
  const [first, second, third, fourth] = departments;

  return (
    <StaggerContainer
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:items-stretch"
      stagger={0.06}
    >
      <StaggerItem className="order-1 h-full lg:order-none lg:col-start-1 lg:row-start-1">
        <ApplyCard />
      </StaggerItem>

      {first && (
        <StaggerItem className="order-2 h-full lg:order-none lg:col-start-2 lg:row-start-1">
          <DepartmentCard title={first.title} image={first.image} href={first.href} />
        </StaggerItem>
      )}

      {second && (
        <StaggerItem className="order-3 h-full lg:order-none lg:col-start-3 lg:row-start-1">
          <DepartmentCard title={second.title} image={second.image} href={second.href} />
        </StaggerItem>
      )}

      {third && (
        <StaggerItem className="order-4 h-full lg:order-none lg:col-start-2 lg:row-start-2">
          <DepartmentCard title={third.title} image={third.image} href={third.href} />
        </StaggerItem>
      )}

      {fourth && (
        <StaggerItem className="order-5 h-full lg:order-none lg:col-start-3 lg:row-start-2">
          <DepartmentCard title={fourth.title} image={fourth.image} href={fourth.href} />
        </StaggerItem>
      )}

      <StaggerItem className="order-6 h-full sm:col-span-2 lg:order-none lg:col-span-1 lg:col-start-1 lg:row-start-2">
        <NoticeCard />
      </StaggerItem>
    </StaggerContainer>
  );
}

/* ─── All Programs (bento grid only) ─── */

function ProgramBentoCard({
  dept,
  featured = false,
}: {
  dept: Department;
  featured?: boolean;
}) {
  const categoryLabel =
    dept.category === "engineering"
      ? "Engineering"
      : dept.category === "management"
        ? "Management"
        : "Commerce";

  return (
    <Link
      href={dept.href}
      className="group relative flex h-full min-h-[170px] flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-primary-dark/60 p-6 transition-all hover:border-accent/40 hover:bg-primary-dark/80"
    >
      {featured && (
        <>
          <Image
            src={dept.image}
            alt=""
            fill
            className="object-cover opacity-25 transition-opacity group-hover:opacity-35"
            sizes="600px"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark/90 to-primary-dark/70" />
        </>
      )}
      <div className="relative">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
          {categoryLabel}
        </span>
        <h3 className={`mt-2 leading-snug text-white ${featured ? "text-2xl" : "text-lg"}`}>
          {dept.title}
        </h3>
      </div>
      <p className={`relative mt-3 leading-relaxed text-white/70 ${featured ? "text-sm" : "text-xs line-clamp-3"}`}>
        {dept.description}
      </p>
      <span className="relative mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent">
        Explore program
        <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
  );
}

function ProgramsBento() {
  const [featured, second, third, fourth] = departments;

  return (
    <StaggerContainer className={bentoGridClass} stagger={0.06}>
      {featured && (
        <StaggerItem className="sm:col-span-2 lg:col-span-4 lg:row-span-2">
          <BentoCell>
            <ProgramBentoCard dept={featured} featured />
          </BentoCell>
        </StaggerItem>
      )}

      {second && (
        <StaggerItem className="lg:col-span-2">
          <BentoCell>
            <ProgramBentoCard dept={second} />
          </BentoCell>
        </StaggerItem>
      )}

      <StaggerItem className="lg:col-span-2">
        <BentoCell>
          <div className="flex h-full flex-col justify-center rounded-2xl border border-white/15 bg-white/5 p-6 text-white">
            <p className="text-3xl font-semibold text-accent">8</p>
            <p className="mt-1 text-sm font-medium">Programs Offered</p>
            <p className="mt-2 text-xs leading-relaxed text-white/60">
              Six B.E. engineering programs plus BBA and BCA.
            </p>
          </div>
        </BentoCell>
      </StaggerItem>

      {third && (
        <StaggerItem className="lg:col-span-2">
          <BentoCell>
            <ProgramBentoCard dept={third} />
          </BentoCell>
        </StaggerItem>
      )}

      {fourth && (
        <StaggerItem className="lg:col-span-3">
          <BentoCell>
            <ProgramBentoCard dept={fourth} />
          </BentoCell>
        </StaggerItem>
      )}

      <StaggerItem className="lg:col-span-1">
        <BentoCell>
          <Link
            href="/academics"
            className="flex h-full min-h-[170px] flex-col items-center justify-center rounded-2xl border border-dashed border-accent/50 bg-accent/10 p-4 text-center motion-premium hover:border-accent hover:bg-accent/20"
          >
            <span className="text-2xl text-accent">→</span>
            <span className="mt-2 text-xs font-semibold text-accent">View all programs</span>
          </Link>
        </BentoCell>
      </StaggerItem>
    </StaggerContainer>
  );
}

/* ─── Research (simple panel) ─── */

function ResearchPanel() {
  return (
    <div className="flex min-h-[280px] flex-col justify-center rounded-2xl border border-white/15 bg-primary-dark/50 p-8 text-center lg:p-12">
      <p className="text-lg text-white lg:text-xl">Research & Innovation at SBIST</p>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
        Setting clearly defined short and long term research goals with timelines,
        evaluate the progress and ensure that all relevant infrastructural and
        human resource support is available to achieve the goals.
      </p>
      <Link
        href="/research"
        className="mt-8 inline-flex justify-center text-sm font-semibold text-accent hover:text-accent-hover"
      >
        Explore research →
      </Link>
    </div>
  );
}

function TabPanel({ activeTab }: { activeTab: TabId }) {
  if (activeTab === "faculty") return <FacultyGrid />;
  if (activeTab === "programs") return <ProgramsBento />;
  return <ResearchPanel />;
}

export function ProgramsSection() {
  const [activeTab, setActiveTab] = useState<TabId>("faculty");
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-primary py-20 lg:py-28" id="programs">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-white/80">
                <MortarboardIcon />
                <span className="text-sm font-medium">Programs & Study</span>
              </div>
              <h2 className="mt-3 text-3xl text-white lg:text-4xl">Academics & Programs</h2>
            </div>

            <nav className="flex flex-wrap gap-6 border-b border-white/10 lg:gap-8" aria-label="Program categories">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={[
                      "flex items-center gap-2 border-b-2 pb-3 text-sm font-medium motion-premium",
                      isActive
                        ? "border-accent text-accent"
                        : "border-transparent text-white/60 hover:text-white",
                    ].join(" ")}
                  >
                    <span className={isActive ? "text-accent" : "text-white/50"}>{tab.icon}</span>
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </ScrollReveal>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
              transition={premiumTransitionFast}
            >
              <TabPanel activeTab={activeTab} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
