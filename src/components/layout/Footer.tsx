import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import dannovaLogo from "@/assets/dannova-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-industrial-dark text-secondary-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img src={dannovaLogo} alt="Dannova Byg" className="h-10 w-auto brightness-0 invert" />
            <p className="text-secondary-foreground/70 leading-relaxed">
              Vi er specialister i industrielt byggeri med fokus på kvalitet, bæredygtighed og professionel udførelse.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg uppercase tracking-wider mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Forside" },
                { href: "/ydelser", label: "Ydelser" },
                { href: "/referencer", label: "Referencer" },
                { href: "/om-os", label: "Om Os" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg uppercase tracking-wider mb-6">Ydelser</h4>
            <ul className="space-y-3">
              {[
                "Nybyggeri",
                "Renovering",
                "Industribyggeri",
                "Bæredygtigt Byggeri",
                "Vedligeholdelse",
              ].map((service) => (
                <li key={service}>
                  <span className="text-secondary-foreground/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg uppercase tracking-wider mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground/70">
                  Industriparken 42<br />
                  2750 Ballerup, Danmark
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+4512345678" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  +45 12 34 56 78
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@dannovabyg.dk" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  info@dannovabyg.dk
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/70">
                  Man-Fre: 07:00 - 16:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/50">
            © {new Date().getFullYear()} Dannova Byg. Alle rettigheder forbeholdes.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privatlivspolitik" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">
              Privatlivspolitik
            </Link>
            <Link to="/betingelser" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">
              Betingelser
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
