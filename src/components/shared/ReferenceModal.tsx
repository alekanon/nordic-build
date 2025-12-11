import { X, MapPin, Calendar, Ruler, CheckCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Project {
  image: string;
  title: string;
  category: string;
  location: string;
  year: string;
  size: string;
  description: string;
}

interface ReferenceModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ReferenceModal = ({ project, isOpen, onClose }: ReferenceModalProps) => {
  if (!project) return null;

  const highlights = [
    "Professionel projektledelse fra start til slut",
    "Overholdelse af tidsplan og budget",
    "Bæredygtige materialer og løsninger",
    "Kvalitetssikring efter ISO 9001",
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden">
        <div className="relative h-64 md:h-80">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-primary px-3 py-1 text-xs uppercase tracking-wider text-primary-foreground">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-background/80 hover:bg-background transition-colors"
            aria-label="Luk"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>
        </div>
        
        <div className="p-6 md:p-8">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl uppercase text-foreground mb-4">
              {project.title}
            </DialogTitle>
          </DialogHeader>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-6 mb-8 text-sm">
            <span className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-foreground">{project.location}</span>
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-foreground">{project.year}</span>
            </span>
            <span className="flex items-center gap-2">
              <Ruler className="h-5 w-5 text-primary" />
              <span className="text-foreground">{project.size}</span>
            </span>
          </div>
          
          <div className="border-t border-border pt-6">
            <h4 className="text-sm uppercase tracking-wider text-foreground mb-4">
              Projekt Highlights
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
