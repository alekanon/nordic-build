import { Link } from "react-router-dom";
import { Building2, Hammer, Factory, Leaf, Wrench, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Nybyggeri",
    description: "Professionel opførelse af erhvervsbygninger, kontorer og produktionsfaciliteter fra grund.",
  },
  {
    icon: Hammer,
    title: "Renovering",
    description: "Omfattende renovering og modernisering af eksisterende bygninger med fokus på energieffektivitet.",
  },
  {
    icon: Factory,
    title: "Industribyggeri",
    description: "Specialiseret i store industrielle anlæg, lagerbygninger og logistikcentre.",
  },
  {
    icon: Leaf,
    title: "Bæredygtigt Byggeri",
    description: "Miljøvenlige byggeløsninger med fokus på certificeringer som DGNB og BREEAM.",
  },
  {
    icon: Wrench,
    title: "Vedligeholdelse",
    description: "Løbende vedligeholdelse og serviceaftaler for erhvervsejendomme.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-muted concrete-texture">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block font-heading text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Hvad Vi Tilbyder
          </span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-6">
            Vores Ydelser
          </h2>
          <p className="text-lg text-muted-foreground">
            Vi leverer komplette byggeløsninger til erhvervslivet med fokus på kvalitet, bæredygtighed og professionel projektledelse.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card p-8 shadow-card hover:shadow-industrial transition-all duration-300 border-l-4 border-transparent hover:border-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="h-10 w-10 text-primary mb-6" />
              <h3 className="font-heading text-xl uppercase text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link
                to="/ydelser"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Læs Mere <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-primary p-8 flex flex-col justify-center">
            <h3 className="font-heading text-2xl uppercase text-primary-foreground mb-4">
              Har Du Et Projekt?
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Kontakt os i dag for en uforpligtende samtale om dit næste byggeprojekt.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider text-primary-foreground hover:gap-3 transition-all"
            >
              Kontakt Os <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
