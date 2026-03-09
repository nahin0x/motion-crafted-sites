import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MessageSquare, Search, CodeXml, RefreshCw, Rocket } from "lucide-react";
import BlurTypeText from "@/components/BlurTypeText";
import { useRef } from "react";
import stepConsultation from "@/assets/step-consultation.png";
import stepAnalysis from "@/assets/step-analysis.png";
import stepImplementation from "@/assets/step-implementation.png";
import stepRevision from "@/assets/step-revision.png";
import stepDelivery from "@/assets/step-delivery.png";

const steps = [
  {
    number: "01",
    title: "30 Minutes Consultancy",
    desc: "We discuss your business goals, challenges, and what you actually need to achieve your objectives.",
    icon: MessageSquare,
    illustration: stepConsultation,
  },
  {
    number: "02",
    title: "Requirement & Analysis",
    desc: "We assess your project requirements and gather necessary assets. We analyze everything based on your specific needs.",
    icon: Search,
    illustration: stepAnalysis,
  },
  {
    number: "03",
    title: "Implementation",
    desc: "We build your project with precision, implementing all features and functionalities according to the agreed requirements.",
    icon: CodeXml,
    illustration: stepImplementation,
  },
  {
    number: "04",
    title: "Revision",
    desc: "We review the project together, make necessary adjustments, and ensure everything meets your expectations.",
    icon: RefreshCw,
    illustration: stepRevision,
  },
  {
    number: "05",
    title: "Project Delivery",
    desc: "Your project is delivered with complete documentation and support for a smooth launch.",
    icon: Rocket,
    illustration: stepDelivery,
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1]);
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const isLeft = index % 2 === 0;

  return (
    <div ref={cardRef} className="relative mb-16 last:mb-0">
      {/* Connector line (desktop) */}
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute left-1/2 top-12 bottom-0 w-px -translate-x-1/2">
          <div className="w-full h-full bg-border" />
          <motion.div
            className="absolute top-0 left-0 w-full bg-accent"
            style={{ height: lineHeight }}
          />
        </div>
      )}

      {/* Circle on timeline (desktop) */}
      <motion.div
        style={{ opacity, scale }}
        className="hidden md:flex absolute left-1/2 top-4 -translate-x-1/2 z-10"
      >
        <div className="w-12 h-12 rounded-full bg-primary border-4 border-background flex items-center justify-center shadow-lg">
          <step.icon className="w-5 h-5 text-primary-foreground" />
        </div>
      </motion.div>

      {/* Card */}
      <motion.div
        style={{ opacity, y, scale }}
        className={`md:w-[calc(50%-48px)] ${isLeft ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"}`}
      >
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300"
        >
          {/* Step number + illustration */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold tracking-widest text-accent uppercase">
              Step {step.number}
            </span>
            <span className="text-3xl">{step.illustration}</span>
          </div>

          {/* Mobile icon */}
          <div className="md:hidden mb-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <step.icon className="w-4 h-4 text-primary-foreground" />
          </div>

          <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>

          {/* Progress indicator */}
          <div className="mt-4 flex items-center gap-2">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i <= index ? "bg-accent" : "bg-border"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function TeamSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-28 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <BlurTypeText
            text="Our Process"
            isVisible={isVisible}
            className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl md:text-5xl font-bold text-foreground"
          >
            How Does It{" "}
            <span className="font-serif-display italic font-normal">Work</span>
          </motion.h2>
          <BlurTypeText
            text="Our proven 5-step process to deliver exceptional results"
            isVisible={isVisible}
            delay={0.3}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          />
        </motion.div>

        {/* Timeline */}
        <div className="mt-20 relative">
          {steps.map((step, i) => (
            <StepCard key={step.title} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
