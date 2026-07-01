"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
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
  onClose: () => void;
  isHero: boolean;
  isScrolled: boolean;
};

function DesktopNavItem({
  item,
  activeMenu,
  onToggle,
  onClose,
  isHero,
  isScrolled,
}: NavLinkItemProps) {
  const hasMega = Boolean(item.megaMenu);
  const isOpen = activeMenu === item.label;
  const linkClass =
    isHero && !isScrolled
      ? "text-white/90 hover:text-white"
      : "text-foreground hover:text-primary";

  if (!hasMega && item.href) {
    return (
      <Link href={item.href} className={`px-3 py-2 text-sm font-medium transition-colors ${linkClass}`}>
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => onToggle(item.label)}
        onMouseEnter={() => onToggle(item.label)}
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${linkClass} ${isOpen ? (isHero && !isScrolled ? "text-white" : "text-primary") : ""}`}
      >
        {item.label}
        <ChevronDown className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <MegaMenu item={item} isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [expanded, setExpanded] = useState(false);

  if (!item.megaMenu && item.href) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface"
      >
        {item.label}
        <ChevronDown className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
      {expanded && item.megaMenu && (
        <div className="ml-3 border-l border-border pl-3">
          {item.megaMenu.map((col) => (
            <div key={col.title} className="py-2">
              <p className="mb-1 px-3 text-xs font-bold uppercase tracking-wider text-primary">
                {col.title}
              </p>
              {col.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="block rounded-md px-3 py-1.5 text-sm text-muted hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
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
      setIsScrolled(window.scrollY > 60);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHero]);

  const headerClass = [
    "z-50 w-full transition-all duration-300",
    isHero
      ? isScrolled
        ? "fixed top-0 bg-white shadow-sm"
        : "absolute top-0 bg-transparent"
      : "sticky top-0 bg-white shadow-sm",
  ].join(" ");

  const iconClass =
    isHero && !isScrolled
      ? "text-white/90 hover:text-white"
      : "text-foreground hover:text-primary";

  return (
    <header className={headerClass}>
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

      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8"
        onMouseLeave={closeMegaMenu}
      >
        <Link
          href="/"
          className="inline-flex shrink-0 items-center rounded-lg bg-white px-2.5 py-1.5 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
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

        <div className="hidden items-center lg:flex lg:gap-1">
          {mainNavigation.map((item) => (
            <DesktopNavItem
              key={item.label}
              item={item}
              activeMenu={activeMenu}
              onToggle={toggleMenu}
              onClose={closeMegaMenu}
              isHero={isHero}
              isScrolled={isScrolled}
            />
          ))}
        </div>

        <div className="flex items-center gap-3 lg:gap-4">
          <button
            type="button"
            className={`hidden p-1.5 transition-colors lg:block ${iconClass}`}
            aria-label="Search"
          >
            <SearchIcon />
          </button>

          <span
            className={`hidden h-5 w-px lg:block ${isHero && !isScrolled ? "bg-white/30" : "bg-border"}`}
          />

          <button
            type="button"
            className={`p-1.5 transition-colors lg:hidden ${iconClass}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <button
            type="button"
            className={`hidden p-1.5 transition-colors lg:block ${iconClass}`}
            aria-label="Menu"
          >
            <MenuIcon />
          </button>

          <Link
            href="/apply"
            className="hidden items-center gap-3 rounded-full bg-[#f5c518] px-5 py-2.5 text-sm font-bold text-[#1a1a1a] transition-all hover:bg-[#e8b80f] sm:inline-flex"
          >
            Apply Now
            <ApplyArrowIcon />
          </Link>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-white px-4 py-4 lg:hidden">
          {mainNavigation.map((item) => (
            <MobileNavItem
              key={item.label}
              item={item}
              onClose={() => setMobileOpen(false)}
            />
          ))}
          <div className="mt-4 px-3">
            <Link
              href="/apply"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#f5c518] px-5 py-3 text-sm font-bold text-[#1a1a1a]"
            >
              Apply Now
              <ApplyArrowIcon />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
