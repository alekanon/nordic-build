import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { CheckCircle, Award, Users, Target, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Award,
    title: "Kvalitet",
    description: "Vi går aldrig på kompromis med kvaliteten. Hver detalje tæller i vores arbejde.",
  },
  {
    icon: Users,
    title: "Partnerskab",
    description: "Vi ser os selv som partnere med vores kunder, ikke blot leverandører.",
  },
  {
    icon: Target,
    title: "Præcision",
    description: "Overholdelse af tidsplaner og budgetter er fundamentalt for vores virksomhed.",
  },
  {
    icon: Leaf,
    title: "Bæredygtighed",
    description: "Vi bygger med ansvar for miljøet og fremtidige generationer.",
  },
];

const milestones = [
  { year: "1998", event: "Dannova Byg grundlægges" },
  { year: "2005", event: "Første ISO 9001 certificering" },
  { year: "2010", event: "100 medarbejdere" },
  { year: "2015", event: "Første DGNB-certificerede projekt" },
  { year: "2020", event: "Udvidelse til hele Danmark" },
  { year: "2023", event: "350+ gennemførte projekter" },
];

const OmOs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted concrete-texture">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block font-heading text-sm uppercase tracking-[0.3em] text-primary mb-4">
              Hvem Vi Er
            </span>
            <h1 className="font-heading text-5xl md:text-6xl uppercase text-foreground mb-6">
              Om Dannova Byg
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I over 25 år har vi været en af Danmarks førende entreprenørvirksomheder inden for 
              industrielt og kommercielt byggeri. Vores mission er at levere bygninger af højeste 
              kvalitet med fokus på bæredygtighed og innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block font-heading text-sm uppercase tracking-[0.3em] text-primary mb-4">
                Vores Historie
              </span>
              <h2 className="font-heading text-4xl uppercase text-foreground mb-6">
                25+ År Med Professionelt<br />Byggeri
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dannova Byg blev grundlagt i 1998 med en vision om at levere erhvervsbyggeri 
                  af højeste kvalitet i Danmark. Fra starten har vi fokuseret på at kombinere 
                  traditionelt håndværk med moderne teknologi og bæredygtige løsninger.
                </p>
                <p>
                  I dag er vi vokset til over 120 dedikerede medarbejdere og har gennemført 
                  mere end 350 projekter over hele landet. Vores kundeportefølje spænder fra 
                  små og mellemstore virksomheder til store internationale koncerner.
                </p>
                <p>
                  Vi er stolte af at være blandt de førende inden for bæredygtigt byggeri med 
                  adskillige DGNB og BREEAM certificerede projekter.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="flex items-center gap-6 p-4 bg-muted"
                >
                  <span className="font-heading text-2xl text-primary w-20 flex-shrink-0">
                    {milestone.year}
                  </span>
                  <span className="text-foreground">{milestone.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted concrete-texture">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block font-heading text-sm uppercase tracking-[0.3em] text-primary mb-4">
              Hvad Vi Tror På
            </span>
            <h2 className="font-heading text-4xl uppercase text-foreground">
              Vores Værdier
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card p-8 text-center shadow-card"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl uppercase text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block font-heading text-sm uppercase tracking-[0.3em] text-primary mb-4">
                Kvalitet & Sikkerhed
              </span>
              <h2 className="font-heading text-4xl uppercase text-foreground mb-6">
                Certificeringer & Standarder
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Vi arbejder efter de højeste standarder i branchen og er certificeret 
                inden for kvalitetsstyring, miljøledelse og arbejdsmiljø.
              </p>
              <ul className="space-y-4">
                {[
                  "ISO 9001 - Kvalitetsstyring",
                  "ISO 14001 - Miljøledelse",
                  "ISO 45001 - Arbejdsmiljøledelse",
                  "DGNB Konsulent - Bæredygtigt Byggeri",
                  "BREEAM Assessor - Grøn Certificering",
                ].map((cert) => (
                  <li key={cert} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "120+", label: "Medarbejdere" },
                { number: "350+", label: "Projekter" },
                { number: "98%", label: "Tilfredshed" },
                { number: "25+", label: "Års Erfaring" },
              ].map((stat) => (
                <div key={stat.label} className="bg-muted p-8 text-center">
                  <span className="block font-heading text-4xl text-primary mb-2">
                    {stat.number}
                  </span>
                  <span className="font-heading text-sm uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-industrial-dark">
        <div className="container text-center">
          <h2 className="font-heading text-3xl md:text-4xl uppercase text-secondary-foreground mb-6">
            Vil Du Arbejde Med Os?
          </h2>
          <p className="text-lg text-secondary-foreground/70 mb-8 max-w-2xl mx-auto">
            Vi er altid interesserede i at høre om nye projekter og samarbejdsmuligheder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/kontakt">Kontakt Os</Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/prisestimat">Få Prisestimat</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OmOs;
