import { Link } from "react-router-dom";
import logo from "@/assets/logo1.png";
export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group" aria-label="AlfaaStack home">
      
      {/* <span className="relative flex h-9 w-9 items-center justify-center rounded-xl brand-gradient shadow-glow">
        <span className="font-display text-lg font-bold text-primary-foreground">A</span>
        <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
      </span> */}
      <span className="relative flex h-10 w-10 items-center justify-center">
        <img
          src={logo}
          alt="AlfaaStack Logo"
          className="h-10 w-10 object-contain"
        />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight">
        Alfaa<span className="text-primary">Stack</span>
      </span>
    </Link>
  );
}
