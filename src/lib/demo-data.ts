import type { CounterItem } from "@/components/blocks/Counters";
import type { GalleryImage } from "@/components/blocks/Gallery";
import type { TimelineEvent } from "@/components/blocks/Timeline";

export const departments = [
  {
    title: "Computer Science Engineering",
    description:
      "The School of Computing has experienced faculty members with industry experience and well-equipped laboratories.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    programs: ["B.E. CSE", "M.E. CSE", "B.C.A."],
    href: "/programs/cse",
  },
  {
    title: "Electrical & Electronic Engineering",
    description:
      "Electrical engineers prepared to make the world eco-friendly through innovation and sustainable design.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    programs: ["B.E. ECE", "M.E. VLSI", "B.E. EEE"],
    href: "/programs/ece",
  },
  {
    title: "Mechanical Engineering",
    description:
      "One of the pioneering departments of our institute, committed to hands-on engineering education.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
    programs: ["B.E. Mechanical", "M.E. Thermal", "B.E. Auto"],
    href: "/programs/mechanical",
  },
];

export const faculty = [
  {
    name: "Dr. Cameron Williamson",
    role: "Research Assistant",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    href: "/faculty/cameron-williamson",
  },
  {
    name: "Dr. Savannah Nguyen",
    role: "Academic Advisor",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    href: "/faculty/savannah-nguyen",
  },
  {
    name: "Dr. Kathryn Murphy",
    role: "Support Teacher",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    href: "/faculty/kathryn-murphy",
  },
  {
    name: "Dr. Howard Esther",
    role: "Department Head",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    href: "/faculty/howard-esther",
  },
];

export const news = [
  {
    title: "Scholars Making Remarkable Research",
    excerpt:
      "Our students continue to push boundaries in applied science and engineering innovation.",
    category: "Research",
    date: "December 9, 2025",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
    author: "Howard Esther",
    href: "/blog/research-scholars",
  },
  {
    title: "Advancing Knowledge Through Student Research",
    excerpt:
      "Transformative applied science projects are shaping the future of technology on campus.",
    category: "Education",
    date: "December 9, 2025",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    author: "Howard Esther",
    href: "/blog/student-research",
  },
  {
    title: "Alumni Success Stories From Campus to Global Impact",
    excerpt:
      "Graduates are leading innovation across industries worldwide.",
    category: "Alumni",
    date: "December 9, 2025",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    author: "Howard Esther",
    href: "/blog/alumni-success",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    alt: "Campus Entrance",
    caption: "Main campus building",
  },
  {
    src: "https://images.unsplash.com/photo-1541339907191-e08756dedf3c?w=600&h=600&fit=crop",
    alt: "Library",
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=600&fit=crop",
    alt: "Lecture Hall",
  },
  {
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c276e?w=600&h=600&fit=crop",
    alt: "Sports",
  },
  {
    src: "https://images.unsplash.com/photo-1519452575417-564d1407b0bc?w=600&h=600&fit=crop",
    alt: "Graduation",
  },
  {
    src: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=600&fit=crop",
    alt: "Campus Aerial",
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: "1998",
    title: "Institute Founded",
    description:
      "Sree Balaji Institute of Science and Technology was established in Chrompet, Chennai.",
  },
  {
    year: "2005",
    title: "AICTE Approval",
    description:
      "Received full approval from AICTE for engineering and technology programs.",
  },
  {
    year: "2015",
    title: "Research Centre Established",
    description:
      "Launched dedicated research facilities with industry partnerships.",
  },
  {
    year: "2024",
    title: "Campus Expansion",
    description:
      "Modern labs and digital learning infrastructure added across all departments.",
  },
];

export const counterItems: CounterItem[] = [
  { value: 1500, suffix: "+", label: "Regular Students" },
  { value: 50, suffix: "+", label: "Award Winning" },
  { value: 4558, suffix: "+", label: "Total Admissions" },
  { value: 120, suffix: "+", label: "Faculty Members" },
];
