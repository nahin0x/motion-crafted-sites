import { ArrowRight, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { useRef, useState } from "react";

const subtitleWords = "We design high-converting Shopify stores that increase revenue and customer retention for fast-growing DTC brands worldwide.".split(" ");

const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"; // Replace with your actual YouTube video ID

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const headlinePart1 = "High Converting Shopify Stores ";
  const headlinePart2 = "for DTC Brands";
  const { displayedText: typed1 } = useTypingAnimation(headlinePart1, 45, 400);
  const { displayedText: typed2, isComplete: done2, showCursor } = useTypingAnimation(headlinePart2, 45, 400 + headlinePart1.length * 45 + 100);

  const stats = [
    { value: "7+", label: "Projects Delivered" },
    { value: "5+", label: "Happy Clients" },
    { value: "2+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  const animDelay = 0.2 + (headlinePart1.length + headlinePart2.length) * 0.045;

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full pt-48 2xl:pb-20 pb-10 px-6 overflow-hidden hero-gradient"
    >
      <motion.div
        style={{ y: yParallax, opacity: opacityParallax }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left — Text content */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-foreground">
              {typed1}
              <span className="font-serif-display italic font-normal">{typed2}</span>
              <motion.span
                animate={{ opacity: showCursor ? 1 : 0 }}
                className="inline-block w-[3px] h-[0.8em] bg-foreground ml-1 align-middle"
                style={{ display: done2 ? "none" : "inline-block" }}
              />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: animDelay + 0.3 }}
            className="mt-6 text-lg text-muted-foreground max-w-lg"
          >
            {subtitleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: animDelay + 0.4 + i * 0.04,
                  duration: 0.4,
                }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: animDelay + 1.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://calendly.com/devzeroone"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full text-base font-semibold btn-glow hover:opacity-90 transition-opacity"
            >
              Get A Free Quote <ArrowRight className="w-5 h-5" />
            </a>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold border border-border text-foreground hover:bg-muted transition-colors">
              View Our Work
            </button>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: animDelay + 1.6 }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — YouTube Video */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted/40 border border-border"
        >
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
              title="DEVZeroOne Promo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 w-full h-full group cursor-pointer"
            >
              <img
                src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                alt="Watch our promo video"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <Play className="w-6 h-6 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md text-xs font-medium text-foreground border border-border/50">
                Watch our process
              </div>
            </button>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
