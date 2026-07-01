import Link from "next/link";
import { siteConfig } from "@/lib/navigation";

const campusLinks = [
  { label: "About SBIST", href: "/about" },
  { label: "Alumni Network", href: "/alumni" },
  { label: "Library", href: "/libraries" },
  { label: "Campus Life", href: "/campus-life" },
];

const usefulLinks = [
  { label: "Faculty Areas", href: "/faculty" },
  { label: "Graduate Programs", href: "/programs" },
  { label: "Campus Events", href: "/events" },
  { label: "How to Apply", href: "/apply" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer-bg text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                SB
              </div>
              <p className="text-sm font-bold leading-tight">{siteConfig.shortName}</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {siteConfig.name}
            </p>
            <div className="mt-5 space-y-2 text-sm text-white/70">
              <p>
                <span className="font-medium text-white">Email:</span>{" "}
                <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <span className="font-medium text-white">Phone:</span>{" "}
                <a href={`tel:${siteConfig.phone}`} className="hover:text-accent">
                  {siteConfig.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Campus */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
              Our Campus
            </h3>
            <ul className="space-y-2.5">
              {campusLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
              Useful Links
            </h3>
            <ul className="space-y-2.5">
              {usefulLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
              Newsletter
            </h3>
            <p className="mb-4 text-sm text-white/70">
              Stay updated with campus news and events.
            </p>
            <form className="flex flex-col gap-3" action="#" method="post">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-md border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/60">
            © {year} {siteConfig.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            {Object.entries(siteConfig.social).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs font-semibold capitalize text-white/70 transition-colors hover:border-accent hover:text-accent"
                aria-label={key}
              >
                {key[0].toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
