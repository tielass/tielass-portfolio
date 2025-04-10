import styled from "@emotion/styled";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

export const Container = styled(motion.div)`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  text-align: center;
`;

export const Badge = styled(motion.div)`
  margin-bottom: 1.5rem;
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  background-color: rgba(255, 107, 107, 0.1);
  color: #ff6b6b;
  backdrop-filter: blur(10px);
`;

export const Title = styled(motion.h1)`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-bottom: 1.5rem;
  letter-spacing: -0.05em;
  @media (max-width: 640px) {
    font-size: 4rem;
  }
  @media (min-width: 1024px) {
    font-size: 8rem;
  }
  .highlight {
    font-size: 6rem;
    color: #ff6b6b;
  }
`;

export const Description = styled(motion.p)`
  max-width: 36rem;
  font-size: 1.25rem;
  color: #a0a0a0;
  margin-bottom: 3rem;
`;

export const ArrowContainer = styled(motion.div)`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  &:hover {
    cursor: pointer;
  }
`;

export const Arrow = styled(ArrowDown)`
  height: 2rem;
  width: 2rem;
  color: #ff6b6b;
`;

export const RedTitle = styled.span`
  color: #ff6b6b;
  margin-top: -2rem;

  @media (max-width: 640px) {
    margin-top: 0; 
  }
`;