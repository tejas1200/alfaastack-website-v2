import { Section } from "../Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Marketing sites ship in 2–4 weeks, web apps in 6–10 weeks, and mobile / SaaS platforms usually 10–16 weeks depending on scope.",
  },
  {
    q: "Do you offer fixed pricing?",
    a: "Yes. For most engagements we scope the work up front and quote a fixed fee. Longer-term partnerships can also be billed as dedicated teams.",
  },
  {
    q: "Which technologies do you use?",
    a: "React, Next.js, React Native, Flutter, Node.js, Python, PostgreSQL, Supabase and modern cloud infra (Vercel, AWS, GCP).",
  },
  {
    q: "Do you provide design too?",
    a: "Absolutely. Our team covers product design, UI/UX and design systems end-to-end in Figma.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes 30 days of free post-launch support. Ongoing retainers are available for maintenance and iteration.",
  },
  {
    q: "How do we get started?",
    a: "Send us a message via the contact form or WhatsApp. You'll get a discovery call within 24 hours and a proposal within 3 business days.",
  },
];

export function FAQ() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title={<>Answers to the <span className="gradient-text">common questions</span></>}
      description="Something else on your mind? Get in touch and we'll answer within a day."
    >
      <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card px-2 sm:px-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-medium hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
