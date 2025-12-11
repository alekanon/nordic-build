import { useState, useEffect } from "react";
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
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolled past hero (approximately 100px)
      setIsScrolled(currentScrollY > 100);
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        setIsOpen(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo - Left side with fixed width for balance */}
        <div className="w-48 flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img 
              src={dannovaLogo} 
              alt="Dannova Byg" 
              className={`h-12 w-auto transition-all duration-300 ${
                isScrolled ? "" : "brightness-0 invert"
              }`} 
            />
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center justify-center flex-1">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm uppercase tracking-wider transition-colors duration-200 ${
                  location.pathname === link.href
                    ? isScrolled 
                      ? "text-primary font-semibold" 
                      : "text-white font-semibold"
                    : isScrolled 
                      ? "text-foreground hover:text-primary" 
                      : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* CTA Button - Right side with fixed width for balance */}
        <div className="hidden lg:flex items-center justify-end gap-4 w-48 flex-shrink-0">
          <a 
            href="tel:+4512345678" 
            className={`flex items-center gap-2 text-sm transition-colors ${
              isScrolled 
                ? "text-muted-foreground hover:text-primary" 
                : "text-white/80 hover:text-white"
            }`}
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xl:inline">+45 12 34 56 78</span>
          </a>
          <Button 
            asChild 
            variant={isScrolled ? "default" : "hero"} 
            size="sm"
          >
            <Link to="/prisestimat">Prisestimat</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
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
                className={`text-lg uppercase tracking-wider py-2 transition-colors ${
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
