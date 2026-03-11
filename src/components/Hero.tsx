import { Search } from "lucide-react";

interface HeroProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

const Hero = ({ searchQuery, onSearchChange }: HeroProps) => (
  <section id="home" className="hero-gradient-bg py-24 md:py-32">
    <div className="container text-center max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-up">
        Discover <span className="text-brand-orange">Food</span> & <span className="text-brand-blue">Travel</span> Apps in One Place
      </h1>
      <p className="text-muted-foreground text-lg md:text-xl mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        Access the best food delivery and travel booking platforms quickly and easily from a single hub.
      </p>
      <div className="relative max-w-xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
        <input
          type="text"
          placeholder="Search apps..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-card text-foreground card-shadow focus:outline-none focus:ring-2 focus:ring-brand-orange text-base"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <a href="#food-apps" className="bg-brand-orange text-primary-foreground font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity">
          Explore Food Apps
        </a>
        <a href="#travel-apps" className="bg-brand-blue text-secondary-foreground font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity">
          Explore Travel Apps
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
