import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Indledende Møde",
    description: "Vi starter med en grundig gennemgang af dit projekt og dine ønsker. Vi besøger byggepladsen og diskuterer muligheder.",
  },
  {
    number: "02",
    title: "Tilbud & Planlægning",
    description: "Du modtager et detaljeret tilbud med klare priser. Vi planlægger projektet i samarbejde med dig.",
  },
  {
    number: "03",
    title: "Udførelse",
    description: "Vores erfarne håndværkere udfører arbejdet med fokus på kvalitet, tidsplan og minimal gene.",
  },
  {
    number: "04",
    title: "Aflevering",
    description: "Vi gennemgår projektet sammen og sikrer din fulde tilfredshed før endelig aflevering.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block font-heading text-sm uppercase tracking-[0.3em] text-primary mb-4">
              Sådan Arbejder Vi
            </span>
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-6">
              Fra Vision<br />
              <span className="text-primary">Til Virkelighed</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Hos Dannova Byg har vi en struktureret tilgang til hvert projekt. 
              Vi sikrer gennemsigtighed, kvalitet og at du altid er informeret gennem hele processen.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group flex gap-6 p-6 bg-muted hover:bg-muted/80 transition-colors border-l-4 border-primary"
              >
                <span className="font-heading text-4xl text-primary/30 group-hover:text-primary transition-colors">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-heading text-xl uppercase text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
