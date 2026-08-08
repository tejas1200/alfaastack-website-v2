import { Section } from "../Section";
import { MessageSquare, PencilRuler, Code, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Discovery", desc: "We map your goals, users and constraints into a clear brief." },
  { icon: PencilRuler, title: "Design", desc: "Wireframes and pixel-perfect UI in Figma with tight feedback loops." },
  { icon: Code, title: "Build", desc: "Weekly demos, clean code, and full transparency on progress." },
  { icon: Rocket, title: "Launch", desc: "QA, performance tuning and a smooth production release." },
  { icon: LifeBuoy, title: "Support", desc: "Ongoing improvements, monitoring and dedicated support." },
];

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="How we work"
      title={<>Our Simple <span className="gradient-text">5-Step Process</span></>}
      description="From idea to launch, I keep the process simple, transparent, and focused on delivering results—without the complexity."
    >
      <div className="relative">
        <div className="hidden md:block absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" aria-hidden />
        <ol className="grid gap-6 md:grid-cols-5">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <li key={title} className="relative">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full brand-gradient text-primary-foreground shadow-elegant relative z-10">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-5 rounded-2xl glass p-5 text-center">
                <div className="text-xs font-mono text-primary">STEP 0{i + 1}</div>
                <h3 className="mt-1 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
