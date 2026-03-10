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
        style={{ backgroundColor: '#a7f3d0' }}

      >
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary-foreground/5" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-primary-foreground/5" />

        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            Ready to Start Your Shopify Journey?
          </h3>
          <p className="mt-2 text-foreground/70 text-lg">
            Let's build a store that converts!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 relative z-10">
          <a
            href="https://calendly.com/devzeroone"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-bold btn-glow hover:opacity-90 transition-opacity shadow-lg"
          >
            Book A Free Call <ArrowRight className="w-4 h-4" />
          </a>
          <button className="px-8 py-4 rounded-full text-sm font-semibold border-2 border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors">
            View Portfolio
          </button>
        </div>
      </motion.div>
    </section>
  );
}
