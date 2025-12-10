import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import dannovaLogo from "@/assets/dannova-logo.png";

const navLinks = [
  { href: "/", label: "Forside" },
  { href: "/ydelser", label: "Ydelser" },
  { href: "/referencer", label: "Referencer" },
  { href: "/om-os", label: "Om Os" },
  { href: "/kontakt", label: "Kontakt" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={dannovaLogo} alt="Dannova Byg" className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-heading text-sm uppercase tracking-wider transition-colors duration-200 hover:text-primary ${
                location.pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+4512345678" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            +45 12 34 56 78
          </a>
          <Button asChild variant="default" size="default">
            <Link to="/prisestimat">Få Prisestimat</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-heading text-lg uppercase tracking-wider py-2 transition-colors ${
                  location.pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Button asChild variant="default" size="lg" className="w-full">
                <Link to="/prisestimat" onClick={() => setIsOpen(false)}>
                  Få Prisestimat
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
