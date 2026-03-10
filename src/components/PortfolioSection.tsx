import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowUpRight, CheckCircle2, TrendingUp } from "lucide-react";
import BlurTypeText from "@/components/BlurTypeText";
import { useRef } from "react";

const projects = [
  {
    title: "NeurospicyKidz",
    tag: "TOY STORE",
    desc: "A vibrant, engaging Shopify store for unique educational toys designed for neurodiverse children.",
    result: "Increased conversion rate by 42% in the first month",
    features: ["Custom theme design", "Mobile-optimized checkout", "Product filtering system"],
    techs: ["Shopify", "Liquid", "CSS"],
    img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop",
  },
  {
    title: "Esabao",
    tag: "DROPSHIPPING",
    desc: "Complete dropshipping store with automated fulfillment, supplier integration, and conversion-optimized pages.",
    result: "Generated $15K revenue within 30 days of launch",
    features: ["Automated order fulfillment", "Supplier integration", "Conversion optimization"],
    techs: ["Shopify", "DSers", "Oberlo"],
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  },
  {
    title: "Noeva Boutique",
    tag: "FASHION",
    desc: "Elegant fashion boutique with stunning product showcases and seamless shopping experience.",
    result: "Reduced bounce rate by 35% with redesigned UX",
    features: ["Lookbook integration", "Size guide system", "Wishlist functionality"],
    techs: ["Shopify", "Liquid", "Figma"],
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
  },
  {
    title: "Health Care Store",
    tag: "HEALTH & WELLNESS",
    desc: "Trust-focused health store with detailed product info, reviews integration, and subscription options.",
    result: "Boosted average order value by 28% with upsells",
    features: ["Subscription setup", "Review integration", "Trust badges"],
    techs: ["Shopify", "Recharge", "Loox"],
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
  },
  {
    title: "One Product Store",
    tag: "SINGLE PRODUCT",
    desc: "High-converting single product store with storytelling layout and optimized sales funnel.",
    result: "Achieved 5.2% conversion rate from cold traffic",
    features: ["Sales funnel design", "Upsell integration", "Speed optimization"],
    techs: ["Shopify", "PageFly", "Vitals"],
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
  },
  {
    title: "DecalGraphixx",
    tag: "STICKER STORE",
    desc: "Creative sticker store with custom product builder and bulk ordering capabilities.",
    result: "Grew repeat customer rate to 45% in 3 months",
    features: ["Custom product builder", "Bulk ordering", "Gallery showcase"],
    techs: ["Shopify", "Liquid", "JavaScript"],
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, 0]);

  const isLeft = index % 2 === 0;

  return (
    <div ref={cardRef} className="sticky mb-32 last:mb-0" style={{ top: `${96 + index * 16}px`, zIndex: index + 1 }}>
      <motion.div style={{ opacity, y }} className="rounded-2xl border border-border bg-card overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-widest text-accent uppercase mb-4">
              {project.tag}
            </span>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-serif-display">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
              {project.desc}
            </p>

            <div className="flex items-center gap-2 mb-6 px-4 py-2.5 rounded-xl bg-accent/10 border border-accent/20">
              <TrendingUp className="w-4 h-4 text-accent-foreground shrink-0" />
              <span className="text-sm font-semibold text-foreground">{project.result}</span>
            </div>

            <div className="border-t border-border pt-6 mb-6">
              <div className="space-y-3">
                {project.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm text-muted-foreground">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full border border-accent/40 text-accent font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <button className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                Case Study <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden bg-muted min-h-[300px] lg:min-h-[unset]">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover absolute inset-0"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent lg:bg-gradient-to-l lg:from-card/30 lg:via-transparent lg:to-transparent" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function PortfolioSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="portfolio" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <BlurTypeText
            text="Portfolio"
            isVisible={isVisible}
            className="text-sm font-medium text-accent uppercase tracking-wider mb-3"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl md:text-5xl font-bold text-foreground"
          >
            Our Recent Work
          </motion.h2>
          <BlurTypeText
            text="Explore some of the successful Shopify stores we've built for clients worldwide."
            isVisible={isVisible}
            delay={0.3}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          />
        </div>

        <div className="relative">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
