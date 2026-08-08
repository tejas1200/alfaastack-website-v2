import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const cols = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/process", label: "Process" },
      { to: "/services", label: "Services" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { to: "/services", label: "Web Development" },
      { to: "/services", label: "Mobile Apps" },
      { to: "/services", label: "E-commerce" },
      { to: "/services", label: "SaaS Platforms" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/portfolio", label: "Portfolio" },
      { to: "/contact", label: "Support" },
    ],
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tejas-saitwal",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/tejas1200",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/tej_saitwal",
  },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-surface">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr_1.4fr]">

          {/* Left */}
          <div className="space-y-5">
            <Logo />

            <p className="text-sm text-muted-foreground max-w-sm">
              Helping businesses grow with modern websites, mobile apps, and
              custom software solutions.
            </p>

            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Middle */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {cols.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold mb-4">
                  {column.title}
                </h3>

                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right */}
          <div>
            <h3 className="text-sm font-semibold mb-4">
              Need a Website or App?
            </h3>

            <p className="text-sm text-muted-foreground mb-5">
              Contact me directly on WhatsApp for a free consultation.
            </p>

            <Button asChild className="brand-gradient w-full">
              <a
                href="https://wa.me/919322738223"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </Button>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Alfaastack Technologies. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-primary">
              Terms & Conditions
            </Link>

            <Link to="/contact" className="hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}