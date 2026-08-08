import { ArrowUpRight } from "lucide-react";
import { Section } from "../Section";
import { resolveIcon } from "@/data/siteContent";
import { useSiteContent } from "@/hooks/useSiteContent";

export function Services() {
  const { services } = useSiteContent();

  return (
    <Section
      id="services"
      eyebrow="What we build"
      title={<>End-to-end product engineering, <span className="gradient-text">under one roof</span></>}
      description="From business websites to complex SaaS platforms, we build high-quality digital products designed to help businesses grow."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => {
          const Icon = resolveIcon(service.icon);
          return (
            <div
              key={service.id}
              className="group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-elegant transition-all duration-300"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary group-hover:brand-gradient group-hover:text-primary-foreground transition-colors">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              <ArrowUpRight className="absolute top-6 right-6 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
            </div>
          );
        })}
      </div>
    </Section>
  );
}
