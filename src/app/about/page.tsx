import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  AboutCampusTourSection,
  AboutGallerySection,
  AboutMainSection,
  AboutTestimonialsSection,
  AboutVisionSection,
} from "@/components/sections/about/AboutPageSections";
import { CTA } from "@/components/sections/CTA";
import { aboutPageContent } from "@/lib/about-content";
import { siteConfig } from "@/lib/navigation";

export const metadata: Metadata = {
  title: `About | ${siteConfig.shortName}`,
  description: aboutPageContent.header.description,
};

export default function AboutPage() {
  const { header } = aboutPageContent;

  return (
    <>
      <Navbar variant="default" />
      <PageHeader
        title={header.title}
        description={header.description}
        breadcrumbs={header.breadcrumbs}
        backgroundImage={header.backgroundImage}
      />

      <main>
        <AboutMainSection />
        <AboutVisionSection />
        <AboutCampusTourSection />
        <AboutTestimonialsSection />
        <AboutGallerySection />
        <CTA
          title="Ready to Join SBIST?"
          description="Take the first step toward an engineering career backed by qualified faculty, modern laboratories, and a vibrant campus community in Chrompet, Chennai."
          primaryLabel="Apply Now"
          primaryHref="/apply"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
        />
      </main>

      <Footer />
    </>
  );
}
