import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Dannova Byg leverede en fantastisk facaderenovering af vores erhvervsejendom. Professionelt arbejde fra start til slut.",
    author: "Lars Andersen",
    company: "Andersen Ejendomme A/S",
  },
  {
    quote: "Vi har brugt Dannova til flere projekter og er hver gang imponeret over kvaliteten og overholdelsen af tidsplanen.",
    author: "Maria Hansen",
    company: "Hansen & Co ApS",
  },
  {
    quote: "Det bedste håndværk vi har oplevet. Deres tømrerarbejde og finish er i en klasse for sig.",
    author: "Peter Nielsen",
    company: "Nielsen Industri",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-foreground">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-heading text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Kundernes Ord
          </span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-background mb-6">
            Det Siger Vores Kunder
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background/5 backdrop-blur-sm p-8 border border-background/10"
            >
              <Quote className="h-10 w-10 text-primary mb-6" />
              <p className="text-background/90 text-lg leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-background/10 pt-6">
                <p className="font-heading text-lg text-background">
                  {testimonial.author}
                </p>
                <p className="text-sm text-background/60">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
