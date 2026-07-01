import Image from "next/image";
import { Button } from "@/components/ui/Button";

export type HeroSlide = {
  title: string;
  subtitle: string;
  image: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

export type HeroProps = {
  slides?: HeroSlide[];
  badge?: string;
};

const defaultSlides: HeroSlide[] = [
  {
    title: "Welcome to Sree Balaji Institute of Science and Technology",
    subtitle:
      "Highly qualified faculties will guide you for career growth. Leading the way in higher education since our founding.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=800&fit=crop",
    ctaLabel: "Campus Tour",
    ctaHref: "/campus-tour",
    secondaryCtaLabel: "Apply Now",
    secondaryCtaHref: "/apply",
  },
];

export function Hero({ slides = defaultSlides, badge = "UNIVET" }: HeroProps) {
  const slide = slides[0];

  return (
    <section className="relative min-h-[520px] overflow-hidden lg:min-h-[600px]">
      <Image
        src={slide.image}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/80 to-primary/40" />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-20 lg:px-8 lg:py-28">
        <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {badge}
        </span>

        <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {slide.title}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          {slide.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          {slide.ctaHref && slide.ctaLabel && (
            <Button href={slide.ctaHref} variant="accent" size="lg">
              {slide.ctaLabel}
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
          )}
          {slide.secondaryCtaHref && slide.secondaryCtaLabel && (
            <Button
              href={slide.secondaryCtaHref}
              variant="white"
              size="lg"
            >
              {slide.secondaryCtaLabel}
            </Button>
          )}
        </div>

        {/* Quick contact strip */}
        <div className="mt-12 flex flex-wrap gap-6 border-t border-white/20 pt-8 text-sm text-white/80">
          <div>
            <p className="text-xs uppercase tracking-wider text-white/60">
              Quick Contact
            </p>
            <p className="mt-1 font-medium text-white">+91 44 2222 3333</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-white/60">
              Email
            </p>
            <p className="mt-1 font-medium text-white">office@sbist.in</p>
          </div>
        </div>
      </div>
    </section>
  );
}
