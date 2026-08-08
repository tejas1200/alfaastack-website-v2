import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-hero p-10 sm:p-16 text-center">
          <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full brand-gradient opacity-30 blur-3xl" aria-hidden />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto">
              Ready to Grow Your <span className="gradient-text">Business Online?</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Let's turn your idea into a modern website, mobile app, or custom software that helps your business succeed.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="brand-gradient text-primary-foreground shadow-elegant">
                <Link to="/contact">Get Free Quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://wa.me/9322738223" target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4 text-emerald-500" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
