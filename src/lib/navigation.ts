export type NavLink = {
  label: string;
  href: string;
  description?: string;
  /** Bento tile size in the mega menu grid */
  bento?: "sm" | "wide" | "tall";
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
            description: "Vision, mission & institute overview",
            bento: "wide",
          },
          {
            label: "History",
            href: "/about/history",
            description: "Our journey since establishment",
          },
          {
            label: "Administration",
            href: "/about/administration",
            description: "Leadership & governance",
          },
          {
            label: "Mission & Values",
            href: "/about/mission",
            description: "What we stand for",
          },
          {
            label: "Campus Map",
            href: "/about/campus-map",
            description: "Explore our Chrompet campus",
          },
          {
            label: "Founder's Message",
            href: "/about/founders-message",
            description: "Message from the chairman",
            bento: "wide",
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
            description: "Software, AI & computing",
          },
          {
            label: "Electrical & Electronics",
            href: "/programs/ece",
            description: "Power systems & electronics",
          },
          {
            label: "Civil Engineering",
            href: "/programs/civil",
            description: "Infrastructure & design",
          },
          {
            label: "Mechanical",
            href: "/programs/mechanical",
            description: "Manufacturing & thermal",
          },
          {
            label: "All Programs",
            href: "/programs",
            description: "Browse every engineering program",
            bento: "wide",
          },
        ],
      },
      {
        title: "Admissions",
        links: [
          {
            label: "How to Apply",
            href: "/apply",
            description: "Start your application",
            bento: "tall",
          },
          {
            label: "Admission Requirements",
            href: "/apply/requirements",
            description: "Eligibility & documents",
          },
          {
            label: "Tuition & Fees",
            href: "/tuition",
            description: "Fee structure overview",
          },
          {
            label: "Scholarships",
            href: "/scholarships",
            description: "Financial support options",
          },
        ],
      },
      {
        title: "Faculty & Research",
        links: [
          {
            label: "Faculty Members",
            href: "/faculty/members",
            description: "Meet our teaching staff",
          },
          {
            label: "Research",
            href: "/research",
            description: "Labs & innovation focus",
            bento: "wide",
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
            description: "Clubs, culture & community",
            bento: "wide",
          },
          {
            label: "Events",
            href: "/events",
            description: "Symposiums & activities",
          },
          {
            label: "Library",
            href: "/libraries",
            description: "Resources & study spaces",
          },
          {
            label: "Gallery",
            href: "/gallery",
            description: "Photos from campus life",
          },
          {
            label: "Alumni",
            href: "/alumni",
            description: "Our graduate network",
          },
          {
            label: "FAQ",
            href: "/faq",
            description: "Common questions answered",
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
