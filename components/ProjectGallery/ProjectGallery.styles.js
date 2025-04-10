import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
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
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
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

  @media (max-width: 640px) {
    justify-content: justify-content: center;
    flex-wrap: wrap;
    margin: 0 0.5rem;
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
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const LightboxContent = styled.div`
  position: relative;
  background-color: rgb(20, 20, 20);
  padding: 4rem 0;
  border-radius: 8px;
  width: 70%;
  height: 85%;
  display: flex;
  // overflow: hidden;
`;

export const LightboxImageContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 8px;
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
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 1rem;

  img {
    width: auto;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
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
  font-size: 2rem !important;
  color: #ff6b6b;
`;

export const LightboxDescription = styled.p`
  font-size: 0.5rem;
`;

export const LightboxRightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 3rem;
`;

export const LightboxToolsContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1rem;
  background-color: rgb(31, 30, 30);
  border-radius: 6px;
`;

export const LightboxTool = styled.div`
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

export const LightboxCloseCircle = styled.div`
  position: absolute;
  top: -1.5rem;
  right: -1.5rem;
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

  &:hover {
    color: #ff6b6b;
    text-decoration: underline;
  }
`;