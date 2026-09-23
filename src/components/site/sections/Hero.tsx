import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Sparkles, Star, Rocket, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero1.png";
import prashant from "@/assets/testimonials/prashant.jpg";
import sushant from "@/assets/testimonials/sushant.jpeg";
import suraj from "@/assets/testimonials/suraj.png";

const clients = [
  {
    name: "Prashant Saitwal",
    image: prashant,
  },
  {
    name: "Sushant Chatur",
    image: sushant,
  },
  {
    name: "Suraj Patil",
    image: suraj,
  },
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[560px] w-[960px] rounded-full brand-gradient opacity-25 blur-3xl" aria-hidden />
      <div className="absolute bottom-0 -right-24 h-[420px] w-[420px] rounded-full bg-primary-glow/30 blur-3xl" aria-hidden />

      <div className="container relative pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] items-center">
          {/* LEFT — copy */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-accent/70 backdrop-blur px-3 py-1.5 text-xs font-medium text-primary animate-fade-in">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted by 7+ founders &amp; teams worldwide
            </div>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight animate-fade-up">
              We build{" "}
              <span className="gradient-text"> websites, apps</span> &amp;{" "}
              <span className="relative whitespace-nowrap">
                softwares
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" aria-hidden>
                  <path d="M2 9 Q 150 -4 298 9" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{" "}
              that grow your business.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl animate-fade-up delay-100">
              Helping startups and businesses turn ideas into modern websites, mobile apps, and custom software with performance and quality at the core.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up delay-200">
              <Button asChild size="lg" className="brand-gradient text-primary-foreground shadow-elegant hover:opacity-95">
                <Link to="/contact">Get Free Quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border/80">
                <a href="https://wa.me/9322738223" target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4 text-emerald-500" /> WhatsApp Us
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 animate-fade-up delay-300">
              <div className="flex -space-x-3">
                {clients.map((client) => (
                  <img
                    key={client.name}
                    src={client.image}
                    alt={client.name}
                    loading="lazy"
                    className="h-11 w-11 rounded-full object-cover border-2 border-background shadow-lg transition-all duration-300 hover:scale-110 hover:z-10"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-xs text-muted-foreground mt-1">4.9/5 average from 5+ client reviews</p>
              </div>
            </div>
          </div>

          {/* RIGHT — product visual */}
          <div className="relative animate-fade-up delay-200">
            {/* Ambient glow */}
            <div className="absolute -inset-6 rounded-[2rem] brand-gradient opacity-20 blur-2xl" aria-hidden />

            <div className="relative rounded-[2rem] glass shadow-elegant glow-ring p-3 sm:p-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <img
                  src={heroImg}
                  alt="Modern web and mobile app interface mockups"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Floating chip: Speed */}
              <div className="hidden sm:flex absolute -left-6 top-10 glass rounded-2xl p-3 pr-4 shadow-card animate-float items-center gap-3">
                <div className="h-10 w-10 rounded-xl brand-gradient grid place-items-center text-primary-foreground">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Delivery</p>
                  <p className="text-sm font-semibold">2-4 week sprints</p>
                </div>
              </div>

              {/* Floating chip: Launches */}
              <div className="hidden sm:flex absolute -right-4 bottom-16 glass rounded-2xl p-3 pr-4 shadow-card animate-float items-center gap-3" style={{ animationDelay: "1.5s" }}>
                <div className="h-10 w-10 rounded-xl bg-emerald-500/15 text-emerald-500 grid place-items-center">
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Rating</p>
                  <p className="text-sm font-semibold">4.5 +</p>
                </div>
              </div>

              {/* Bottom stat bar */}
              {/* <div className="absolute inset-x-4 bottom-4 glass rounded-2xl p-4 shadow-card">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="font-display text-base sm:text-lg font-semibold gradient-text">7+</p>
                    <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Projects</p>
                  </div>
                  <div className="border-x border-border/60">
                    <p className="font-display text-base sm:text-lg font-semibold gradient-text">4.9/5</p>
                    <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Rating</p>
                  </div>
                  <div>
                    <p className="font-display text-base sm:text-lg font-semibold gradient-text">2+</p>
                    <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Countries</p>
                  </div>
                </div>
              </div> */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
