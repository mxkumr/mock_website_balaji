import type { CounterItem } from "@/components/blocks/Counters";
import type { GalleryImage } from "@/components/blocks/Gallery";
import type { NavIconName } from "@/lib/navigation";

export const heroContent = {
  watermark: "Sree Balaji College of Science and Technology",
  watermarkSubtitle: "What the World Needs Begins Here",
  eyebrow: "Welcome to Sree Balaji Institute of Science and Technology",
  title: "Highly Qualified Faculties Will Guide You for Career Growth",
  campusTourLabel: "Campus Tour",
  campusTourHref: "/about",
  applyHref: "/contact",
  buildingImage: "/images/hero-campus.jpg",
};

/** Shared local imagery from public/images */
export const stockImages = {
  campus: "/images/hero-campus.jpg",
  library: "/images/slide-1.jpg",
  graduation: "/images/slide-2.jpg",
  sports: "/images/mechanical.jpg",
  students: "/images/students-library.jpg",
};

export const aboutContent = {
  eyebrow: "About Our Institute",
  title: "Empowering Students to Lead the Future",
  paragraphs: [
    "Sree Balaji Institute of Science and Technology is an AICTE-approved engineering college in Chrompet, Chennai. We offer undergraduate programs in engineering, management, and computer applications, with a focus on strong fundamentals and practical, industry-ready skills.",
    "Our campus brings together experienced faculty, modern laboratories, and a supportive academic environment. Through structured teaching, hands-on training, and career guidance, we help students grow into capable engineers and professionals.",
  ],
  highlights: [
    "Qualified Faculty with Industry Experience",
    "Modern Laboratories & Research Infrastructure",
    "Structured Academic & Research Goals",
  ],
  stat: {
    value: "Shaping Tomorrow's Engineers",
    label: "Today, at SBIST",
    description:
      "Through dedicated teaching, hands-on learning, and strong values, we help students turn ambition into lasting success.",
  },
  images: {
    primary: stockImages.students,
    secondary: "/images/students-classroom.jpg",
  },
};

export type Department = {
  title: string;
  description: string;
  image: string;
  href: string;
  degree: string;
  icon: NavIconName;
  duration: string;
  category: "engineering" | "management" | "commerce";
};

export const departments = [
  {
    title: "Computer Science Engineering",
    description:
      "The School of Computing has experienced faculty members with industry experience and well equipped laboratories.",
    image: "/images/students-classroom.jpg",
    href: "/academics#courses",
    degree: "B.E. Computer Science Engineering",
    icon: "cse",
    duration: "4 Years",
    category: "engineering",
  },
  {
    title: "Information and Communication Technology",
    description:
      "Focused on networks, communication systems, and modern IT infrastructure with practical lab-based learning.",
    image: "/images/computer.jpg",
    href: "/academics#courses",
    degree: "B.E. Information and Communication Technology",
    icon: "ict",
    duration: "4 Years",
    category: "engineering",
  },
  {
    title: "Electrical and Communication Engineering",
    description:
      "The electrical engineers prepared to make the world eco friendly through innovation and sustainable design.",
    image: "/images/electrical.jpg",
    href: "/academics#courses",
    degree: "B.E. Electrical and Communication Engineering",
    icon: "ece",
    duration: "4 Years",
    category: "engineering",
  },
  {
    title: "Civil Engineering",
    description:
      "The department of Civil Engineering is committed to the task of providing quality education, which will transform the students into efficient and successful engineers.",
    image: "/images/civil.jpg",
    href: "/academics#courses",
    degree: "B.E. Civil Engineering",
    icon: "civil",
    duration: "4 Years",
    category: "engineering",
  },
  {
    title: "Mechanical Engineering",
    description:
      "The School of Mechanical Engineering is one of the pioneering departments of our institute.",
    image: "/images/mechanical.jpg",
    href: "/academics#courses",
    degree: "B.E. Mechanical Engineering",
    icon: "mechanical",
    duration: "4 Years",
    category: "engineering",
  },
  {
    title: "Biomedical Engineering",
    description:
      "Combining engineering principles with medical sciences to prepare students for healthcare technology and device innovation.",
    image: "/images/slide-3.jpg",
    href: "/academics#courses",
    degree: "B.E. Biomedical Engineering",
    icon: "biomedical",
    duration: "4 Years",
    category: "engineering",
  },
  {
    title: "BBA",
    description:
      "A Bachelor of Business Administration program focused on management fundamentals, entrepreneurship, and industry-ready business skills.",
    image: "/images/students-library.jpg",
    href: "/academics#courses",
    degree: "BBA",
    icon: "bba",
    duration: "3 Years",
    category: "management",
  },
  {
    title: "BCA",
    description:
      "A Bachelor of Computer Applications program covering software development, databases, and applied computing for IT careers.",
    image: "/images/computer.jpg",
    href: "/academics#courses",
    degree: "BCA",
    icon: "bca",
    duration: "3 Years",
    category: "commerce",
  },
] satisfies Department[];

export const counterItems: CounterItem[] = [
  { headline: "Excellence", label: "Quality engineering education" },
  { headline: "Innovation", label: "Learning beyond the classroom" },
  { headline: "Opportunity", label: "A fresh start for ambitious minds" },
  { headline: "Growth", label: "Skills for a successful career" },
];

export const notices = [
  {
    title: "Semester Examination Schedule",
    date: "August 15, 2026",
    ref: "SBIST/REG/EXAM/2026/01",
  },
  {
    title: "New Digital Learning Resources Available",
    date: "September 5, 2026",
    ref: "SBIST/REG/ACD/2026/03",
  },
  {
    title: "Admissions Open for Academic Year 2027–28",
    date: "October 1, 2026",
    ref: "SBIST/REG/ADM/2027/01",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: stockImages.campus,
    alt: "Campus Building",
    caption: "Main academic block",
  },
  {
    src: "/images/students-library.jpg",
    alt: "Library",
  },
  {
    src: "/images/students-classroom.jpg",
    alt: "Lecture Hall",
  },
  {
    src: "/images/slide-3.jpg",
    alt: "Engineering Lab",
  },
  {
    src: stockImages.graduation,
    alt: "Library Study Hall",
  },
  {
    src: stockImages.sports,
    alt: "Mechanical Workshop",
  },
];

export type CampusLifeTile = {
  id: string;
  title: string;
  description: string;
  image: string;
  href?: string;
};

export const campusLifeContent = {
  eyebrow: "Campus Life",
  title: "Discover Campus Life",
  viewAllHref: "/about",
  tiles: [
    {
      id: "campus",
      title: "Main Academic Block",
      description:
        "Our central campus building houses lecture halls, faculty offices, and student services — the heart of daily life at SBIST.",
      image: "/images/hero-campus.jpg",
      href: "/about",
    },
    {
      id: "library",
      title: "Central Library",
      description:
        "A quiet, well-stocked library with digital resources, journals, and study spaces for focused learning.",
      image: "/images/slide-1.jpg",
      href: "/about",
    },
    {
      id: "lecture",
      title: "Modern Lecture Halls",
      description:
        "Spacious, technology-enabled classrooms designed for interactive teaching and collaborative learning.",
      image: "/images/students-classroom.jpg",
      href: "/about",
    },
    {
      id: "lab",
      title: "Engineering Laboratories",
      description:
        "Hands-on labs equipped for engineering, management, and computer applications programs with industry-standard tools.",
      image: "/images/slide-3.jpg",
      href: "/about",
    },
    {
      id: "graduation",
      title: "Graduation & Convocation",
      description:
        "Celebrating milestones as our graduates step into engineering careers across India and abroad.",
      image: "/images/slide-2.jpg",
      href: "/about",
    },
    {
      id: "sports",
      title: "Sports & Recreation",
      description:
        "Outdoor grounds and indoor facilities for cricket, volleyball, and fitness — balance beyond the classroom.",
      image: "/images/mechanical.jpg",
      href: "/about",
    },
  ] satisfies CampusLifeTile[],
};

export const contactContent = {
  address: "No. 7 Works Road, Chrompet, Chennai - 600 044",
  email: "office@sbist.in",
};

export const foundersNoteContent = {
  quote:
    "SBIST gave me more than classroom learning. The faculty guide you personally, the labs let you practice what you study, and the campus environment keeps you motivated to grow every day.",
  name: "Priya Menon",
  title: "B.E. Information and Communication Technology",
  readMoreHref: "/about",
};

export const upcomingEventsContent = {
  eyebrow: "Upcoming Events",
  title: "Join Our Latest Events",
  viewMoreHref: "/contact",
  events: [
    {
      title: "Annual Engineering Symposium 2026",
      date: "August 4, 2026",
      time: "09:00 AM - 03:40 PM",
      location: "SBIST Main Auditorium, Chennai",
      image: "/images/slide-3.jpg",
      href: "/contact",
    },
    {
      title: "Campus Placement Drive",
      date: "August 4, 2026",
      time: "09:00 AM - 03:40 PM",
      location: "SBIST Placement Cell, Chennai",
      image: "/images/students-library.jpg",
      href: "/contact",
    },
    {
      title: "International Research Conference",
      date: "August 4, 2026",
      time: "09:00 AM - 03:40 PM",
      location: "SBIST Conference Hall, Chennai",
      image: "/images/slide-1.jpg",
      href: "/contact",
    },
    {
      title: "Freshers Orientation Week",
      date: "August 4, 2026",
      time: "09:00 AM - 03:40 PM",
      location: "SBIST Campus Grounds, Chennai",
      image: stockImages.campus,
      href: "/contact",
    },
  ],
};
