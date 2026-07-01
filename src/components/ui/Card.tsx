import { type ReactNode } from "react";

export type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
};

const paddingMap = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={[
        "rounded-xl border border-border bg-white shadow-sm",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        paddingMap[padding],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

export type CardHeaderProps = {
  children: ReactNode;
  className?: string;
};

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export type CardTitleProps = {
  children: ReactNode;
  as?: "h2" | "h3" | "h4";
  className?: string;
};

export function CardTitle({
  children,
  as: Tag = "h3",
  className = "",
}: CardTitleProps) {
  return (
    <Tag
      className={`text-lg font-bold text-foreground leading-snug ${className}`}
    >
      {children}
    </Tag>
  );
}

export type CardDescriptionProps = {
  children: ReactNode;
  className?: string;
};

export function CardDescription({
  children,
  className = "",
}: CardDescriptionProps) {
  return (
    <p className={`mt-2 text-sm leading-relaxed text-muted ${className}`}>
      {children}
    </p>
  );
}

export type CardContentProps = {
  children: ReactNode;
  className?: string;
};

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={className}>{children}</div>;
}

export type CardFooterProps = {
  children: ReactNode;
  className?: string;
};

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return <div className={`mt-4 pt-4 border-t border-border ${className}`}>{children}</div>;
}
