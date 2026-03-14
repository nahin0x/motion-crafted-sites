import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import BlurTypeText from "@/components/BlurTypeText";
import { Linkedin, Instagram } from "lucide-react";

const team = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
    instagram: "#",
    x: "#",
  },
  {
    name: "Jane Smith",
    role: "Lead Developer",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
    instagram: "#",
    x: "#",
  },
  {
    name: "Alex Johnson",
    role: "UI/UX Designer",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
    instagram: "#",
    x: "#",
  },
  {
    name: "Sarah Wilson",
    role: "Project Manager",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
    instagram: "#",
    x: "#",
  },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function TeamMembersSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-28 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <BlurTypeText
            text="Our Team"
            isVisible={isVisible}
            className="text-sm font-medium text-accent uppercase tracking-wider mb-3"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl md:text-5xl font-bold text-foreground"
          >
            Meet The Team
          </motion.h2>
        </div>

        <div className="mt-16 flex gap-3 h-[420px] md:h-[500px]">
          {team.map((member, i) => {
            const isHovered = hoveredIndex === i;
            const hasHover = hoveredIndex !== null;

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative h-full rounded-3xl overflow-hidden cursor-pointer"
                style={{
                  flex: isHovered ? 3 : hasHover ? 0.8 : 1,
                  transition: "flex 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Name & role - visible on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateY(0)" : "translateY(12px)",
                  }}
                >
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-sm text-white/70 mt-1">{member.role}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href={member.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <XIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
