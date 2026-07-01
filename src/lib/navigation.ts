export type NavIconName =
  | "about"
  | "history"
  | "administration"
  | "mission"
  | "map"
  | "founder"
  | "cse"
  | "ece"
  | "civil"
  | "mechanical"
  | "programs"
  | "apply"
  | "requirements"
  | "tuition"
  | "scholarship"
  | "faculty"
  | "research"
  | "campus"
  | "events"
  | "library"
  | "gallery"
  | "alumni"
  | "faq";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  icon: NavIconName;
};

export type MegaMenuColumn = {
  title: string;
  links: NavLink[];
};

export type NavItem = {
  label: string;
  href?: string;
  megaMenu?: MegaMenuColumn[];
  featured?: {
    title: string;
    description: string;
    stat: string;
    statLabel: string;
    image: string;
    ctaLabel: string;
    ctaHref: string;
  };
};

export const mainNavigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    megaMenu: [
      {
        title: "Institute",
        links: [
          {
            label: "About SBIST",
            href: "/about",
            description: "Vision, mission & overview",
            icon: "about",
          },
          {
            label: "History",
            href: "/about/history",
            description: "Our journey",
            icon: "history",
          },
          {
            label: "Administration",
            href: "/about/administration",
            description: "Leadership & governance",
            icon: "administration",
          },
          {
            label: "Mission & Values",
            href: "/about/mission",
            description: "What we stand for",
            icon: "mission",
          },
          {
            label: "Campus Map",
            href: "/about/campus-map",
            description: "Chrompet campus",
            icon: "map",
          },
          {
            label: "Founder's Message",
            href: "/about/founders-message",
            description: "From the chairman",
            icon: "founder",
          },
        ],
      },
    ],
  },
  {
    label: "Academics",
    megaMenu: [
      {
        title: "Departments",
        links: [
          {
            label: "Computer Science",
            href: "/programs/cse",
            description: "Software & AI",
            icon: "cse",
          },
          {
            label: "Electrical & Electronics",
            href: "/programs/ece",
            description: "Power & electronics",
            icon: "ece",
          },
          {
            label: "Civil Engineering",
            href: "/programs/civil",
            description: "Infrastructure",
            icon: "civil",
          },
          {
            label: "Mechanical",
            href: "/programs/mechanical",
            description: "Manufacturing",
            icon: "mechanical",
          },
          {
            label: "All Programs",
            href: "/programs",
            description: "Browse all programs",
            icon: "programs",
          },
        ],
      },
      {
        title: "Admissions",
        links: [
          {
            label: "How to Apply",
            href: "/apply",
            description: "Start application",
            icon: "apply",
          },
          {
            label: "Requirements",
            href: "/apply/requirements",
            description: "Eligibility & docs",
            icon: "requirements",
          },
          {
            label: "Tuition & Fees",
            href: "/tuition",
            description: "Fee structure",
            icon: "tuition",
          },
          {
            label: "Scholarships",
            href: "/scholarships",
            description: "Financial aid",
            icon: "scholarship",
          },
        ],
      },
      {
        title: "Faculty & Research",
        links: [
          {
            label: "Faculty Members",
            href: "/faculty/members",
            description: "Teaching staff",
            icon: "faculty",
          },
          {
            label: "Research",
            href: "/research",
            description: "Labs & innovation",
            icon: "research",
          },
        ],
      },
    ],
    featured: {
      title: "Join SBIST Now",
      description: "Highly qualified faculty will guide you for career growth.",
      stat: "1.5K+",
      statLabel: "Students Enrolled",
      image: "/images/hero-campus.jpg",
      ctaLabel: "Apply Now",
      ctaHref: "/apply",
    },
  },
  {
    label: "Campus",
    megaMenu: [
      {
        title: "Student Life",
        links: [
          {
            label: "Campus Life",
            href: "/campus-life",
            description: "Clubs & community",
            icon: "campus",
          },
          {
            label: "Events",
            href: "/events",
            description: "Symposiums & activities",
            icon: "events",
          },
          {
            label: "Library",
            href: "/libraries",
            description: "Study resources",
            icon: "library",
          },
          {
            label: "Gallery",
            href: "/gallery",
            description: "Campus photos",
            icon: "gallery",
          },
          {
            label: "Alumni",
            href: "/alumni",
            description: "Graduate network",
            icon: "alumni",
          },
          {
            label: "FAQ",
            href: "/faq",
            description: "Common questions",
            icon: "faq",
          },
        ],
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const siteConfig = {
  name: "Sree Balaji Institute of Science and Technology",
  shortName: "SBIST",
  logo: "/images/sbist-logo.jpg",
  email: "office@sbist.in",
  phone: "",
  address: "No. 7 Works Road, Chrompet, Chennai - 600 044",
  social: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
};
