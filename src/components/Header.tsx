import { useState } from "react";
import { Menu, X } from "lucide-react";
import WanderBiteLogo from "./WanderBiteLogo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Food Apps", href: "#food-apps" },
  { label: "Travel Apps", href: "#travel-apps" },
  { label: "About", href: "#features" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container flex items-center justify-between py-3">
        <a href="#home"><WanderBiteLogo size="sm" /></a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="/login" className="text-sm font-semibold bg-brand-orange text-primary-foreground px-5 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Login
          </a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4 animate-fade-in">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
          <a href="/login" className="text-sm font-semibold bg-brand-orange text-primary-foreground px-5 py-2 rounded-lg text-center">
            Login
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
