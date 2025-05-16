import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0 1.5rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.75rem;
  }
`;

export const CategoryButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  transition: all 0.3s;
  background-color: ${(props) => (props.active ? "#ff6b6b" : "#1a1a1a")};
  color: ${(props) => (props.active ? "#0f0f0f" : "#f0f0f0")};
  &:hover {
    background-color: ${(props) => (props.active ? "#ff6b6b" : "#2a2a2a")};
  }

  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
  justify-items: start;

  @media (max-width: 768px) {
    justify-items: center;
    width: 100%;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProjectCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  margin: 0 1rem;
  transform: none;
  max-width: 100%;
  box-sizing: border-box;
  opacity: 1;
  &:hover {
    cursor: pointer;
  }

  &:hover .overlay {
    opacity: 0.7;
  }

  &:hover .image {
    transform: scale(1.1); /* Scale the image on hover */
  }

  &:hover .icon-container {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ProjectInfo = styled.div`
  margin-top: 1rem;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #0f0f0f, transparent, transparent);
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 10;
`;

export const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s;
`;

export const IconContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
  z-index: 20;
`;

export const IconWrapper = styled.div`
  background-color: #ff6b6b;
  color: #0f0f0f;
  border-radius: 9999px;
  padding: 0.75rem;
  transform: translateY(1rem);
`;

export const CategoryLabel = styled.div`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  background-color: #1a1a1a;
  color: #a0a0a0;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
  margin-right: 0.5rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const ProjectDescription = styled.p`
  color: #a0a0a0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const BlockLink = styled.a`
  display: block;
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  aspect-ratio: 4 / 3;
`;

// Lightbox styles

export const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  box-sizing: border-box;
`;

export const LightboxContent = styled.div`
  position: relative;
  background-color: rgb(20, 20, 20);
  padding: 2.5rem 0 1rem;
  border-radius: 8px;
  width: 100%;
  max-width: 420px;
  height: auto;
  max-height: 95vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
  align-items: center;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 90%;
    max-width: 900px;
    padding: 4rem 0 1.5rem;
    align-items: flex-start;
    height: 90%;
    max-height: 90vh;
  }

  @media (min-width: 1024px) {
    width: 85%;
    max-width: 1100px;
  }

  @media (max-width: 480px) {
    padding: 1rem 0 0.5rem;
    max-width: 99vw;
    border-radius: 4px;
  }
`;

export const LightboxImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem 1rem;
  justify-content: flex-start;
  min-height: 0;
  padding-top: 1rem;
  padding-bottom: ${(props) => (props.hasThumbnails ? "1rem" : "0")};
  width: 100%;
  box-sizing: border-box;

  img {
    max-width: 100%;
    width: 100%;
    height: auto;
    max-height: 55vh;
    border-radius: 8px;
    object-fit: contain;
    margin-bottom: ${(props) => (props.hasThumbnails ? "initial" : "0")};
    &.portrait {
      max-height: 65vh;
    }
  }

  @media (min-width: 768px) {
    flex: 3;
    width: auto;
  }

  @media (max-width: 768px) {
    padding-bottom: ${(props) => (props.hasThumbnails ? "1.5rem" : "0")};
    padding-top: 0.5rem;
    width: 100%;
    flex: none;
    img {
      max-height: 38vh;
      &.portrait {
        max-height: 40vh;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 0 0.25rem 0.5rem;
    img {
      max-width: 100vw;
      width: 100vw;
      height: auto;
      max-height: 32vh;
    }
  }
`;

export const LightboxInfoContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  background-color: rgb(31, 30, 30);
  border-radius: 6px;
  margin-bottom: 1rem;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
  }
`;

export const LightboxThumbnails = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.25rem;
  padding-bottom: 0.5rem;
  width: 100%;

  img {
    width: auto;
    height: 65px; /* Slightly smaller thumbnails */
    object-fit: cover;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.3s;
    flex-shrink: 0;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      height: 55px; /* Even smaller on mobile */
    }
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    gap: 0.5rem; /* Smaller gap on mobile */
  }
`;

export const LightboxCloseButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  max-width: 100px;

  &:hover {
    background-color: #444;
  }
`;

export const LightboxTitle = styled.h2`
  font-size: 1.75rem;
  color: #ff6b6b;
  margin-bottom: 1rem;
  line-height: 1.2;
  word-break: break-word; /* Ensures text wraps instead of overflowing */

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const LightboxDescription = styled.p`
  font-size: 0.875rem;
  color: #a0a0a0;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const LightboxRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem 1.5rem;
  padding-top: 1rem;
  max-height: 100%;
  overflow-y: auto;
  justify-content: flex-start;
  width: 100%;
  flex: none;

  /* Hide scrollbar but keep functionality */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 107, 107, 0.3) rgba(31, 30, 30, 0.5);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(31, 30, 30, 0.5);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 107, 107, 0.3);
    border-radius: 3px;
  }

  @media (min-width: 768px) {
    flex: 1;
    width: auto;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem 1.5rem;
    padding-top: 1.5rem;
    max-height: none;
    overflow-y: visible;
    width: 100%;
    flex: none;
  }
`;

export const LightboxToolsContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background-color: rgb(31, 30, 30);
  border-radius: 6px;
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 1.5rem; /* Extra margin for the last container */
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #f0f0f0;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

export const LightboxTool = styled.div`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  background-color: #1a1a1a;
  color: #a0a0a0;
  margin-bottom: 0;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const LightboxCloseCircle = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  height: 3rem;
  width: 3rem;
  background-color: rgba(255, 107, 107, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 20;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 107, 107, 0.3);
  }

  .close-icon {
    font-size: 1.5rem;
    color: #ff6b6b;
    transition: transform 0.3s;

    &:hover {
      transform: rotate(90deg);
    }
  }
`;

export const LightboxLink = styled.a`
  color: #ff6b6b;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.75rem;
  transition: color 0.3s;
  word-break: break-word; /* Ensures links wrap properly */

  &:hover {
    color: #ff6b6b;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const LightboxFigmaContainer = styled.div`
  margin-top: 1rem;
  background-color: rgb(31, 30, 30);
  border-radius: 6px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  h3 {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #f0f0f0;
  }

  iframe {
    border: none;
    border-radius: 4px;
    width: 100%;
    height: 450px;
    background-color: #f0f0f0;

    @media (max-width: 768px) {
      height: 300px;
    }
  }

  .figma-button {
    margin-top: 0.75rem;
    background-color: #ff6b6b;
    color: #0f0f0f;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    align-self: flex-start;

    &:hover {
      background-color: #ff8383;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
