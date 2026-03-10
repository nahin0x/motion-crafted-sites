import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative"
        style={{ backgroundColor: '#10B77F' }}
      >
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary-foreground/10" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-primary-foreground/10" />

        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">
            Ready to Start Your Shopify Journey?
          </h3>
          <p className="mt-2 text-primary-foreground/80 text-lg">
            Let's build a store that converts!
          </p>
        </div>
        <div className="relative z-10">
          <a
            href="https://calendly.com/devzeroone"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary-foreground px-8 py-4 rounded-full text-sm font-bold hover:opacity-90 transition-opacity shadow-lg"
            style={{ color: '#10B77F' }}
          >
            Book A Free Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
