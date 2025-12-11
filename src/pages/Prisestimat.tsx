import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { PageHero } from "@/components/shared/PageHero";

const projectTypes = [
  "Facadepuds",
  "Facadebeklædning",
  "Tømrerarbejde",
  "Malerarbejde",
  "Betonfinish",
  "Andet",
];

const Prisestimat = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    size: "",
    location: "",
    timeline: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Tak for din forespørgsel",
      description: "Vi kontakter dig inden for 24 timer med et prisestimat.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      size: "",
      location: "",
      timeline: "",
      description: "",
    });
  };

  return (
    <Layout>
      <PageHero
        tagline="Gratis & Uforpligtende"
        title="Få Et Prisestimat"
        description="Udfyld formularen nedenfor, og vi sender dig et detaljeret prisestimat inden for 24 timer."
      />

      {/* Form Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Benefits */}
            <div>
              <h2 className="text-2xl uppercase text-foreground mb-8 font-semibold">
                Hvorfor Vælge Os?
              </h2>
              <ul className="space-y-6">
                {[
                  { title: "Hurtig Respons", desc: "Svar inden for 24 timer" },
                  { title: "Gratis Estimat", desc: "Ingen bindinger eller skjulte omkostninger" },
                  { title: "Erfaren Rådgivning", desc: "25+ års erfaring i branchen" },
                  { title: "Fast Pris", desc: "Ingen overraskelser undervejs" },
                  { title: "Kvalitetsgaranti", desc: "ISO 9001 certificeret" },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block text-foreground font-medium">{item.title}</span>
                      <span className="text-sm text-muted-foreground">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-12 p-6 bg-muted">
                <h3 className="text-lg uppercase text-foreground mb-2 font-semibold">
                  Foretrækker Du At Ringe?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Vores team er klar til at hjælpe dig.
                </p>
                <a
                  href="tel:+4512345678"
                  className="text-2xl text-primary hover:text-accent transition-colors font-semibold"
                >
                  +45 12 34 56 78
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Info */}
                <div>
                  <h3 className="text-xl uppercase text-foreground mb-6 font-semibold">
                    Kontaktinformation
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm uppercase tracking-wider text-foreground mb-2">
                        Navn *
                      </label>
                      <Input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm uppercase tracking-wider text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm uppercase tracking-wider text-foreground mb-2">
                        Telefon *
                      </label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm uppercase tracking-wider text-foreground mb-2">
                        Virksomhed
                      </label>
                      <Input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="h-12"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <h3 className="text-xl uppercase text-foreground mb-6 font-semibold">
                    Projektoplysninger
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm uppercase tracking-wider text-foreground mb-3">
                        Ydelse *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {projectTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`p-3 text-sm uppercase tracking-wider border-2 transition-all ${
                              formData.projectType === type
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border text-muted-foreground hover:border-primary/50"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm uppercase tracking-wider text-foreground mb-2">
                          Størrelse (m²)
                        </label>
                        <Input
                          type="text"
                          placeholder="F.eks. 5.000"
                          value={formData.size}
                          onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm uppercase tracking-wider text-foreground mb-2">
                          Lokation
                        </label>
                        <Input
                          type="text"
                          placeholder="By/Kommune"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm uppercase tracking-wider text-foreground mb-2">
                          Ønsket Opstart
                        </label>
                        <Input
                          type="text"
                          placeholder="F.eks. Q2 2024"
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm uppercase tracking-wider text-foreground mb-2">
                        Projektbeskrivelse
                      </label>
                      <Textarea
                        rows={6}
                        placeholder="Beskriv dit projekt så detaljeret som muligt..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <Button type="submit" variant="default" size="lg" className="w-full sm:w-auto">
                  <Send className="h-4 w-4 mr-2" />
                  Send Forespørgsel
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Prisestimat;
