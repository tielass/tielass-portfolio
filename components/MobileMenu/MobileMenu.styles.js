import styled from "@emotion/styled";
import { motion } from "framer-motion";

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
