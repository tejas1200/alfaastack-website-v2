import { useMemo, useState } from "react";
import { Section } from "../Section";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

export function Portfolio() {
  const { portfolio } = useSiteContent();
  const [active, setActive] = useState("All");

  const categories = useMemo(() => [
    "All",
    ...Array.from(new Set(portfolio.map((project) => project.category).filter(Boolean))),
  ], [portfolio]);

  const filtered = active === "All"
    ? portfolio
    : portfolio.filter((project) => project.category === active);

  return (
    <Section
      id="portfolio"
      eyebrow="Selected work"
      title={<>Products we're <span className="gradient-text">proud to ship</span></>}
      description="A snapshot of recent launches across web, mobile and SaaS."
    >
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium border transition-all",
              active === category
                ? "brand-gradient text-primary-foreground border-transparent shadow-elegant"
                : "border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
          No projects are available in this category yet.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <a
              key={project.id}
              href={project.link || "#"}
              target={project.link && project.link !== "#" ? "_blank" : undefined}
              rel={project.link && project.link !== "#" ? "noreferrer" : undefined}
              onClick={(event) => {
                if (!project.link || project.link === "#") event.preventDefault();
              }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                {project.img ? (
                  <img
                    src={project.img}
                    alt={`${project.title} — ${project.category} project by AlfaaStack`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full grid place-items-center text-sm text-muted-foreground">No project image</div>
                )}
              </div>
              <div className="p-5 flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs text-primary font-medium">{project.category}</div>
                  <h3 className="mt-1 font-display text-lg font-semibold">{project.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{project.tag}</p>
                  {project.description && (
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  )}
                </div>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border group-hover:brand-gradient group-hover:text-primary-foreground group-hover:border-transparent transition-all">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </Section>
  );
}
