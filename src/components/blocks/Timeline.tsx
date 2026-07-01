export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

export type TimelineProps = {
  events: TimelineEvent[];
  title?: string;
  subtitle?: string;
};

export function Timeline({
  events,
  title = "Our History",
  subtitle = "Timeline",
}: TimelineProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            {subtitle}
          </span>
          <h2 className="mt-2 text-3xl font-bold text-foreground">{title}</h2>
        </div>

        <ol className="relative border-l-2 border-primary/20 pl-8">
          {events.map((event, index) => (
            <li key={event.year + event.title} className="relative mb-10 last:mb-0">
              <span
                className={[
                  "absolute -left-[calc(2rem+5px)] flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white",
                  index === 0 ? "bg-accent" : "bg-primary",
                ].join(" ")}
                aria-hidden="true"
              >
                {event.year.slice(-2)}
              </span>
              <div className="rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <time className="text-sm font-bold text-primary">{event.year}</time>
                <h3 className="mt-1 text-lg font-bold text-foreground">{event.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{event.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
