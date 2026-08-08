import { useState } from "react";
import { Section } from "../Section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";


interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  message: string;
}


export function Contact() {

const [loading, setLoading] = useState(false);

const [form, setForm] = useState<ContactFormData>({
  name: "",
  email: "",
  phone: "",
  company: "",
  budget: "",
  message: "",
});




const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};


const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.message || "Submission failed."
      );
    }

    toast.success(
      "Thank you! We'll contact you within 24 hours."
    );

    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "",
      message: "",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    toast.error(
      "Unable to submit your request. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={<>Let's Build Something<span className="gradient-text"> Amazing</span></>}
      description="Get a free consultation and project estimate within 24 hours. No hidden costs, no obligation—just honest advice and quality development.."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          <div className="rounded-2xl glass p-6">
            <h3 className="font-display text-lg font-semibold">Let's Talk About Your Project</h3>
            <p className="text-sm text-muted-foreground mt-1">Reach us on any channel you prefer.</p>
            <div className="mt-5 space-y-4">
              {[
                { icon: Mail, label: "alfaastack@gmail.com", href: "mailto:alfaastack@gmail.com" },
                { icon: MessageCircle, label: "WhatsApp us", href: "https://wa.me/9322738223" },
                // { icon: Phone, label: "+1 (555) 010-2040", href: "tel:+15550102040" },
                { icon: MapPin, label: "Remote-first · Global", href: "https://www.google.com/maps/dir/Alfaastack+Technologies,+Kasturi+nagar,+Jamner+Pura+Township,+Jamner,+Maharashtra+424206/Alfaastack+Technologies,+Kasturi+nagar,+Jamner+Pura+Township,+Jamner,+Maharashtra+424206/@20.8158153,75.7720324,15z/data=!4m13!4m12!1m5!1m1!1s0x3bd99fe4bd2833c3:0xe361ae6cf8047fc3!2m2!1d75.7810464!2d20.8145976!1m5!1m1!1s0x3bd99fe4bd2833c3:0xe361ae6cf8047fc3!2m2!1d75.7810464!2d20.8145976?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D" },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border p-6 bg-card">
            <p className="text-sm font-medium">Response time</p>
            <p className="text-2xl font-display font-semibold gradient-text mt-1">Within 24 hours</p>
            <p className="text-xs text-muted-foreground mt-2">Monday – Friday | 9:00 AM – 6:00 PM | worldwide.</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              required
            />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Optional"
            />
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">Budget</Label>
              <Input
              id="budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              placeholder="₹5,000 – ₹50,000"
            />
            </div>
          </div>
          <div className="space-y-2">
          <Label htmlFor="message">Project Details</Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Tell us about your project..."
          />
        </div>
          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="w-full brand-gradient text-primary-foreground shadow-elegant"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            By submitting you agree to our privacy policy. We never share your info.
          </p>
        </form>
      </div>
    </Section>
  );
}
