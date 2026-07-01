"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/Button";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { mainNavigation, siteConfig } from "@/lib/navigation";
import type { NavItem } from "@/lib/navigation";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

type NavLinkItemProps = {
  item: NavItem;
  activeMenu: string | null;
  onToggle: (label: string) => void;
  onClose: () => void;
};

function DesktopNavItem({ item, activeMenu, onToggle, onClose }: NavLinkItemProps) {
  const hasMega = Boolean(item.megaMenu);
  const isOpen = activeMenu === item.label;

  if (!hasMega && item.href) {
    return (
      <Link
        href={item.href}
        className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
      >
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
        className={[
          "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
          isOpen ? "text-primary" : "text-foreground hover:text-primary",
        ].join(" ")}
      >
        {item.label}
        <ChevronDown
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
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

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMegaMenu = useCallback(() => setActiveMenu(null), []);
  const toggleMenu = useCallback((label: string) => {
    setActiveMenu((prev) => (prev === label ? null : label));
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      {/* Top bar */}
      <div className="hidden border-b border-border bg-primary lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs text-white/90 lg:px-8">
          <div className="flex items-center gap-6">
            <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
              {siteConfig.email}
            </a>
            <span className="text-white/70">{siteConfig.address}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/70">Follow Us:</span>
            {Object.entries(siteConfig.social).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="capitalize hover:text-accent"
                aria-label={key}
              >
                {key[0].toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8"
        onMouseLeave={closeMegaMenu}
      >
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
            SB
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-tight text-primary">
              {siteConfig.shortName}
            </p>
            <p className="max-w-[180px] text-[10px] leading-tight text-muted">
              Institute of Science & Technology
            </p>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {mainNavigation.map((item) => (
            <DesktopNavItem
              key={item.label}
              item={item}
              activeMenu={activeMenu}
              onToggle={toggleMenu}
              onClose={closeMegaMenu}
            />
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="/apply" variant="accent" size="sm">
            Apply Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile drawer */}
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
            <Button href="/apply" variant="accent" size="md" className="w-full">
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
