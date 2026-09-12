import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const UpworkIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
  </svg>
);

const testimonials = [
  {
    title: "VPN and Cloud Firewall Configuration Expert Needed (Small Business)",
    rating: 5,
    period: "Aug 21, 2025 – Sep 8, 2025",
    quote: "Marycynthia is efficient and very knowledgeable.",
    tag: "Reliable",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding bg-card">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-muted-foreground tracking-widest uppercase mb-2">Client Voice</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            What clients <span className="text-gradient-vibrant italic font-serif-display">say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative bg-background border border-border rounded-2xl p-7 hover:shadow-xl hover:border-foreground/20 transition-all duration-300 overflow-hidden"
            >
              <Quote className="absolute -top-2 -right-2 text-foreground/5" size={120} strokeWidth={1} />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-emerald/10 text-brand-emerald">
                    <UpworkIcon size={20} />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Upwork · Verified</span>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-3 leading-snug">
                  {t.title}
                </h3>
                <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1 text-brand-amber">
                    {Array.from({ length: t.rating }).map((_, k) => (
                      <Star key={k} size={16} className="fill-current" strokeWidth={0} />
                    ))}
                    <span className="ml-1 font-mono font-semibold text-foreground">{t.rating.toFixed(1)}</span>
                  </span>
                  <span className="h-4 w-px bg-border" />
                  <span className="font-mono text-xs">{t.period}</span>
                </div>
                <blockquote className="font-serif-display text-xl md:text-2xl italic text-foreground leading-snug mb-5">
                  “{t.quote}”
                </blockquote>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary border border-border text-xs font-mono text-secondary-foreground">
                  {t.tag}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;