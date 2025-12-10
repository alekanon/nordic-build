import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroProject1 from "@/assets/hero-project-1.jpg";
import heroProject2 from "@/assets/hero-project-2.jpg";
import heroProject3 from "@/assets/hero-project-3.jpg";

const projects = [
  {
    image: heroProject1,
    title: "Industripark Nord",
    subtitle: "Kommercielt Byggeri",
    description: "8.500 m² moderne produktionsfacilitet med bæredygtige løsninger",
  },
  {
    image: heroProject2,
    title: "GreenTech Campus",
    subtitle: "Bæredygtigt Kontor",
    description: "Klimaneutralt kontorkompleks med DGNB-certificering",
  },
  {
    image: heroProject3,
    title: "Logistics Center Øst",
    subtitle: "Lagerbyggeri",
    description: "25.000 m² avanceret logistikcenter med automatisering",
  },
];

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Images */}
      {projects.map((project, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
      ))}

      {/* Content */}
      <div className="relative container h-full flex items-center">
        <div className="max-w-3xl">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === current
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute"
              }`}
            >
              {index === current && (
                <>
                  <span className="inline-block font-heading text-sm uppercase tracking-[0.3em] text-primary mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                    {project.subtitle}
                  </span>
                  <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-secondary-foreground uppercase leading-none mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                    {project.title}
                  </h1>
                  <p className="text-xl text-secondary-foreground/80 mb-8 max-w-xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
                    {project.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                    <Button asChild variant="hero" size="lg">
                      <Link to="/prisestimat">Få Et Prisestimat</Link>
                    </Button>
                    <Button asChild variant="heroOutline" size="lg">
                      <Link to="/referencer">Se Vores Projekter</Link>
                    </Button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-8 flex items-center gap-4">
        <button
          onClick={goToPrev}
          className="p-3 border border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 transition-colors"
          aria-label="Forrige projekt"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={goToNext}
          className="p-3 border border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 transition-colors"
          aria-label="Næste projekt"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 transition-all duration-300 ${
              index === current
                ? "w-12 bg-primary"
                : "w-6 bg-secondary-foreground/30 hover:bg-secondary-foreground/50"
            }`}
            aria-label={`Gå til projekt ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 hidden lg:flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-secondary-foreground/50 rotate-[-90deg] origin-center translate-y-12">
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-secondary-foreground/50 to-transparent" />
      </div>
    </section>
  );
};
