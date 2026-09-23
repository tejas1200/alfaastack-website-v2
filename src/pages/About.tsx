import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { Testimonials } from "@/components/site/sections/Testimonials";
import { TrustMetrics } from "@/components/site/sections/TrustMetrics";
import { CTA } from "@/components/site/sections/CTA";
import { Target, Users, Zap, Shield } from "lucide-react";

import { useSiteContent } from "@/hooks/useSiteContent";

const values = [
  { icon: Target, title: "Outcome-focused", desc: "We measure success by your business metrics, not deliverables." },
  { icon: Users, title: "Expert team", desc: "Every project is led and delivered by experts." },
  { icon: Zap, title: "Ship fast", desc: "Weekly demos, tight loops, and a bias for action from day one." },
  { icon: Shield, title: "Full ownership", desc: "You own the code, the designs, and the roadmap. Always." },
];

// const team = [
//   { name: "Tejas Saitwal", role: "Founder · Full-Stack Engineer" },
//   { name: "Mohini Jain", role: "HR" },
//   { name: "Naina Sonawane", role: "UI/UX Designer" },
//   { name: "Ratan Sharma", role: "Mobile Engineer" },
// ];

const About = () => {
  const { team } = useSiteContent();

  return (
  <>
    <PageHeader
      eyebrow="About AlfaaStack"
      title={<>Building Digital Solutions with <span className="gradient-text">Passion</span></>}
      description="Focused on delivering reliable and user-friendly digital solutions for every business."
    />
    <TrustMetrics />
    <Section
      eyebrow="Our values"
      title={<>What we <span className="gradient-text">stand for</span></>}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {values.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl brand-gradient text-primary-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section
      eyebrow="The team"
      title={<>Small team, <span className="gradient-text">big craft</span></>}
      description="Meet the humans behind your project."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {team.map((m) => (
          <div key={m.name} className="rounded-2xl glass p-6 text-center">
            
            <img
              src={m.image}
              alt={m.name}
              loading="lazy"
              className="mx-auto h-24 w-24 rounded-full object-cover border-4 border-primary/20 shadow-xl transition-transform duration-300 hover:scale-105"
            />

            <h3 className="mt-4 font-display text-lg font-semibold">{m.name}</h3>
            <p className="text-sm text-muted-foreground">{m.role}</p>
            {m.bio && <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{m.bio}</p>}
            <div className="mt-3 flex justify-center gap-3 text-xs">
              {m.linkedin && <a href={m.linkedin} target="_blank" rel="noreferrer" className="text-primary hover:underline">LinkedIn</a>}
              {m.twitter && <a href={m.twitter} target="_blank" rel="noreferrer" className="text-primary hover:underline">X</a>}
              {m.email && <a href={`mailto:${m.email}`} className="text-primary hover:underline">Email</a>}
            </div>
          </div>
        ))}
      </div>
    </Section>

    <Testimonials />
    <CTA />
  </>
  );
};

export default About;
