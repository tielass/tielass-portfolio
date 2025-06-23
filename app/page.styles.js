import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StyledSection = styled.section`
  // min-height: 100vh;
  padding: 5rem 0;
  position: relative;
  background: radial-gradient(circle, #1a1a1a 0%, #0a0a0a 100%);
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1366px) {
    padding: 4rem 0;
  }

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`;

export const HeroStyledSection = styled.section`
  min-height: 100vh;
  position: relative;
  background: radial-gradient(circle, #1a1a1a 0%, #0a0a0a 100%);
  overflow-x: hidden;
`;

export const CopyrightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem 0;
  color: #a0a0a0b;
`;

// Styled component for the mobile menu button
export const MobileMenuButton = styled.button`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 50;
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: none;
  background-color: #1a1a1a;
  color: #f0f0f0;
  @media (min-width: 1024px) {
    display: none;
  }
`;

// Styled component for the mobile menu container
export const MobileMenuContainer = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 40;
  background-color: #0f0f0f;
  @media (min-width: 1024px) {
    display: none;
  }
`;

// Styled component for the menu items container
export const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2rem;
`;

// Styled component for individual menu items
export const MenuItem = styled.button`
  font-size: 1.875rem;
  font-weight: 300;
  text-transform: capitalize;
  transition: color 0.3s;
  background-color: transparent;
  border: none;
  &:hover {
    color: #ff6b6b;
  }
`;
