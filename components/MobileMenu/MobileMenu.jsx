"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
  MobileMenuButton,
  MobileMenuContainer,
  MenuItemsContainer,
  MenuItem,
} from "./MobileMenu.styles";

export default function MobileMenu({ sections, scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

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
              {sections.map((section) => (
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
    </>
  );
}
