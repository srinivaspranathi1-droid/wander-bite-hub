import { Zap, UtensilsCrossed, Plane, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Zap, title: "Fast Access to Multiple Apps", desc: "Jump into any food or travel app instantly from one hub." },
  { icon: UtensilsCrossed, title: "Best Food Delivery Platforms", desc: "All major food delivery services curated for you." },
  { icon: Plane, title: "Trusted Travel Booking Services", desc: "Top-rated travel platforms you can rely on." },
  { icon: LayoutGrid, title: "Everything in One Place", desc: "No more switching apps — find it all here." },
];

const Features = () => (
  <section id="features" className="py-20 md:py-28">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
        Why <span className="text-brand-orange">Wander</span><span className="text-brand-blue">Bite</span>?
      </h2>
      <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
        We make it effortless to access the world's best food and travel platforms.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="bg-card rounded-2xl p-8 card-shadow text-center flex flex-col items-center gap-4"
          >
            <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center">
              <f.icon className="text-brand-orange" size={28} />
            </div>
            <h3 className="font-bold text-foreground">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
