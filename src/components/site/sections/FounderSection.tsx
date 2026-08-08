import { Linkedin, Twitter, Mail, Award, Globe, Code2 } from "lucide-react";
import founderImg from "@/assets/tejas.png";

const stats = [
  { label: "Years Experience", value: "2+", icon: Award },
  { label: "Projects Delivered", value: "7+", icon: Code2 },
  { label: "Countries Served", value: "2+", icon: Globe },
];

const skills = [
  "Django & Python",
  "React & Next.js",
  "Mobile Apps",
  "UI/UX Design",
  "SaaS Architecture",
  "Team Leadership",
  "Growth Strategy",
];

export function FounderSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Ambient background blur orbs */}
      <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" aria-hidden />
      <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-primary-glow/10 blur-[100px]" aria-hidden />

      <div className="container relative">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-14 animate-fade-up">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-accent px-3 py-1 text-xs font-medium text-primary">
            Meet the Founder
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            The person behind <span className="gradient-text">AlfaaStack</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
           A full-stack Engineer and founder, transforming ideas into scalable digital products that drive business growth.
          </p>
        </div>

        {/* Founder glass card */}
        <div className="mx-auto max-w-5xl">
          <div className="relative rounded-[2.5rem] glass shadow-elegant glow-ring p-6 sm:p-10 animate-fade-up delay-100">
            <div className="grid gap-10 items-center lg:grid-cols-[340px_1fr]">
              {/* Portrait with floating badge */}
              <div className="relative mx-auto w-full max-w-[320px] lg:max-w-none">
                <div className="absolute -inset-4 rounded-[2rem] brand-gradient opacity-20 blur-2xl animate-pulse" aria-hidden />
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border/50">
                  <img
                    src={founderImg}
                    alt="Tejas Saitwal — Founder of AlfaaStack"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={680}
                    height={850}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                </div>

                {/* Floating verified badge */}
                {/* <div className="absolute -right-3 top-8 animate-float hidden sm:flex items-center gap-2 rounded-2xl glass px-4 py-2.5 shadow-card">
                  <div className="h-8 w-8 rounded-full brand-gradient grid place-items-center text-primary-foreground">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Verified</p>
                    <p className="text-xs font-semibold">Top Rated Founder</p>
                  </div>
                </div> */}

                {/* Floating stats chip */}
                <div className="absolute -left-4 bottom-12 animate-float hidden sm:flex items-center gap-2 rounded-2xl glass px-4 py-2.5 shadow-card" style={{ animationDelay: "1.2s" }}>
                  <div className="h-8 w-8 rounded-full bg-emerald-500/15 text-emerald-500 grid place-items-center">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Verified</p>
                    <p className="text-xs font-semibold">Founder</p>
                  </div>
                </div>
              </div>

              {/* Profile content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-accent/70 px-3 py-1 text-xs font-medium text-primary mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  Available for new projects
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Tejas Saitwal</h3>
                <p className="mt-1 text-sm sm:text-base text-muted-foreground">Founder & CEO</p>

                <blockquote className="mt-6 rounded-2xl border-l-4 border-primary bg-accent/40 p-4 text-sm sm:text-base italic text-foreground/85 leading-relaxed">
                  “I'm Tejas Saitwal, the Founder and Full-Stack Engineer of AlfaaStack Technologies. I specialize in building modern websites, web applications, mobile apps, and custom software that help businesses grow.”
                </blockquote>

                <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  To empower businesses with innovative, scalable, and affordable digital solutions while building AlfaaStack into a trusted global technology brand..
                </p>

                {/* Skills tags */}
                <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/80 bg-background/60 px-3 py-1 text-xs font-medium text-foreground/80">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social links */}
                <div className="mt-7 flex items-center justify-center lg:justify-start gap-3">
                  <a  
                    href="https://www.linkedin.com/in/tejas-saitwal"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="h-10 w-10 grid place-items-center rounded-xl brand-gradient text-primary-foreground transition-transform hover:scale-110"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="https://x.com/tejassaitwal"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                    className="h-10 w-10 grid place-items-center rounded-xl bg-accent text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:alfaastack@gmail.com"
                    aria-label="Email"
                    className="h-10 w-10 grid place-items-center rounded-xl bg-accent text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                  {stats.map(({ label, value, icon: Icon }) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-border/60 bg-background/50 p-3 sm:p-4 text-center transition-transform hover:-translate-y-1"
                    >
                      <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="font-display text-xl sm:text-2xl font-semibold gradient-text">{value}</p>
                      <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
