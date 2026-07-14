import type { NavIconName } from "@/lib/navigation";
import { departments, notices, stockImages } from "@/lib/home-content";

/** Verified image URLs for the Academics page (Unsplash IDs tested for 200 responses) */
export const academicsImages = {
  header: stockImages.campus,
  sidebar: stockImages.students,
  whyJoin:
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&h=600&fit=crop",
  cta: stockImages.students,
  alumni: {
    karthik: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop",
    meera: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop",
    vikram: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop",
  },
} as const;

export const academicsPageContent = {
  header: {
    title: "Academics at SBIST",
    description:
      "Explore our programs, world-class laboratories, and the pathways that prepare students for careers in technology, infrastructure, healthcare, and business.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Academics", href: "/academics" },
    ],
    backgroundImage: academicsImages.header,
  },
  sidebar: {
    title: "Academics",
    links: [
      { label: "Overview", href: "/academics", icon: "programs" as NavIconName },
      { label: "Program Catalogue", href: "/academics#courses", icon: "cse" as NavIconName },
      { label: "Why Join SBIST", href: "/academics#why-join", icon: "faculty" as NavIconName },
      { label: "Alumni Network", href: "/academics#alumni", icon: "alumni" as NavIconName },
      { label: "Admissions", href: "/academics#admissions", icon: "apply" as NavIconName },
    ],
    image: academicsImages.sidebar,
  },
  intro: {
    eyebrow: "Academic Excellence",
    title: "Academic Programs Built for the Real World",
    paragraphs: [
      "At Sree Balaji Institute of Science and Technology, academics are designed to bridge classroom theory with hands-on practice. We offer eight programs — Computer Science Engineering, Information and Communication Technology, Electrical and Communication Engineering, Civil Engineering, Mechanical Engineering, Biomedical Engineering, BBA, and BCA.",
      "From modern laboratories and qualified faculty to placement training and research opportunities, SBIST provides a complete academic ecosystem on our Chrompet campus in Chennai.",
    ],
    highlights: [
      "Anna University–affiliated B.E. engineering programs",
      "BBA and BCA pathways in management and computer applications",
      "Dedicated placement and career guidance cell",
    ],
  },
  stats: [
    { value: 8, suffix: "", label: "Programs Offered", icon: "programs" as NavIconName },
    { value: 15, suffix: "+", label: "Specialized Labs", icon: "research" as NavIconName },
    { value: 80, suffix: "+", label: "Faculty Members", icon: "faculty" as NavIconName },
    { value: 92, suffix: "%", label: "Placement Rate", icon: "apply" as NavIconName },
  ],
  courses: {
    eyebrow: "Program Catalogue",
    title: "Browse Our Programs",
    description:
      "Choose from eight undergraduate programs across engineering, management, and computer applications. Each pathway combines core fundamentals with practical labs and project-based learning.",
    programs: departments.map((dept) => ({
      ...dept,
      programs: [dept.degree],
    })),
    viewAllHref: "/academics#courses",
  },
  whyJoin: {
    eyebrow: "Why Join SBIST",
    title: "Where Qualified Faculty Guide Your Career Growth",
    description:
      "SBIST combines academic rigour with practical exposure — giving students the confidence, skills, and network to succeed in competitive engineering careers.",
    reasons: [
      {
        title: "Expert Faculty",
        description:
          "Learn from experienced professors and industry practitioners who mentor students through projects, internships, and research.",
        icon: "faculty" as NavIconName,
      },
      {
        title: "Modern Infrastructure",
        description:
          "Well-equipped labs, digital learning resources, and spacious lecture halls create an environment built for engineering excellence.",
        icon: "research" as NavIconName,
      },
      {
        title: "Industry Connections",
        description:
          "Regular industry visits, guest lectures, and placement drives connect students with leading companies across Tamil Nadu and beyond.",
        icon: "programs" as NavIconName,
      },
      {
        title: "Affordable Education",
        description:
          "Transparent tuition fees, scholarship options, and flexible payment plans make quality engineering education accessible.",
        icon: "scholarship" as NavIconName,
      },
      {
        title: "Campus Community",
        description:
          "Clubs, cultural events, sports, and peer networks foster collaboration and personal growth beyond academics.",
        icon: "campus" as NavIconName,
      },
      {
        title: "Research Opportunities",
        description:
          "Students engage in faculty-led research, symposiums, and innovation projects that strengthen their academic portfolios.",
        icon: "research" as NavIconName,
      },
    ],
    image: academicsImages.whyJoin,
  },
  alumni: {
    eyebrow: "Alumni Network",
    title: "Graduates Leading Across Industries",
    description:
      "SBIST alumni work in software, manufacturing, infrastructure, and public sector roles across India and abroad. Our graduate network continues to mentor current students through talks, referrals, and campus visits.",
    stats: [
      { value: 5000, suffix: "+", label: "Alumni Worldwide" },
      { value: 120, suffix: "+", label: "Recruiting Companies" },
      { value: 25, suffix: "+", label: "Alumni Mentors" },
    ],
    stories: [
      {
        name: "Karthik Raman",
        role: "Software Engineer · Infosys",
        batch: "B.E. Computer Science Engineering, 2019",
        quote:
          "SBIST gave me a strong programming foundation and lab exposure that made the transition to industry seamless.",
        image: academicsImages.alumni.karthik,
      },
      {
        name: "Meera Iyer",
        role: "Design Engineer · L&T Construction",
        batch: "B.E. Civil Engineering, 2018",
        quote:
          "The structural lab work and faculty guidance prepared me for real project challenges from day one.",
        image: academicsImages.alumni.meera,
      },
      {
        name: "Vikram Sundaram",
        role: "Production Manager · TVS Motors",
        batch: "B.E. Mechanical Engineering, 2017",
        quote:
          "Hands-on workshop training at SBIST set me apart during campus placements and early career growth.",
        image: academicsImages.alumni.vikram,
      },
    ],
    ctaHref: "/alumni",
    ctaLabel: "Connect with Alumni",
  },
  admissions: {
    eyebrow: "Admissions",
    title: "Start Your Academic Journey",
    description:
      "Admissions are open for the upcoming academic year. Review eligibility, explore fee structures, and apply to join a community of aspiring engineers and professionals.",
    links: [
      {
        label: "How to Apply",
        description: "Step-by-step application process",
        href: "/apply",
        icon: "apply" as NavIconName,
      },
      {
        label: "Requirements",
        description: "Eligibility and documents",
        href: "/apply/requirements",
        icon: "requirements" as NavIconName,
      },
      {
        label: "Tuition & Fees",
        description: "Transparent fee structure",
        href: "/tuition",
        icon: "tuition" as NavIconName,
      },
      {
        label: "Scholarships",
        description: "Financial aid options",
        href: "/scholarships",
        icon: "scholarship" as NavIconName,
      },
    ],
  },
  notices: {
    eyebrow: "Academic Notices",
    title: "Latest Announcements",
    description: "Stay updated on examinations, admissions, and academic calendar changes.",
    items: notices,
    viewAllHref: "/notices",
  },
  cta: {
    image: academicsImages.cta,
  },
};
