import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroProject2 from "@/assets/hero-project-2.jpg";
export const ExpertiseSection = () => {
  return <section className="py-24 bg-muted">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={heroProject2} alt="Professionelt håndværk" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            {/* Accent box */}
            
            
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block font-heading text-sm uppercase tracking-[0.3em] text-primary mb-4">
              Vores Ekspertise
            </span>
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-6">
              Kvalitet I<br />
              <span className="text-primary">Hver Detalje</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Med over 25 års erfaring i byggebranchen har vi opbygget en solid ekspertise 
              inden for alle aspekter af byggeri og renovering. Vores håndværkere er 
              specialister inden for deres respektive fagområder.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Vi investerer løbende i uddannelse og de nyeste teknikker for at sikre, 
              at vi altid leverer resultater af højeste kvalitet.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="text-center p-6 bg-background border-b-4 border-primary">
                <span className="block font-heading text-4xl text-primary mb-2">350+</span>
                <span className="text-sm uppercase tracking-wider text-muted-foreground">Projekter</span>
              </div>
              <div className="text-center p-6 bg-background border-b-4 border-primary">
                <span className="block font-heading text-4xl text-primary mb-2">98%</span>
                <span className="text-sm uppercase tracking-wider text-muted-foreground">Tilfredse Kunder</span>
              </div>
            </div>

            <Button asChild variant="default" size="lg">
              <Link to="/om-os">Læs Mere Om Os</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};