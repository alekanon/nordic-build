import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Over 25 års erfaring i branchen",
  "DGNB & BREEAM certificeret",
  "ISO 9001 kvalitetsstyring",
  "Dedikeret projektledelse",
];

export const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block font-heading text-sm uppercase tracking-[0.3em] text-primary mb-4">
              Om Dannova Byg
            </span>
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-6">
              Professionelt Byggeri<br />
              <span className="text-primary">Med Fokus På Kvalitet</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Dannova Byg er en førende entreprenørvirksomhed med speciale i industrielt og kommercielt byggeri. 
              Vi kombinerer håndværksmæssig ekspertise med moderne teknologi for at levere byggerier, 
              der overstiger vores kunders forventninger.
            </p>

            <ul className="space-y-4 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="default" size="lg">
                <Link to="/om-os">Læs Mere Om Os</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/referencer">Se Referencer</Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "25+", label: "Års Erfaring" },
              { number: "350+", label: "Projekter Afsluttet" },
              { number: "98%", label: "Kundetilfredshed" },
              { number: "120+", label: "Medarbejdere" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-muted p-8 text-center border-b-4 border-primary"
              >
                <span className="block font-heading text-5xl text-primary mb-2">
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
  );
};
