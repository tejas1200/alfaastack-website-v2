import { Section } from "../Section";
import { Building2, HeartPulse, GraduationCap, Landmark, ShoppingBag, Plane, Truck, Utensils } from "lucide-react";

const items = [
  { icon: Building2, label: "Real Estate" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: GraduationCap, label: "Education" },
  { icon: Landmark, label: "Fintech" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Plane, label: "Travel" },
  { icon: Truck, label: "Logistics" },
  { icon: Utensils, label: "F&B" },
];

export function Industries() {
  return (
    <Section
      eyebrow="Industries we serve"
      title={<>Expertise Across <span className="gradient-text">Industries</span></>}
      description="Helping startups and businesses across multiple industries build modern websites, mobile apps, and custom software tailored to their unique needs."
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 hover:border-primary/50 hover:shadow-card transition-all"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary group-hover:brand-gradient group-hover:text-primary-foreground transition-colors">
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-center">{label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
