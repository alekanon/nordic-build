import { Layout } from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Tak for din henvendelse",
      description: "Vi vender tilbage til dig hurtigst muligt.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted concrete-texture">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block font-heading text-sm uppercase tracking-[0.3em] text-primary mb-4">
              Kontakt Os
            </span>
            <h1 className="font-heading text-5xl md:text-6xl uppercase text-foreground mb-6">
              Lad Os Tale
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Har du spørgsmål eller ønsker du at diskutere et projekt? 
              Vi er her for at hjælpe dig.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-3xl uppercase text-foreground mb-8">
                Kontaktinformation
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg uppercase text-foreground mb-1">
                      Adresse
                    </h3>
                    <p className="text-muted-foreground">
                      Industriparken 42<br />
                      2750 Ballerup<br />
                      Danmark
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg uppercase text-foreground mb-1">
                      Telefon
                    </h3>
                    <a href="tel:+4512345678" className="text-muted-foreground hover:text-primary transition-colors">
                      +45 12 34 56 78
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg uppercase text-foreground mb-1">
                      Email
                    </h3>
                    <a href="mailto:info@dannovabyg.dk" className="text-muted-foreground hover:text-primary transition-colors">
                      info@dannovabyg.dk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg uppercase text-foreground mb-1">
                      Åbningstider
                    </h3>
                    <p className="text-muted-foreground">
                      Mandag - Fredag: 07:00 - 16:00<br />
                      Lørdag - Søndag: Lukket
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-12 h-64 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground font-heading uppercase tracking-wider">
                  Kort kommer snart
                </span>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-3xl uppercase text-foreground mb-8">
                Send En Besked
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-heading text-sm uppercase tracking-wider text-foreground mb-2">
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
                    <label className="block font-heading text-sm uppercase tracking-wider text-foreground mb-2">
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
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-heading text-sm uppercase tracking-wider text-foreground mb-2">
                      Telefon
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block font-heading text-sm uppercase tracking-wider text-foreground mb-2">
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
                <div>
                  <label className="block font-heading text-sm uppercase tracking-wider text-foreground mb-2">
                    Besked *
                  </label>
                  <Textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" variant="default" size="lg" className="w-full sm:w-auto">
                  <Send className="h-4 w-4 mr-2" />
                  Send Besked
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
