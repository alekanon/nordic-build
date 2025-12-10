import { Shield, Clock, Users, Award } from "lucide-react";
import heroProject1 from "@/assets/hero-project-1.jpg";

const reasons = [
  {
    icon: Shield,
    title: "Garanti På Alt Arbejde",
    description: "Vi står 100% bag vores arbejde med fuld garanti på alle udførte opgaver.",
  },
  {
    icon: Clock,
    title: "Overholder Tidsplaner",
    description: "Vi ved hvor vigtigt tid er. Derfor overholder vi altid de aftalte deadlines.",
  },
  {
    icon: Users,
    title: "Erfarne Håndværkere",
    description: "Vores team består udelukkende af erfarne fagfolk med mange års erfaring.",
  },
  {
    icon: Award,
    title: "Kvalitetssikring",
    description: "Alle projekter gennemgår grundig kvalitetskontrol før aflevering.",
  },
];

export const WhyUsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block font-heading text-sm uppercase tracking-[0.3em] text-primary mb-4">
              Hvorfor Vælge Os
            </span>
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-8">
              Tillid Gennem<br />
              <span className="text-primary">Resultater</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 flex items-center justify-center">
                    <reason.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg uppercase text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden">
              <img
                src={heroProject1}
                alt="Kvalitetsarbejde"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-8 -left-8 bg-primary p-8 hidden lg:block">
              <span className="block font-heading text-5xl text-primary-foreground mb-1">25+</span>
              <span className="text-primary-foreground/80 uppercase text-sm tracking-wider">Års Erfaring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
