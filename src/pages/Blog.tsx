import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { ArrowUpRight, Calendar } from "lucide-react";

const posts = [
  { title: "Designing SaaS onboarding that actually converts", cat: "Design", date: "Jun 12, 2026", read: "6 min" },
  { title: "Why React Native still beats going native in 2026", cat: "Mobile", date: "May 28, 2026", read: "8 min" },
  { title: "The pragmatic guide to shipping a billing system", cat: "Engineering", date: "May 04, 2026", read: "10 min" },
  { title: "How we cut LCP from 4.2s to 1.1s on a real client", cat: "Performance", date: "Apr 22, 2026", read: "5 min" },
  { title: "Design tokens: the underrated superpower of scale", cat: "Design", date: "Apr 08, 2026", read: "7 min" },
  { title: "Choosing between Supabase and Firebase in 2026", cat: "Backend", date: "Mar 30, 2026", read: "9 min" },
];

const Blog = () => (
  <>
    <PageHeader
      eyebrow="Insights"
      title={<>Notes from the <span className="gradient-text">workshop</span></>}
      description="Product engineering, design and business lessons — from real client projects."
    />
    <Section>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <a
            key={p.title}
            href="#"
            className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 hover:shadow-elegant transition-all hover:-translate-y-1"
          >
            <div className="aspect-[16/10] brand-gradient opacity-90 relative">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <span className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-xs font-medium">{p.cat}</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" /> {p.date} · {p.read} read
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                Read article <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  </>
);

export default Blog;
