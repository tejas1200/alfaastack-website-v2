import { Section } from "../Section";
import { Star, Quote } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

export function Testimonials() {
  const { clients } = useSiteContent();

  return (
    <Section
      eyebrow="Client voices"
      title={<>Trusted by Growing<span className="gradient-text"> Businesses</span></>}
      description="Real results, honest communication, and quality work—that's what our clients appreciate."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {clients.map((client) => (
          <figure
            key={client.id}
            className="relative rounded-2xl glass p-6 shadow-card hover:shadow-elegant transition-shadow"
          >
            <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/20" aria-hidden />
            <div className="flex gap-0.5 text-primary" aria-label={`${client.rating} out of 5 stars`}>
              {[...Array(Math.max(0, Math.min(5, client.rating)))].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">"{client.quote}"</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              {client.image ? (
                <img src={client.image} alt={client.name} loading="lazy" className="h-14 w-14 rounded-full object-cover border-2 border-primary shadow-md" />
              ) : (
                <div className="h-14 w-14 rounded-full border-2 border-primary bg-accent grid place-items-center text-primary font-semibold" aria-hidden>
                  {client.name.charAt(0)}
                </div>
              )}
              <div>
                <div className="text-sm font-semibold">{client.name}</div>
                <div className="text-xs text-muted-foreground">{client.role}{client.company ? `, ${client.company}` : ""}</div>
                {client.website && (
                  <a href={client.website} target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline">
                    Visit website
                  </a>
                )}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
