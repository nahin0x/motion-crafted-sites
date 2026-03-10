import { useState, useEffect } from "react";

const sectionIds = ["home", "services", "portfolio", "pricing", "about", "contact"];

export function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 150;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollY) {
          setActive(sectionIds[i]);
          return;
        }
      }
      setActive("home");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return active;
}
