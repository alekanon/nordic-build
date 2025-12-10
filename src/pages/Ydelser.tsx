import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Building2, Hammer, Factory, Leaf, Wrench, HardHat, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    title: "Nybyggeri",
    description: "Professionel opførelse af erhvervsbygninger fra grund til nøglefærdigt byggeri.",
    features: [
      "Kontorbygninger",
      "Produktionshaller",
      "Lagerbygninger",
      "Butikslokaler",
      "Parkeringshuse",
    ],
  },
  {
    icon: Hammer,
    title: "Renovering",
    description: "Omfattende renovering og modernisering af eksisterende erhvervsejendomme.",
    features: [
      "Energirenovering",
      "Facaderenovering",
      "Tagrenovering",
      "Indvendig ombygning",
      "Tekniske installationer",
    ],
  },
  {
    icon: Factory,
    title: "Industribyggeri",
    description: "Specialiseret i store industrielle anlæg med komplekse tekniske krav.",
    features: [
      "Produktionsfaciliteter",
      "Logistikcentre",
      "Køle- og frysehuse",
      "Procesbygninger",
      "Værksteder",
    ],
  },
  {
    icon: Leaf,
    title: "Bæredygtigt Byggeri",
    description: "Miljøvenlige byggeløsninger med fokus på certificeringer og grøn omstilling.",
    features: [
      "DGNB-certificering",
      "BREEAM-certificering",
      "Solcelleanlæg",
      "Grønne tage",
      "Genanvendelige materialer",
    ],
  },
  {
    icon: Wrench,
    title: "Vedligeholdelse",
    description: "Løbende vedligeholdelse og serviceaftaler for erhvervsejendomme.",
    features: [
      "Serviceaftaler",
      "Akut reparation",
      "Forebyggende vedligehold",
      "Bygningseftersyn",
      "Teknisk rådgivning",
    ],
  },
  {
    icon: HardHat,
    title: "Projektledelse",
    description: "Professionel styring af byggeproces fra planlægning til aflevering.",
    features: [
      "Byggeledelse",
      "Økonomistyring",
      "Kvalitetssikring",
      "Tidsplanlægning",
      "Interessenthåndtering",
    ],
  },
];

const Ydelser = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted concrete-texture">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block font-heading text-sm uppercase tracking-[0.3em] text-primary mb-4">
              Vores Kompetencer
            </span>
            <h1 className="font-heading text-5xl md:text-6xl uppercase text-foreground mb-6">
              Ydelser
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Vi tilbyder en bred vifte af byggeydelser til erhvervslivet. Fra nybyggeri og renovering 
              til specialiseret industribyggeri - altid med fokus på kvalitet og bæredygtighed.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-card p-10 shadow-card hover:shadow-industrial transition-all duration-300 border-l-4 border-primary"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary/10 flex-shrink-0">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl uppercase text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-industrial-dark">
        <div className="container text-center">
          <h2 className="font-heading text-3xl md:text-4xl uppercase text-secondary-foreground mb-6">
            Har Du Brug For Vores Ekspertise?
          </h2>
          <p className="text-lg text-secondary-foreground/70 mb-8 max-w-2xl mx-auto">
            Kontakt os for en uforpligtende samtale om dit projekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/prisestimat">Få Et Prisestimat</Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/kontakt">Kontakt Os</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ydelser;
