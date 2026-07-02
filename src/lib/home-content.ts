import type { CounterItem } from "@/components/blocks/Counters";
import type { GalleryImage } from "@/components/blocks/Gallery";

export const heroContent = {
  watermark: "What the World Needs Begins Here",
  watermarkSubtitle: "At Sree Balaji College of Science and Technology",
  eyebrow: "Welcome to Sree Balaji Institute of Science and Technology",
  title: "Highly Qualified Faculties Will Guide You for Career Growth",
  campusTourLabel: "Campus Tour",
  campusTourHref: "/campus-tour",
  applyHref: "/apply",
  buildingImage: "/images/hero-campus.jpg",
};

/** Shared stock imagery — verified URLs and local campus asset */
export const stockImages = {
  campus: "/images/hero-campus.jpg",
  library:
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=600&fit=crop",
  graduation:
    "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=600&fit=crop",
  sports:
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=600&fit=crop",
  students:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=640&h=780&fit=crop",
};

export const aboutContent = {
  eyebrow: "About Your Institute",
  title: "Empowering Students to Lead the Future",
  paragraphs: [
    "We live in an increasingly interconnected world that faces challenges and complex problems on a global scale. At the start of the 21st century, Sree Balaji Institute of Science and Technology has qualified faculties and latest lab equipments.",
    "Setting clearly defined short term and long term goals in research with timelines, evaluate the progress and ensure that all relevant infrastructural and human resource support is available to achieve the goals.",
  ],
  highlights: [
    "Qualified Faculty with Industry Experience",
    "Modern Laboratories & Research Infrastructure",
    "Structured Academic & Research Goals",
  ],
  stat: {
    value: "50+",
    label: "Award Winning",
    description: "Achieved awards for excellence and innovation in engineering education.",
  },
  images: {
    primary: stockImages.students,
    secondary: stockImages.campus,
  },
};

export const departments = [
  {
    title: "Computer Science Engineering",
    description:
      "The School of Computing has experienced faculty members with industry experience and well equipped laboratories.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=420&fit=crop",
    href: "/programs/cse",
  },
  {
    title: "Electrical and Electronic Engineering",
    description:
      "The electrical engineers prepared to make the world eco friendly.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=420&fit=crop",
    href: "/programs/ece",
  },
  {
    title: "Civil Engineering",
    description:
      "The department of Civil Engineering is committed to the task of providing quality education, which will transform the students into efficient and successful engineers.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=420&fit=crop",
    href: "/programs/civil",
  },
  {
    title: "Mechanical Engineering",
    description:
      "The School of Mechanical Engineering is one of the pioneering departments of our institute.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=420&fit=crop",
    href: "/programs/mechanical",
  },
];

export const counterItems: CounterItem[] = [
  { value: 1500, suffix: "+", label: "Students Enrolled" },
  { value: 4, suffix: "", label: "Engineering Departments" },
  { value: 80, suffix: "+", label: "Faculty Members" },
  { value: 15, suffix: "+", label: "Modern Laboratories" },
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
    src: stockImages.library,
    alt: "Library",
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=600&fit=crop",
    alt: "Lecture Hall",
  },
  {
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=600&fit=crop",
    alt: "Engineering Lab",
  },
  {
    src: stockImages.graduation,
    alt: "Graduation Ceremony",
  },
  {
    src: stockImages.sports,
    alt: "Campus Sports",
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
  viewAllHref: "/campus-life",
  tiles: [
    {
      id: "campus",
      title: "Main Academic Block",
      description:
        "Our central campus building houses lecture halls, faculty offices, and student services — the heart of daily life at SBIST.",
      image: stockImages.campus,
      href: "/campus-life/academic-block",
    },
    {
      id: "library",
      title: "Central Library",
      description:
        "A quiet, well-stocked library with digital resources, journals, and study spaces for focused learning.",
      image: stockImages.library,
      href: "/campus-life/library",
    },
    {
      id: "lecture",
      title: "Modern Lecture Halls",
      description:
        "Spacious, technology-enabled classrooms designed for interactive teaching and collaborative learning.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
      href: "/campus-life/lecture-halls",
    },
    {
      id: "lab",
      title: "Engineering Laboratories",
      description:
        "Hands-on labs equipped for CSE, ECE, Civil, and Mechanical programs with industry-standard tools.",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
      href: "/campus-life/labs",
    },
    {
      id: "graduation",
      title: "Graduation & Convocation",
      description:
        "Celebrating milestones as our graduates step into engineering careers across India and abroad.",
      image: stockImages.graduation,
      href: "/campus-life/graduation",
    },
    {
      id: "sports",
      title: "Sports & Recreation",
      description:
        "Outdoor grounds and indoor facilities for cricket, volleyball, and fitness — balance beyond the classroom.",
      image: stockImages.sports,
      href: "/campus-life/sports",
    },
  ] satisfies CampusLifeTile[],
};

export const contactContent = {
  address: "No. 7 Works Road, Chrompet, Chennai - 600 044",
  email: "office@sbist.in",
};

export const foundersNoteContent = {
  quote:
    "We live in a globalized world that has challenges and complexities on a global scale. At the start of the 21st century, Sree Balaji Institute of Science and Technology is committed to nurturing engineers with integrity, innovation, and a passion for lifelong learning.",
  name: "Dr. S. Balaji",
  title: "Founder & Chairman",
  videoHref: "/about/founders-message",
  readMoreHref: "/about/founders-message",
};

export const upcomingEventsContent = {
  eyebrow: "Upcoming Events",
  title: "Join Our Latest Events",
  viewMoreHref: "/events",
  events: [
    {
      title: "Annual Engineering Symposium 2026",
      date: "August 4, 2026",
      time: "09:00 AM - 03:40 PM",
      location: "SBIST Main Auditorium, Chennai",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=280&fit=crop",
      href: "/events/symposium-2026",
    },
    {
      title: "Campus Placement Drive",
      date: "August 4, 2026",
      time: "09:00 AM - 03:40 PM",
      location: "SBIST Placement Cell, Chennai",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=280&fit=crop",
      href: "/events/placement-drive",
    },
    {
      title: "International Research Conference",
      date: "August 4, 2026",
      time: "09:00 AM - 03:40 PM",
      location: "SBIST Conference Hall, Chennai",
      image:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=280&fit=crop",
      href: "/events/research-conference",
    },
    {
      title: "Freshers Orientation Week",
      date: "August 4, 2026",
      time: "09:00 AM - 03:40 PM",
      location: "SBIST Campus Grounds, Chennai",
      image: stockImages.campus,
      href: "/events/orientation-week",
    },
  ],
};
