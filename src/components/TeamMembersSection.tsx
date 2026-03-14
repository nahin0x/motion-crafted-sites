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

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover"
                />
                {/* Social overlay on hover */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <div className="flex items-center justify-center gap-3 bg-primary/90 backdrop-blur-sm py-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href={member.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
                    >
                      <XIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 text-center">
                <h3 className="text-base font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
