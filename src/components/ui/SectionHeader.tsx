import { type ReactNode } from "react";

export type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  action,
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div
      className={[
        "mb-12 lg:mb-16",
        action ? "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={align === "center" && !action ? alignClass : "max-w-2xl"}>
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>
        )}
        <h2 className="mt-2 text-3xl leading-tight text-foreground lg:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
