import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Rocket, ShoppingBag, BarChart3, Shield, Headphones } from "lucide-react";
import BlurTypeText from "@/components/BlurTypeText";

const values = [
  { icon: Star, title: "Client satisfaction first", desc: "98% satisfaction rate — your success is the only metric that matters to us." },
  { icon: Rocket, title: "Conversion focused design", desc: "Every pixel is engineered to convert visitors into paying customers." },
  { icon: ShoppingBag, title: "Shopify specialists", desc: "Deep expertise in the Shopify ecosystem — themes, apps, Liquid, and APIs." },
  { icon: BarChart3, title: "Revenue driven approach", desc: "Data-backed strategies designed to maximize ROI and grow your bottom line." },
  { icon: Shield, title: "30-day post-launch support", desc: "We stand behind every project with dedicated support after delivery." },
  { icon: Headphones, title: "Dedicated project manager", desc: "A single point of contact who knows your business inside and out." },
];

export default function AboutStats() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <BlurTypeText
            text="The Difference"
            isVisible={isVisible}
            className="text-sm font-medium text-accent uppercase tracking-wider mb-3"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl md:text-5xl font-bold text-foreground"
          >
            Why Choose DEVZeroOne
          </motion.h2>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="rounded-2xl p-6 bg-card border border-border hover:border-accent/40 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                <v.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
