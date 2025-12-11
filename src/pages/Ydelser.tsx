import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/PageHero";
import serviceFacadepuds from "@/assets/service-facadepuds.jpg";
import serviceFacade from "@/assets/service-facade.jpg";
import serviceToemrer from "@/assets/service-toemrer.jpg";
import serviceMaler from "@/assets/service-maler.jpg";
import serviceBeton from "@/assets/service-beton.jpg";

const services = [
  {
    image: serviceFacadepuds,
    title: "Facadepuds med Systempuds",
    description: "Professionel facadepudsning med de nyeste systemløsninger. Vi sikrer langtidsholdbare og æstetisk flotte facader med moderne pudssystemer der beskytter mod vejr og vind.",
    features: [
      "Komplet facadepuds systemer",
      "Renovering af eksisterende facader",
      "Isolering og efterisolering",
      "Alle typer pudsteknikker",
      "10+ års garanti på materialer",
    ],
  },
  {
    image: serviceFacade,
    title: "Facader med Eternit/Træ/Aluminium",
    description: "Vi leverer og monterer facadebeklædning i eternit, træ og aluminium. Moderne og holdbare løsninger der giver din bygning et professionelt udtryk med minimal vedligeholdelse.",
    features: [
      "Eternit facadeplader",
      "Træbeklædning i alle træsorter",
      "Aluminium facadesystemer",
      "Ventilerede facadeløsninger",
      "Arkitektonisk rådgivning",
    ],
  },
  {
    image: serviceToemrer,
    title: "Tømrerarbejde",
    description: "Komplet tømrerservice til erhvervsbyggeri. Fra gipsvægge og lofter til vinduer, døre og gulve - vi håndterer alle aspekter af indvendigt tømrerarbejde med præcision.",
    features: [
      "Opsætning af gipsvægge og lofter",
      "Montage af vinduer og døre",
      "Opsætning af systemlofter",
      "Montage af indvendige døre",
      "Lægning af trægulve",
    ],
  },
  {
    image: serviceMaler,
    title: "Malerarbejde",
    description: "Professionelt malerarbejde til alle typer erhvervsprojekter. Vi udfører alle arbejder inden for faget med fokus på kvalitet, holdbarhed og æstetik.",
    features: [
      "Indvendig maling",
      "Udvendig maling",
      "Sprøjtemaling",
      "Specialbelægninger",
      "Industrimaling",
    ],
  },
  {
    image: serviceBeton,
    title: "Betonfinish ved Elementmontage",
    description: "Specialiseret betonfinish arbejde i forbindelse med elementmontage. Vi sikrer en perfekt finish på alle betonelementer med fokus på kvalitet og æstetik.",
    features: [
      "Fugning af betonelementer",
      "Reparation af betonskader",
      "Overfladebehandling",
      "Beskyttende coating",
      "Præcisionsarbejde",
    ],
  },
];

const Ydelser = () => {
  return (
    <Layout>
      <PageHero
        tagline="Vores Kompetencer"
        title="Ydelser"
        description="Vi tilbyder specialiserede byggeydelser til erhvervslivet. Fra facadepuds og tømrerarbejde til malerarbejde og betonfinish - altid med fokus på kvalitet og professionalisme."
      />

      {/* Services Cards */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative overflow-hidden shadow-industrial">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="text-3xl uppercase text-foreground mb-4 font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="group">
                    <Link to="/kontakt">
                      Kontakt Os
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-industrial-dark">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl uppercase text-secondary-foreground mb-6 font-semibold">
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
