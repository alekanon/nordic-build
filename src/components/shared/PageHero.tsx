import pageHeroBg from "@/assets/page-hero-bg.jpg";

interface PageHeroProps {
  tagline: string;
  title: string;
  description: string;
}

export const PageHero = ({ tagline, title, description }: PageHeroProps) => {
  return (
    <section className="relative pt-20 min-h-[400px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={pageHeroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-dark/95 via-industrial-dark/85 to-industrial-dark/70" />
      </div>
      
      {/* Content */}
      <div className="relative container py-20">
        <div className="max-w-3xl">
          <span className="inline-block text-sm uppercase tracking-[0.3em] text-primary mb-4">
            {tagline}
          </span>
          <h1 className="text-5xl md:text-6xl uppercase text-white mb-6 font-semibold">
            {title}
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
