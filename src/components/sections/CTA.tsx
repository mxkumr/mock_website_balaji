"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ScrollReveal, ScaleReveal } from "@/components/motion/ScrollAnimations";

export type CTAProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  image?: string;
  variant?: "default" | "split";
};

export function CTA({
  title = "Admissions Open Now",
  description = "Start your academic journey with an institute committed to excellence, innovation, and student success.",
  primaryLabel = "Apply Now",
  primaryHref = "/apply",
  secondaryLabel = "Learn More",
  secondaryHref = "/about",
  image = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
  variant = "split",
}: CTAProps) {
  if (variant === "default") {
    return (
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">{description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={primaryHref} variant="accent" size="lg">
                {primaryLabel}
              </Button>
              {secondaryHref && secondaryLabel && (
                <Button
                  href={secondaryHref}
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  {secondaryLabel}
                </Button>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScaleReveal>
          <div className="motion-lift overflow-hidden rounded-2xl bg-primary shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Apply Today
                </span>
                <h2 className="mt-3 text-3xl font-bold text-white lg:text-4xl">{title}</h2>
                <p className="mt-4 text-base leading-relaxed text-white/80">{description}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href={primaryHref} variant="accent" size="lg">
                    {primaryLabel}
                  </Button>
                  {secondaryHref && secondaryLabel && (
                    <Button href={secondaryHref} variant="white" size="lg">
                      {secondaryLabel}
                    </Button>
                  )}
                </div>
              </div>
              <div className="relative min-h-[280px] lg:min-h-[320px]">
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent lg:hidden" />
              </div>
            </div>
          </div>
        </ScaleReveal>
      </div>
    </section>
  );
}
