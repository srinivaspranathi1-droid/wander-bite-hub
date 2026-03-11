import WanderBiteLogo from "./WanderBiteLogo";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card py-14">
    <div className="container grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
      <div>
        <WanderBiteLogo size="sm" />
        <p className="text-sm text-muted-foreground mt-3">Food & Travel Apps in One Place</p>
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-3 text-sm">Quick Links</h4>
        <div className="flex flex-col gap-2">
          {["Home", "Food Apps", "Travel Apps", "About"].map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-3 text-sm">Follow Us</h4>
        <div className="flex gap-3">
          {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
            <a key={i} href="#" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="container mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} WanderBite. All rights reserved.
    </div>
  </footer>
);

export default Footer;
