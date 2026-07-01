"use client";

import { useEffect, useRef, useState } from "react";

export type CounterItem = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

export type CountersProps = {
  items: CounterItem[];
  title?: string;
  subtitle?: string;
  duration?: number;
};

function useCountUp(
  target: number,
  duration: number,
  started: boolean,
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;
    let frame: number;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, started]);

  return count;
}

function CounterBlock({
  item,
  duration,
  started,
}: {
  item: CounterItem;
  duration: number;
  started: boolean;
}) {
  const count = useCountUp(item.value, duration, started);

  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-white lg:text-5xl">
        {item.prefix}
        {count.toLocaleString()}
        {item.suffix}
      </p>
      <p className="mt-2 text-sm text-white/80">{item.label}</p>
    </div>
  );
}

export function Counters({
  items,
  title,
  subtitle,
  duration = 2000,
}: CountersProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-primary py-16 lg:py-20"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {subtitle && (
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="mt-2 text-3xl font-bold text-white">{title}</h2>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {items.map((item) => (
            <CounterBlock
              key={item.label}
              item={item}
              duration={duration}
              started={started}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
