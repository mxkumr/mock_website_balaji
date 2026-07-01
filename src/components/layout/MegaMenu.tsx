"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { NavItem } from "@/lib/navigation";

type MegaMenuProps = {
  item: NavItem;
  isOpen: boolean;
  onClose: () => void;
};

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

  const columns = item.megaMenu;
  const featured = item.featured;

  return (
    <div
      ref={menuRef}
      className="absolute left-0 right-0 top-full z-50 border-t border-border bg-white shadow-xl animate-fade-in-up"
      role="menu"
      aria-label={`${item.label} submenu`}
    >
      <div className="mx-auto flex max-w-7xl gap-8 px-4 py-8 lg:px-8">
        <div
          className={`grid flex-1 gap-8 ${featured ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : `grid-cols-1 sm:grid-cols-${Math.min(columns.length, 3)}`}`}
          style={{
            gridTemplateColumns: featured
              ? undefined
              : `repeat(${Math.min(columns.length, 4)}, minmax(0, 1fr))`,
          }}
        >
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-primary">
                {column.title}
              </h3>
              <ul className="space-y-2" role="none">
                {column.links.map((link) => (
                  <li key={link.href} role="none">
                    <Link
                      href={link.href}
                      role="menuitem"
                      onClick={onClose}
                      className="block rounded-md px-2 py-1.5 text-sm text-foreground transition-colors hover:bg-surface hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {featured && (
          <div className="hidden w-72 shrink-0 overflow-hidden rounded-xl bg-primary lg:block">
            <div className="relative h-36 w-full">
              <Image
                src={featured.image}
                alt=""
                fill
                className="object-cover opacity-80"
                sizes="288px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 to-transparent" />
            </div>
            <div className="p-5 text-white">
              <p className="text-3xl font-bold">{featured.stat}</p>
              <p className="text-xs uppercase tracking-wide text-white/80">
                {featured.statLabel}
              </p>
              <p className="mt-3 text-sm font-semibold">{featured.title}</p>
              <p className="mt-1 text-xs text-white/70">{featured.description}</p>
              <Link
                href={featured.ctaHref}
                onClick={onClose}
                className="mt-4 inline-flex items-center gap-1 rounded-md bg-accent px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                {featured.ctaLabel}
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
