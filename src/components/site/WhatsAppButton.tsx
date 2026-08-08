import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9322738223?text=Hi%20AlfaaStack%2C%20I%27d%20like%20a%20free%20quote."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/40 blur-xl animate-pulse" aria-hidden />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] text-white shadow-elegant transition-transform group-hover:scale-105">
        <MessageCircle className="h-6 w-6" />
      </span>
      <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg glass px-3 py-1.5 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Chat on WhatsApp
      </span>
    </a>
  );
}
