import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function Section({ id, eyebrow, title, description, children, className, align = "center" }: SectionProps) {
  return (
    <section id={id} className={cn("py-10 sm:py-10", className)}>
      <div className="container">
        {(eyebrow || title || description) && (
          <div className={cn("max-w-2xl mb-14", align === "center" && "mx-auto text-center")}>
            {eyebrow && (
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-accent px-3 py-1 text-xs font-medium text-primary">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
