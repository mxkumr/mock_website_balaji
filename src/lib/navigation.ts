export type NavLink = {
  label: string;
  href: string;
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
    label: "About us",
    megaMenu: [
      {
        title: "About us",
        links: [
          { label: "About us", href: "/about" },
          { label: "History", href: "/about/history" },
          { label: "Administration", href: "/about/administration" },
          { label: "Campus Map", href: "/about/campus-map" },
          { label: "Mission & Value", href: "/about/mission" },
          { label: "Vice-Chancellor", href: "/about/vice-chancellor" },
        ],
      },
    ],
  },
  {
    label: "Pages",
    megaMenu: [
      {
        title: "Campus Life",
        links: [
          { label: "Campus Life", href: "/campus-life" },
          { label: "Research", href: "/research" },
          { label: "Scholarships", href: "/scholarships" },
          { label: "All Events", href: "/events" },
          { label: "Libraries", href: "/libraries" },
          { label: "Alumni", href: "/alumni" },
          { label: "FAQ", href: "/faq" },
          { label: "Gallery", href: "/gallery" },
        ],
      },
    ],
  },
  {
    label: "Academics",
    megaMenu: [
      {
        title: "Faculty",
        links: [
          { label: "Faculty Areas", href: "/faculty" },
          { label: "Faculty Details", href: "/faculty/details" },
          { label: "Faculty Members", href: "/faculty/members" },
        ],
      },
      {
        title: "Programs",
        links: [
          { label: "All Programs", href: "/programs" },
          { label: "M.Sc. in Software Engineering", href: "/programs/msc-se" },
          { label: "B.Sc. in Software Engineering", href: "/programs/bsc-se" },
        ],
      },
      {
        title: "Others",
        links: [
          { label: "Tuition & Fee", href: "/tuition" },
          { label: "How to Apply", href: "/apply/how" },
          { label: "Admission Requirements", href: "/apply/requirements" },
          { label: "Cost & Financial Aid", href: "/financial-aid" },
          { label: "Apply Now", href: "/apply" },
        ],
      },
    ],
    featured: {
      title: "Join SBIST Now",
      description: "Highly qualified faculties will guide you for career growth.",
      stat: "1.5K+",
      statLabel: "Regular Students",
      image: "/images/hero-campus.jpg",
      ctaLabel: "Apply Now",
      ctaHref: "/apply",
    },
  },
  {
    label: "Blog",
    megaMenu: [
      {
        title: "Blog",
        links: [
          { label: "Blog Grid", href: "/blog" },
          { label: "Blog Standard", href: "/blog/standard" },
          { label: "Blog Details", href: "/blog/details" },
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
