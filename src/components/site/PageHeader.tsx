import { type ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
}

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero border-b border-border/60">
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
      <div className="container relative py-20 sm:py-28 text-center">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-accent px-3 py-1 text-xs font-medium text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight max-w-3xl mx-auto">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
        )}
      </div>
    </section>
  );
}
