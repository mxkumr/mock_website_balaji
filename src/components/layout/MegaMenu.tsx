"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { NavItem, NavLink } from "@/lib/navigation";

type MegaMenuProps = {
  item: NavItem;
  isOpen: boolean;
  onClose: () => void;
};

const bentoSpanClass: Record<NonNullable<NavLink["bento"]>, string> = {
  sm: "col-span-1 row-span-1",
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
};

function ArrowIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function BentoNavCard({ link, onClose }: { link: NavLink; onClose: () => void }) {
  const span = link.bento ?? "sm";
  const isTall = span === "tall";

  return (
    <Link
      href={link.href}
      role="menuitem"
      onClick={onClose}
      className={[
        "group flex h-full min-h-[88px] flex-col justify-between rounded-xl border border-border bg-surface/60 p-3.5 motion-premium hover:border-primary/25 hover:bg-white hover:shadow-md",
        bentoSpanClass[span],
        isTall ? "min-h-[184px]" : "",
      ].join(" ")}
    >
      <div>
        <p className="text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
          {link.label}
        </p>
        {link.description && (
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
            {link.description}
          </p>
        )}
      </div>
      <span className="mt-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-primary opacity-0 shadow-sm transition-all group-hover:translate-x-0.5 group-hover:opacity-100">
        <ArrowIcon />
      </span>
    </Link>
  );
}

function FeaturedBentoCard({
  featured,
  onClose,
}: {
  featured: NonNullable<NavItem["featured"]>;
  onClose: () => void;
}) {
  return (
    <div className="col-span-2 row-span-2 flex min-h-[184px] flex-col overflow-hidden rounded-xl bg-primary shadow-md">
      <div className="relative h-28 shrink-0">
        <Image
          src={featured.image}
          alt=""
          fill
          className="object-cover opacity-90"
          sizes="320px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-4 text-white">
        <p className="text-2xl font-semibold leading-none">{featured.stat}</p>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/75">
          {featured.statLabel}
        </p>
        <p className="mt-3 text-sm font-semibold leading-snug">{featured.title}</p>
        <p className="mt-1 line-clamp-2 text-xs text-white/70">{featured.description}</p>
        <Link
          href={featured.ctaHref}
          onClick={onClose}
          className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-lg bg-accent px-3.5 py-2 text-xs font-semibold text-primary motion-premium hover:bg-accent-hover"
        >
          {featured.ctaLabel}
          <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}

export function MegaMenu({ item, isOpen, onClose }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item.megaMenu) return null;

  const featured = item.featured;
  const allLinks = item.megaMenu.flatMap((column) => column.links);
  const columns = item.megaMenu;

  return (
    <div
      ref={menuRef}
      className="absolute inset-x-0 top-full z-50 w-full border-t border-border bg-white shadow-2xl animate-fade-in-up"
      role="menu"
      aria-label={`${item.label} submenu`}
    >
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8 lg:py-8">
        <div className="mb-4 flex items-center justify-between gap-4 border-b border-border pb-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
              Explore
            </p>
            <p className="mt-0.5 font-serif text-lg text-foreground">{item.label}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
          <div className="min-w-0 flex-1">
            {columns.length > 1 && (
              <div className="mb-3 hidden flex-wrap gap-x-6 gap-y-1 lg:flex">
                {columns.map((column) => (
                  <p
                    key={column.title}
                    className="text-[10px] font-bold uppercase tracking-wider text-primary"
                  >
                    {column.title}
                  </p>
                ))}
              </div>
            )}

            <div
              className="grid auto-rows-[minmax(88px,auto)] grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4"
              role="none"
            >
              {allLinks.map((link) => (
                <BentoNavCard key={link.href} link={link} onClose={onClose} />
              ))}
            </div>
          </div>

          {featured && (
            <div className="grid w-full shrink-0 grid-cols-2 gap-2.5 sm:gap-3 lg:w-64">
              <FeaturedBentoCard featured={featured} onClose={onClose} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
