import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Handshake, Star, TrendingUp, Target, CircleDot } from "lucide-react";
import BlurTypeText from "@/components/BlurTypeText";

const values = [
  { icon: Heart, title: "Treats your business like our own", desc: "We work with full ownership and responsibility, focusing on what truly benefits your business growth and long-term success." },
  { icon: Handshake, title: "Trusted business partner", desc: "More than a service provider, we collaborate closely with you to understand goals and build strategies that deliver results." },
  { icon: Star, title: "Client satisfaction is top priority", desc: "Your satisfaction drives every decision we make, ensuring quality delivery, clear communication, and consistent improvements." },
  { icon: TrendingUp, title: "Focus on long-term growth", desc: "We design scalable solutions that support sustainable growth instead of short-term wins or quick fixes." },
  { icon: Target, title: "Delivers real results", desc: "Our strategies are data-driven and conversion-focused, helping you increase sales, engagement, and overall performance." },
  { icon: CircleDot, title: "Data-driven decision making", desc: "We analyze user behavior and performance metrics to make informed decisions that improve conversions and maximize ROI." },
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
                <v.icon className="w-6 h-6 text-accent" />
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
