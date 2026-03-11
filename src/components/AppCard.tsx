import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export interface AppInfo {
  name: string;
  domain: string;
  description: string;
  url: string;
  category: "food" | "travel";
}

const AppCard = ({ app, index }: { app: AppInfo; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ delay: index * 0.05, duration: 0.4 }}
    className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300 flex flex-col items-center text-center gap-4 group"
  >
    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
      <img
        src={`https://logo.clearbit.com/${app.domain}`}
        alt={app.name}
        className="w-12 h-12 object-contain"
        loading="lazy"
        onError={(e) => {
          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${app.name}&background=random&size=96`;
        }}
      />
    </div>
    <h3 className="font-bold text-lg text-foreground">{app.name}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{app.description}</p>
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl transition-opacity hover:opacity-90 ${
        app.category === "food" ? "bg-brand-orange text-primary-foreground" : "bg-brand-blue text-secondary-foreground"
      }`}
    >
      Visit Website <ExternalLink size={14} />
    </a>
  </motion.div>
);

export default AppCard;
