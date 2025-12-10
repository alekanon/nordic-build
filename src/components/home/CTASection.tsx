import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-24 bg-industrial-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(255,255,255,0.1) 35px,
            rgba(255,255,255,0.1) 70px
          )`
        }} />
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block font-heading text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Klar Til At Komme I Gang?
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase text-secondary-foreground mb-6">
            Få Et Uforpligtende<br />
            <span className="text-primary">Prisestimat I Dag</span>
          </h2>
          <p className="text-xl text-secondary-foreground/70 mb-10 max-w-2xl mx-auto">
            Uanset om det er nybyggeri, renovering eller industribyggeri, står vores team klar 
            til at hjælpe dig med dit næste projekt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/prisestimat" className="flex items-center gap-2">
                Få Prisestimat <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <span className="text-secondary-foreground/50">eller</span>
            <a
              href="tel:+4512345678"
              className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-heading text-lg">+45 12 34 56 78</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
