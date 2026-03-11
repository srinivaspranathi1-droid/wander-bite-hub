import { useState, useMemo } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AppCard from "../components/AppCard";
import Features from "../components/Features";
import Footer from "../components/Footer";
import { foodApps, travelApps } from "../components/appsData";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFood = useMemo(
    () => foodApps.filter((a) => a.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery]
  );
  const filteredTravel = useMemo(
    () => travelApps.filter((a) => a.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery]
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Food Apps */}
      <section id="food-apps" className="py-20 md:py-28">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            <span className="text-brand-orange">Food</span> Delivery Apps
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
            Order from the world's best food delivery platforms.
          </p>
          {filteredFood.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredFood.map((app, i) => (
                <AppCard key={app.name} app={app} index={i} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No food apps match your search.</p>
          )}
        </div>
      </section>

      {/* Travel Apps */}
      <section id="travel-apps" className="py-20 md:py-28 hero-gradient-bg">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            <span className="text-brand-blue">Travel</span> Booking Apps
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
            Plan your next trip with trusted booking platforms.
          </p>
          {filteredTravel.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTravel.map((app, i) => (
                <AppCard key={app.name} app={app} index={i} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No travel apps match your search.</p>
          )}
        </div>
      </section>

      <Features />
      <Footer />
    </div>
  );
};

export default Index;
