"use client";
import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero/Hero";
import About from "@/components/About/About";
import ContactSection from "@/components/Contact/components/ContactInfo/ContactInfo";
import Navigation from "@/components/Navigation/Navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Work from "@/components/Work/Work";
import Skills from "@/components/Skills/Skills";
import {
  CopyrightContainer,
  HeroStyledSection,
  MenuItem,
  MenuItemsContainer,
  MobileMenuButton,
  MobileMenuContainer,
  StyledSection,
} from "./page.styles";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionsRef = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      Object.entries(sectionsRef.current).forEach(([key, section]) => {
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(key);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = sectionsRef.current[sectionId];
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </MobileMenuButton>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <MobileMenuContainer
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <MenuItemsContainer>
              {["hero", "work", "skills", "about", "contact"].map((section) => (
                <MenuItem
                  key={section}
                  onClick={() => {
                    scrollToSection(section);
                    setMenuOpen(false); // Close menu after clicking
                  }}
                >
                  {section}
                </MenuItem>
              ))}
            </MenuItemsContainer>
          </MobileMenuContainer>
        )}
      </AnimatePresence>

      {/* Navigation Dots */}
      <Navigation
        sections={["hero", "work", "skills", "about", "contact"]}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <HeroStyledSection ref={(el) => (sectionsRef.current.hero = el)}>
        <Hero scrollToSection={scrollToSection} />
      </HeroStyledSection>

      {/* Work Section */}
      <section ref={(el) => (sectionsRef.current.work = el)}>
        <Work />
      </section>

      {/* Skills */}
      <StyledSection ref={(el) => (sectionsRef.current.skills = el)}>
        <Skills />
      </StyledSection>

      {/* About */}
      <section ref={(el) => (sectionsRef.current.about = el)}>
        <About />
      </section>

      {/* Contact */}
      <StyledSection ref={(el) => (sectionsRef.current.contact = el)}>
        <ContactSection />
        <CopyrightContainer>
          <p>© {new Date().getFullYear()} Mihail Mihaylov</p>
        </CopyrightContainer>
      </StyledSection>
    </>
  );
}
