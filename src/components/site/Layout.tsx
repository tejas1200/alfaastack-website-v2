import { type ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <main id="main" className="pt-24">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
