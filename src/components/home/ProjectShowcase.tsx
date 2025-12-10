import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroProject1 from "@/assets/hero-project-1.jpg";
import heroProject3 from "@/assets/hero-project-3.jpg";

export const ProjectShowcase = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-heading text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Udvalgte Projekter
          </span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-6">
            Se Vores Arbejde
          </h2>
          <p className="text-lg text-muted-foreground">
            Vi er stolte af de projekter vi har været en del af. Her er et udvalg af vores seneste arbejder.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Large Project */}
          <div className="group relative overflow-hidden aspect-[4/3]">
            <img
              src={heroProject1}
              alt="Industribyggeri projekt"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block font-heading text-sm uppercase tracking-[0.2em] text-primary mb-2">
                Facaderenovering
              </span>
              <h3 className="font-heading text-2xl uppercase text-foreground mb-2">
                Erhvervspark Nordhavn
              </h3>
              <p className="text-muted-foreground mb-4">
                Komplet facadepuds og beklædning af 4.500 m² erhvervsejendom
              </p>
              <Link
                to="/referencer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Se Projekt <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Stacked Projects */}
          <div className="flex flex-col gap-8">
            <div className="group relative overflow-hidden aspect-[16/9]">
              <img
                src={heroProject3}
                alt="Tømrerarbejde projekt"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block font-heading text-xs uppercase tracking-[0.2em] text-primary mb-1">
                  Tømrerarbejde
                </span>
                <h3 className="font-heading text-xl uppercase text-foreground mb-1">
                  Kontorkompleks Ørestad
                </h3>
                <p className="text-sm text-muted-foreground">
                  Indvendigt tømrerarbejde inkl. systemlofter og gipsvægge
                </p>
              </div>
            </div>

            <div className="bg-primary p-8 flex flex-col justify-center flex-1">
              <h3 className="font-heading text-2xl uppercase text-primary-foreground mb-4">
                Se Alle Projekter
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Udforsk vores portfolio med over 350 gennemførte projekter inden for alle vores fagområder.
              </p>
              <Button asChild variant="heroOutline" size="lg" className="w-fit">
                <Link to="/referencer">
                  Til Referencer <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
