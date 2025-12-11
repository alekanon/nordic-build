import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/PageHero";
import { ReferenceModal } from "@/components/shared/ReferenceModal";
import heroProject1 from "@/assets/hero-project-1.jpg";
import heroProject2 from "@/assets/hero-project-2.jpg";
import heroProject3 from "@/assets/hero-project-3.jpg";

const projects = [
  {
    image: heroProject1,
    title: "Industripark Nord",
    category: "Kommercielt Byggeri",
    location: "København",
    year: "2023",
    size: "8.500 m²",
    description: "Moderne produktionsfacilitet med integrerede kontorer og bæredygtige løsninger. Projektet omfattede komplet facaderenovering med systempuds og installation af energieffektive vinduer.",
  },
  {
    image: heroProject2,
    title: "GreenTech Campus",
    category: "Bæredygtigt Kontor",
    location: "Aarhus",
    year: "2023",
    size: "12.000 m²",
    description: "Klimaneutralt kontorkompleks med DGNB Guld-certificering. Vi udførte alt tømrerarbejde inkl. gipsvægge, lofter og indvendige døre samt komplet malerarbejde.",
  },
  {
    image: heroProject3,
    title: "Logistics Center Øst",
    category: "Lagerbyggeri",
    location: "Odense",
    year: "2022",
    size: "25.000 m²",
    description: "Avanceret logistikcenter med automatiseret lagersystem. Betonfinish arbejde på alle elementer og facade med aluminiumbeklædning.",
  },
  {
    image: heroProject1,
    title: "Tech Hub Ballerup",
    category: "Erhvervsbyggeri",
    location: "Ballerup",
    year: "2022",
    size: "6.200 m²",
    description: "Fleksibelt erhvervsbyggeri til tech-virksomheder med fokus på samarbejde. Komplet indvendig finish inkl. systemlofter og trægulve.",
  },
  {
    image: heroProject2,
    title: "Pharma Production",
    category: "Industribyggeri",
    location: "Hillerød",
    year: "2021",
    size: "15.000 m²",
    description: "Renrumsfaciliteter til farmaceutisk produktion med strenge kvalitetskrav. Specialiseret malerarbejde og gipsløsninger til renrum.",
  },
  {
    image: heroProject3,
    title: "Food Processing Plant",
    category: "Fødevareproduktion",
    location: "Esbjerg",
    year: "2021",
    size: "18.500 m²",
    description: "Moderne fødevareproduktionsanlæg med køle- og frysekapacitet. Facadepuds med systemløsninger og komplet betonfinish.",
  },
];

const Referenser = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <Layout>
      <PageHero
        tagline="Vores Arbejde"
        title="Referencer"
        description="Se et udvalg af vores gennemførte projekter. Hvert projekt repræsenterer vores engagement i kvalitet, bæredygtighed og professionel udførelse."
      />

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="group bg-card shadow-card hover:shadow-industrial transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-primary px-3 py-1 text-xs uppercase tracking-wider text-primary-foreground">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-industrial-dark/0 group-hover:bg-industrial-dark/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Klik for detaljer
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl uppercase text-foreground mb-3 font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-primary" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-primary" />
                      {project.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <Ruler className="h-4 w-4 text-primary" />
                      {project.size}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "350+", label: "Projekter" },
              { number: "500.000+", label: "m² Bygget" },
              { number: "25+", label: "År" },
              { number: "98%", label: "Tilfredshed" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block text-4xl md:text-5xl text-primary mb-2 font-semibold">
                  {stat.number}
                </span>
                <span className="text-sm uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-industrial-dark">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl uppercase text-secondary-foreground mb-6 font-semibold">
            Vil Du Være Vores Næste Reference?
          </h2>
          <p className="text-lg text-secondary-foreground/70 mb-8 max-w-2xl mx-auto">
            Lad os diskutere dit projekt og se, hvordan vi kan hjælpe dig.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/prisestimat">Start Dit Projekt</Link>
          </Button>
        </div>
      </section>

      {/* Modal */}
      <ReferenceModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Layout>
  );
};

export default Referencer;
