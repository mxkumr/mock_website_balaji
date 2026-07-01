import {
  Navbar,
  Hero,
  DepartmentCard,
  EngineeringIcon,
  FacultyCard,
  NewsCard,
  Counters,
  Timeline,
  Gallery,
  CTA,
  Footer,
  Button,
} from "@/components";
import {
  departments,
  faculty,
  news,
  galleryImages,
  timelineEvents,
  counterItems,
} from "@/lib/demo-data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero badge="SBIST" />

        {/* Academics & Programs */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12 text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Programs & Study
              </span>
              <h2 className="mt-2 text-3xl font-bold text-foreground">
                Academics & Programs
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {departments.map((dept) => (
                <DepartmentCard
                  key={dept.title}
                  {...dept}
                  icon={<EngineeringIcon />}
                />
              ))}
            </div>
          </div>
        </section>

        <Counters items={counterItems} />

        {/* About highlight */}
        <section className="bg-surface py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                About Your University
              </span>
              <h2 className="mt-2 text-3xl font-bold text-foreground">
                Empowering Students to Lead the Future
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                We live in an increasingly interconnected world that faces
                challenges on a global scale. At SBIST, qualified faculties and
                latest lab equipment support clearly defined research goals with
                timelines and progress evaluation.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "World-Class Education System",
                  "Global Internships & Placements",
                  "Modern Campus Facilities",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/about" variant="primary">
                  More About Us
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-xl bg-primary/10" />
                <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted">Award Winning</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-56 rounded-xl bg-accent/10" />
                <div className="h-32 rounded-xl bg-primary/5" />
              </div>
            </div>
          </div>
        </section>

        <Timeline events={timelineEvents} />

        {/* Faculty */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Our Professors
                </span>
                <h2 className="mt-2 text-3xl font-bold text-foreground">
                  SBIST Professors
                </h2>
              </div>
              <Button href="/faculty" variant="outline" size="sm">
                View All Professors
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {faculty.map((member) => (
                <FacultyCard key={member.name} {...member} />
              ))}
            </div>
          </div>
        </section>

        {/* News */}
        <section className="bg-surface py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Blog & News
                </span>
                <h2 className="mt-2 text-3xl font-bold text-foreground">
                  Read Our Latest News
                </h2>
              </div>
              <Button href="/blog" variant="outline" size="sm">
                View All Posts
              </Button>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {news.map((item) => (
                <NewsCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <Gallery images={galleryImages} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
