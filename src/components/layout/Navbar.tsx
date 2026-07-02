"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { NavIcon } from "@/components/layout/NavIcons";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { mainNavigation, siteConfig } from "@/lib/navigation";
import type { NavItem } from "@/lib/navigation";

type NavbarProps = {
  variant?: "default" | "hero";
};

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="M20 20l-3-3" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function ApplyArrowIcon() {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1a1a1a] text-white">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H9M17 7v8" />
      </svg>
    </span>
  );
}

type NavLinkItemProps = {
  item: NavItem;
  activeMenu: string | null;
  onToggle: (label: string) => void;
  useLightNav: boolean;
};

function DesktopNavItem({ item, activeMenu, onToggle, useLightNav }: NavLinkItemProps) {
  const hasMega = Boolean(item.megaMenu);
  const isOpen = activeMenu === item.label;
  const linkClass = useLightNav
    ? "text-white hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
    : "text-foreground hover:text-primary";

  if (!hasMega && item.href) {
    return (
      <Link
        href={item.href}
        className={`rounded-lg px-3 py-2 text-sm font-medium motion-premium ${linkClass}`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-haspopup="true"
      onClick={() => onToggle(item.label)}
      onMouseEnter={() => onToggle(item.label)}
      className={[
        "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium motion-premium",
        linkClass,
        isOpen
          ? useLightNav
            ? "bg-white/15 text-white"
            : "bg-surface text-primary"
          : "",
      ].join(" ")}
    >
      {item.label}
      <ChevronDown className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
    </button>
  );
}

function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [expanded, setExpanded] = useState(false);

  if (!item.megaMenu && item.href) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="block rounded-xl border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground motion-premium hover:border-primary/20 hover:shadow-sm"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface/50">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-foreground"
      >
        {item.label}
        <ChevronDown className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
      {expanded && (
        <div className="space-y-3 border-t border-border p-3">
          {item.megaMenu?.map((column) => (
            <div key={column.title}>
              <p className="mb-1.5 text-[9px] font-bold uppercase tracking-wider text-primary/80">
                {column.title}
              </p>
              <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="group flex items-start gap-2 rounded-lg border border-border bg-white px-2.5 py-2 motion-premium hover:border-primary/20 hover:shadow-sm"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                      <NavIcon name={link.icon} className="h-3.5 w-3.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold leading-tight text-foreground">
                        {link.label}
                      </span>
                      {link.description && (
                        <span className="mt-0.5 block text-[10px] leading-snug text-muted">
                          {link.description}
                        </span>
                      )}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          {item.featured && (
            <Link
              href={item.featured.ctaHref}
              onClick={onClose}
              className="flex items-center justify-between rounded-lg bg-primary px-3 py-2.5 text-white"
            >
              <div>
                <p className="text-base font-semibold leading-none">{item.featured.stat}</p>
                <p className="mt-0.5 text-[9px] uppercase tracking-wide text-white/75">
                  {item.featured.statLabel}
                </p>
                <p className="mt-1 text-xs font-semibold">{item.featured.title}</p>
              </div>
              <span className="rounded-md bg-accent px-2 py-1 text-[10px] font-semibold text-primary">
                {item.featured.ctaLabel}
              </span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export function Navbar({ variant = "default" }: NavbarProps) {
  const isHero = variant === "hero";
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMegaMenu = useCallback(() => setActiveMenu(null), []);
  const toggleMenu = useCallback((label: string) => {
    setActiveMenu((prev) => (prev === label ? null : label));
  }, []);

  useEffect(() => {
    if (!isHero) return;

    function onScroll() {
      const scrolled = window.scrollY > 16;
      setIsScrolled(scrolled);
      if (scrolled) setActiveMenu(null);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHero]);

  const isHeroTransparent = isHero && !isScrolled;
  const useLightNav = isHeroTransparent;

  const headerClass = [
    "top-0 z-[100] w-full transition-[background-color,box-shadow] duration-300",
    isHero
      ? isHeroTransparent
        ? "absolute inset-x-0 bg-gradient-to-b from-[#0f2744]/60 via-[#0f2744]/25 to-transparent"
        : "fixed inset-x-0 bg-white shadow-sm"
      : "sticky inset-x-0 bg-white shadow-sm",
  ].join(" ");

  const navRowClass =
    "relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 lg:px-8";

  const iconClass = useLightNav
    ? "text-white hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
    : "text-foreground hover:text-primary";

  const activeNavItem = mainNavigation.find((item) => item.label === activeMenu);

  return (
    <header className={headerClass} onMouseLeave={closeMegaMenu}>
      {!isHero && (
        <div className="hidden border-b border-border bg-primary lg:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs text-white/90 lg:px-8">
            <div className="flex items-center gap-6">
              {siteConfig.phone && (
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              )}
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
              <span className="text-white/70">{siteConfig.address}</span>
            </div>
          </div>
        </div>
      )}

      <nav className={navRowClass}>
        <Link
          href="/"
          className={[
            "inline-flex shrink-0 items-center overflow-hidden rounded-lg px-1 py-0.5 transition-shadow",
            useLightNav
              ? "bg-[#f5f3ec] shadow-sm ring-1 ring-white/25 backdrop-blur-sm hover:shadow-md"
              : "bg-[#f5f3ec] shadow-sm ring-1 ring-black/5 hover:shadow-md",
          ].join(" ")}
          aria-label={siteConfig.name}
        >
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={360}
            height={96}
            className="h-10 w-auto max-w-[220px] object-contain object-left sm:h-12 sm:max-w-[300px] lg:h-14 lg:max-w-[360px]"
            priority
          />
        </Link>

        <div className="hidden items-center lg:flex lg:gap-0.5">
          {mainNavigation.map((item) => (
            <DesktopNavItem
              key={item.label}
              item={item}
              activeMenu={activeMenu}
              onToggle={toggleMenu}
              useLightNav={useLightNav}
            />
          ))}
        </div>

        <div className="flex items-center gap-3 lg:gap-4">
          <button
            type="button"
            className={`hidden p-1.5 motion-premium lg:block ${iconClass}`}
            aria-label="Search"
          >
            <SearchIcon />
          </button>

          <span
            className={`hidden h-5 w-px lg:block ${useLightNav ? "bg-white/30" : "bg-border"}`}
          />

          <button
            type="button"
            className={`p-1.5 motion-premium lg:hidden ${iconClass}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <Link
            href="/apply"
            className="hidden items-center gap-2 rounded-full bg-[#f5c518] px-4 py-2 text-xs font-bold text-[#1a1a1a] motion-premium hover:bg-[#e8b80f] sm:inline-flex sm:gap-3 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Apply Now
            <ApplyArrowIcon />
          </Link>
        </div>
      </nav>

      {activeNavItem?.megaMenu && (
        <MegaMenu
          item={activeNavItem}
          isOpen={Boolean(activeMenu)}
          onClose={closeMegaMenu}
        />
      )}

      {mobileOpen && (
        <div className="border-t border-border bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {mainNavigation.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                onClose={() => setMobileOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
