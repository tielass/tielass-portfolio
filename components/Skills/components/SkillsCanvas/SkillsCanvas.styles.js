import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const SkillsCanvasContainer = styled.div`
  height: 60vh;
  position: relative;
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

export const StyledCanvas = styled(motion.canvas)`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem; /* rounded-lg in Tailwind CSS */
`;

export const Popup = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff6b6b;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: bold;
  z-index: 10;
`;