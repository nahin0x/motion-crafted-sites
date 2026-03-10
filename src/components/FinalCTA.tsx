import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section id="contact" ref={ref} className="py-28 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto rounded-3xl p-12 md:p-20 relative overflow-hidden cta-gradient"
      >
        <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-primary/5" />
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-accent/10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-4">
              Join 50+ brands that scaled with our Shopify stores
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Ready to Build a High Converting Shopify Store?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Let's discuss how we can help grow your e-commerce business with a conversion-focused Shopify solution.
            </p>
            <div className="mt-8 p-6 rounded-2xl bg-background/60 backdrop-blur-sm border border-border/50">
              <h3 className="font-semibold text-foreground text-sm">Book a Free 30-Minute Consultation</h3>
              <p className="text-xs text-muted-foreground mt-2">Get expert guidance and a custom strategy for your store.</p>
              <p className="text-xs text-muted-foreground mt-1">📧 contact@devzeroone.com • ⏱ Response within 24 hours</p>
              <a
                href="https://calendly.com/devzeroone"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold btn-glow hover:opacity-90 transition-opacity"
              >
                Book A Free Call <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="font-semibold text-foreground text-sm mb-4">Send a Message</h3>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full text-sm font-semibold btn-glow hover:opacity-90 transition-opacity"
            >
              Send Message <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
