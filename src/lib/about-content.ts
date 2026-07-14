import type { GalleryImage } from "@/components/blocks/Gallery";
import type { NavIconName } from "@/lib/navigation";
import { stockImages } from "@/lib/home-content";

export const aboutPageContent = {
  header: {
    title: "About SBIST",
    description:
      "Education goes beyond textbooks and classrooms. We empower students to explore their passions and challenge conventions.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About SBIST", href: "/about" },
    ],
    backgroundImage: stockImages.campus,
  },
  sidebar: {
    title: "SBIST Inside",
    links: [
      { label: "Who We Are", href: "/about", icon: "about" as NavIconName },
      { label: "History", href: "/about/history", icon: "history" as NavIconName },
      {
        label: "Administration",
        href: "/about/administration",
        icon: "administration" as NavIconName,
      },
      { label: "Campus Map", href: "/about/campus-map", icon: "map" as NavIconName },
    ],
    image: stockImages.students,
  },
  main: {
    eyebrow: "About SBIST",
    title: "About Sree Balaji Institute of Science and Technology",
    paragraphs: [
      "At SBIST, education goes beyond textbooks and classrooms. We believe in empowering students to explore their passions, challenge conventions, and discover their potential through meaningful experiences. Our distinguished faculty members are leaders in their respective fields, dedicated to delivering world-class education that integrates theory with practical application.",
      "With cutting-edge facilities, modern laboratories, and a vibrant learning environment, we ensure that every student has the tools and support to excel academically and personally.",
    ],
    quote: {
      text: "Our diverse community welcomes students from across the region, fostering cultural exchange and mutual understanding. Through industry collaborations, research initiatives, and innovation hubs, we provide opportunities for students to engage with real-world challenges and contribute to sustainable solutions.",
      author: "Dr. S. Balaji",
      role: "Founder & Chairman",
    },
    closingParagraph:
      "At the heart of SBIST lies a commitment to excellence and inclusivity — helping students gain the skills, confidence, and perspective to lead in an ever-changing world.",
    images: {
      primary:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
      secondary:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
    },
  },
  stats: [
    { value: 1500, suffix: "+", label: "Students Enrolled", icon: "campus" as NavIconName },
    { value: 80, suffix: "+", label: "Academic Staff", icon: "faculty" as NavIconName },
    { value: 25, suffix: "+", label: "Industry Partners", icon: "research" as NavIconName },
  ],
  vision: {
    title: "Our Vision",
    description:
      "Our vision is to create a world where education empowers every individual to achieve their fullest potential. We strive to be a leading institution recognized for academic excellence, innovation, and social responsibility. Our goal is to nurture creative thinkers, ethical leaders, and lifelong learners who contribute positively to society.",
    pillars: [
      {
        title: "Affordability",
        description:
          "SBIST provides transparent, competitive tuition fees and flexible payment options for deserving students.",
        icon: "tuition" as NavIconName,
      },
      {
        title: "Academics",
        description:
          "World-class programs with expert faculty guidance across engineering, management, and computer applications.",
        icon: "programs" as NavIconName,
      },
      {
        title: "Student Life",
        description:
          "Vibrant campus activities, cultural events, sports, and clubs that go beyond the classroom.",
        icon: "campus" as NavIconName,
      },
    ],
  },
  campusTour: {
    title: "Our Campus Tour",
    description:
      "Explore our Chrompet campus — from modern lecture halls and engineering laboratories to the central library and sports grounds. See where SBIST students learn, research, and grow.",
    videoHref: "/campus-tour",
    image: stockImages.campus,
  },
  testimonials: {
    title: "Student Feedback",
    description:
      "Our students are at the heart of everything we do. Their stories reflect our mission to inspire, empower, and prepare the next generation of engineers.",
    items: [
      {
        rating: 5.0,
        quote:
          "At SBIST, the faculty genuinely care about your growth. The labs and mentorship helped me land my first internship before graduation.",
        name: "Arjun Kumar",
        role: "B.E. Computer Science Engineering",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop",
      },
      {
        rating: 5.0,
        quote:
          "The ICT program at SBIST is world-class. We work on real projects, not just theory. The labs and research opportunities gave me the edge I needed.",
        name: "Priya Menon",
        role: "B.E. Information and Communication Technology",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop",
      },
      {
        rating: 4.5,
        quote:
          "SBIST gave me a strong foundation in electrical and communication engineering. The campus environment and peer community made learning collaborative and enjoyable.",
        name: "Rahul Venkatesh",
        role: "B.E. Electrical and Communication Engineering",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop",
      },
      {
        rating: 5.0,
        quote:
          "From placement training to industry visits, SBIST prepared me for the professional world. I am proud to be an SBIST graduate.",
        name: "Deepa Srinivasan",
        role: "B.E. Civil Engineering",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop",
      },
    ],
  },
  gallery: {
    title: "Discover Campus Life",
    subtitle: "Gallery",
    images: [
      { src: stockImages.campus, alt: "Main Campus", caption: "Academic block" },
      { src: stockImages.library, alt: "Central Library" },
      {
        src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=600&fit=crop",
        alt: "Lecture Hall",
      },
      { src: stockImages.sports, alt: "Sports Ground" },
      { src: stockImages.graduation, alt: "Graduation Day" },
      {
        src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=600&fit=crop",
        alt: "Engineering Lab",
      },
    ] satisfies GalleryImage[],
    ctaHref: "/campus-life",
  },
};
