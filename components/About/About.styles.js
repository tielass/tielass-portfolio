import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 10;

  @media (max-width: 1366px) {
    padding: 0 2rem;
    max-width: 95%;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.75rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 80vh;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ImageContainer = styled.div`
  order: 2;
  position: relative;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 70vh;
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;

  img {
    object-fit: cover; /* Ensures the image fills the container without distortion */
    width: 100%;
    height: 100%;
  }
`;

export const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom right,
    rgba(255, 107, 107, 0.1),
    transparent
  );
  z-index: 10;
`;

export const BlurredCircle = styled.div`
  position: absolute;
  background-color: rgba(255, 107, 107, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  z-index: 0;
  &.top-left {
    top: -2.5rem;
    left: -2.5rem;
    height: 5rem;
    width: 5rem;
  }
  &.bottom-right {
    bottom: -2.5rem;
    right: -2.5rem;
    height: 5rem;
    width: 5rem;
  }
`;

export const Content = styled.div`
  order: 1;
  @media (min-width: 1024px) {
    order: 2;
  }
`;

export const Title = styled(motion.h2)`
  font-size: 8rem;
  font-weight: bold;
  color: #ff6b6b;
  margin-bottom: 1.5rem;
  letter-spacing: -0.05em;

  @media (max-width: 1366px) {
    font-size: 6.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 5.5rem;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
  }

  @media (max-width: 640px) {
    font-size: 4.5rem;
  }

  @media (max-width: 480px) {
    font-size: 3.5rem;
  }
`;

export const Description = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1.125rem;
  color: #a0a0a0;

  @media (max-width: 1366px) {
    font-size: 1.05rem;
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    gap: 1rem;
  }
`;

export const ResumeLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #ff6b6b;
  transition: all 0.3s;
  &:hover {
    gap: 0.75rem;
    color: rgb(253, 197, 197);
  }
  .icon {
    transition: transform 0.3s;
  }
  &:hover .icon {
    transform: rotate(45deg);
  }
`;

export const DownloadLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #ff6b6b;
  transition: all 0.3s;
  &:hover {
    color: rgb(253, 197, 197);
  }
`;

export const ResumeContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 2rem;
`;
