import { Section } from "../Section";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: "$1,499",
    tagline: "Landing pages & small sites",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO setup",
      "1 round of revisions",
      "Delivered in 2 weeks",
    ],
  },
  {
    name: "Growth",
    price: "$4,999",
    tagline: "Full websites & marketing sites",
    featured: true,
    features: [
      "Up to 15 pages + CMS",
      "Custom design system",
      "Advanced SEO + analytics",
      "3 rounds of revisions",
      "Delivered in 4–6 weeks",
      "30 days post-launch support",
    ],
  },
  {
    name: "Scale",
    price: "Custom",
    tagline: "SaaS, mobile apps & complex platforms",
    features: [
      "Dedicated senior team",
      "Discovery & product design",
      "Web + mobile + backend",
      "CI/CD + monitoring",
      "Ongoing partnership",
    ],
  },
];

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Transparent pricing"
      title={<>Simple, <span className="gradient-text">honest pricing</span></>}
      description="Fixed-scope engagements or dedicated teams. No surprises, no hidden fees."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={cn(
              "relative rounded-3xl border p-8 flex flex-col transition-all",
              t.featured
                ? "border-primary/60 bg-gradient-card shadow-elegant scale-[1.02]"
                : "border-border bg-card hover:border-primary/40"
            )}
          >
            {t.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full brand-gradient px-3 py-1 text-xs font-semibold text-primary-foreground shadow-elegant">
                <Sparkles className="h-3 w-3" /> Most popular
              </div>
            )}
            <h3 className="font-display text-xl font-semibold">{t.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{t.tagline}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-4xl font-semibold">{t.price}</span>
              {t.price !== "Custom" && <span className="text-sm text-muted-foreground">/ project</span>}
            </div>
            <ul className="mt-6 space-y-3 flex-1">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-primary shrink-0">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className={cn(
                "mt-8 w-full",
                t.featured ? "brand-gradient text-primary-foreground" : ""
              )}
              variant={t.featured ? "default" : "outline"}
            >
              <Link to="/contact">{t.price === "Custom" ? "Talk to us" : "Start project"}</Link>
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
