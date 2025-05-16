import styled from "@emotion/styled";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  z-index: 0;
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
  max-width: 100%;
  width: auto;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
    margin-bottom: 1rem;
  }

  span {
    white-space: normal;
    display: inline;
  }
`;

export const Title = styled(motion.h1)`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-bottom: 1.5rem;
  letter-spacing: -0.05em;
  font-size: 6rem; /* Base size */

  /* Responsive sizes */
  @media (max-width: 1366px) {
    font-size: 7rem;
  }

  @media (max-width: 1024px) {
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
  }

  @media (max-width: 640px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 1440px) {
    font-size: 8rem;
  }

  .highlight {
    font-size: 6rem;
    color: #ff6b6b;

    @media (max-width: 640px) {
      font-size: 4rem;
    }

    @media (max-width: 480px) {
      font-size: 3rem;
    }
  }
`;

export const Description = styled(motion.p)`
  max-width: 36rem;
  font-size: 1.25rem;
  color: #a0a0a0;
  margin-bottom: 3rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    max-width: 90%;
    font-size: 1.15rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    max-width: 100%;
    padding: 0 0.5rem;
  }
`;

export const ArrowContainer = styled(motion.div)`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;

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
  font-size: 6rem;

  @media (max-width: 1366px) {
    font-size: 5rem;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
    margin-top: -1rem;
  }

  @media (max-width: 640px) {
    margin-top: 0;
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;
