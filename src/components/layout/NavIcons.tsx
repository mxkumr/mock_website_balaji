import type { ReactNode } from "react";
import type { NavIconName } from "@/lib/navigation";

type IconProps = { className?: string };

function IconBase({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

const icons: Record<NavIconName, (props: IconProps) => ReactNode> = {
  about: (p) => (
    <IconBase {...p}>
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
    </IconBase>
  ),
  history: (p) => (
    <IconBase {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </IconBase>
  ),
  administration: (p) => (
    <IconBase {...p}>
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </IconBase>
  ),
  mission: (p) => (
    <IconBase {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
    </IconBase>
  ),
  map: (p) => (
    <IconBase {...p}>
      <path d="M9 18l-6-3V6l6 3 6-3 6 3v9l-6-3-6 3z" />
      <path d="M9 6v12M15 3v12" />
    </IconBase>
  ),
  founder: (p) => (
    <IconBase {...p}>
      <path d="M4 19h16M6 17V9a2 2 0 012-2h8a2 2 0 012 2v8" />
      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
    </IconBase>
  ),
  cse: (p) => (
    <IconBase {...p}>
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M8 20h8M12 18v2" />
      <path d="M7 9h2M7 12h6" />
    </IconBase>
  ),
  ece: (p) => (
    <IconBase {...p}>
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </IconBase>
  ),
  civil: (p) => (
    <IconBase {...p}>
      <path d="M3 21h18M6 21V9l6-4 6 4v12M10 21v-6h4v6" />
    </IconBase>
  ),
  mechanical: (p) => (
    <IconBase {...p}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M16.9 16.9l2.1 2.1M4.9 19.1l2.1-2.1M16.9 7.1l2.1-2.1" />
    </IconBase>
  ),
  programs: (p) => (
    <IconBase {...p}>
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </IconBase>
  ),
  apply: (p) => (
    <IconBase {...p}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6M9 15l2 2 4-4" />
    </IconBase>
  ),
  requirements: (p) => (
    <IconBase {...p}>
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </IconBase>
  ),
  tuition: (p) => (
    <IconBase {...p}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20M6 15h2M10 15h4" />
    </IconBase>
  ),
  scholarship: (p) => (
    <IconBase {...p}>
      <path d="M12 2l2.4 4.8 5.4.8-3.9 3.8.9 5.3L12 14.3 7.2 16.7l.9-5.3L4.2 7.6l5.4-.8L12 2z" />
    </IconBase>
  ),
  faculty: (p) => (
    <IconBase {...p}>
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </IconBase>
  ),
  research: (p) => (
    <IconBase {...p}>
      <path d="M9 3h6v7l4 9H5l4-9V3z" />
      <path d="M9 3h6" />
    </IconBase>
  ),
  campus: (p) => (
    <IconBase {...p}>
      <path d="M2 20h20M4 20V10l8-5 8 5v10" />
      <path d="M9 20v-5h6v5" />
    </IconBase>
  ),
  events: (p) => (
    <IconBase {...p}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </IconBase>
  ),
  library: (p) => (
    <IconBase {...p}>
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z" />
    </IconBase>
  ),
  gallery: (p) => (
    <IconBase {...p}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </IconBase>
  ),
  alumni: (p) => (
    <IconBase {...p}>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </IconBase>
  ),
  faq: (p) => (
    <IconBase {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </IconBase>
  ),
};

export function NavIcon({ name, className = "h-4 w-4" }: { name: NavIconName; className?: string }) {
  const Icon = icons[name];
  return Icon({ className });
}
