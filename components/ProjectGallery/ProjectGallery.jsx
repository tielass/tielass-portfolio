import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Code,
  Palette,
  PenTool,
  ExternalLink,
  Download,
  Maximize2,
} from "lucide-react";
import projects from "../../helpers/projectsData"; // Import projects from helpers folder
import {
  CategoryButton,
  ProjectGrid,
  ProjectCard,
  Overlay,
  StyledImage,
  IconContainer,
  IconWrapper,
  ProjectInfo,
  CategoryLabel,
  ProjectTitle,
  ProjectDescription,
  FiltersContainer,
  ImageContainer,
  LightboxOverlay,
  LightboxContent,
  LightboxImageContainer,
  LightboxThumbnails,
  LightboxCloseButton,
  LightboxInfoContainer,
  LightboxTitle,
  LightboxRightContainer,
  LightboxToolsContainer,
  LightboxCloseCircle,
  LightboxTool,
  LightboxDescription,
  LightboxLink,
  LightboxFigmaContainer,
  LightboxImageWrapper,
  LightboxImageHoverOverlay,
  LightboxImageActionButton,
} from "./ProjectGallery.styles";
import Container from "../Container";

const ProjectGallery = () => {
  const [activeCategory, setActiveCategory] = useState("development");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [imageOrientation, setImageOrientation] = useState("landscape");

  // Add effect to prevent body scrolling when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      // Save the current scroll position
      const scrollY = window.scrollY;

      // Prevent body scrolling
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        // Restore body scrolling when component unmounts or lightbox closes
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [isLightboxOpen]);

  const openLightbox = (project) => {
    // Only add additional images if they exist
    const additionalImages =
      project.additionalImages && project.additionalImages.length > 0
        ? [project.image, ...project.additionalImages]
        : [project.image];

    setSelectedProject({
      ...project,
      additionalImages: additionalImages,
    });
    setCurrentImage(project.image);
    checkImageOrientation(project.image); // Check orientation when opening lightbox
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setCurrentImage(null);
    setIsLightboxOpen(false);
  };

  // Function to check if an image is portrait or landscape orientation
  const checkImageOrientation = (imgSrc) => {
    const img = new Image();
    img.onload = () => {
      if (img.height > img.width) {
        setImageOrientation("portrait");
      } else {
        setImageOrientation("landscape");
      }
    };
    img.src = imgSrc.split("?")[0]; // Remove query params
  };

  // Function to open image in new tab
  const openImageInNewTab = (imageSrc) => {
    window.open(imageSrc.split("?")[0], "_blank");
  };

  // Function to download image
  const downloadImage = (imageSrc, projectTitle) => {
    const link = document.createElement("a");
    link.href = imageSrc.split("?")[0];
    link.download = `${projectTitle}-image.${
      imageSrc.split(".").pop().split("?")[0]
    }`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredProjects = activeCategory
    ? projects.filter((project) => project.category === activeCategory)
    : projects;

  const categories = [
    { id: "development", label: "Development", icon: Code },
    { id: "design", label: "Design", icon: Palette },
    { id: "illustration", label: "Illustration", icon: PenTool },
  ];

  return (
    <Container>
      <FiltersContainer>
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <CategoryButton
              key={category.id}
              onClick={() =>
                setActiveCategory(
                  activeCategory === category.id ? null : category.id
                )
              }
              active={activeCategory === category.id}
            >
              <Icon />
              <span>{category.label}</span>
            </CategoryButton>
          );
        })}
      </FiltersContainer>

      <ProjectGrid>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => {
              openLightbox(project); // Open lightbox on click
              checkImageOrientation(project.image);
            }}
          >
            <ImageContainer>
              <Overlay className="overlay" />
              <StyledImage
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`image ${imageOrientation}`}
              />
              <IconContainer className="icon-container">
                <IconWrapper>
                  <ArrowUpRight />
                </IconWrapper>
              </IconContainer>
            </ImageContainer>

            <ProjectInfo>
              <CategoryLabel>{project.category}</CategoryLabel>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectGrid>

      {/* Lightbox */}
      {isLightboxOpen && selectedProject && (
        <LightboxOverlay onClick={closeLightbox}>
          <LightboxContent onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <LightboxCloseCircle onClick={closeLightbox}>
              <span className="close-icon">×</span>
            </LightboxCloseCircle>
            {/* Image on the left */}
            <LightboxImageContainer
              hasThumbnails={selectedProject.additionalImages?.length > 1}
            >
              <LightboxImageWrapper>
                <img
                  src={currentImage.split("?")[0]}
                  alt={selectedProject.title}
                  className={imageOrientation}
                  style={{
                    marginBottom:
                      !selectedProject.additionalImages ||
                      selectedProject.additionalImages.length <= 1
                        ? "0"
                        : undefined,
                  }}
                />
                <LightboxImageHoverOverlay className="image-hover-overlay">
                  <LightboxImageActionButton
                    onClick={(e) => {
                      e.stopPropagation();
                      openImageInNewTab(currentImage);
                    }}
                    title="Open in new tab"
                  >
                    <Maximize2 />
                  </LightboxImageActionButton>
                  <LightboxImageActionButton
                    onClick={(e) => {
                      e.stopPropagation();
                      downloadImage(currentImage, selectedProject.title);
                    }}
                    title="Download image"
                  >
                    <Download />
                  </LightboxImageActionButton>
                </LightboxImageHoverOverlay>
              </LightboxImageWrapper>
              {selectedProject.additionalImages?.length > 1 &&
                selectedProject.additionalImages && (
                  <LightboxThumbnails>
                    {selectedProject.additionalImages.map((image, index) => (
                      <img
                        key={index}
                        src={image.split("?")[0]}
                        alt={`Additional ${index + 1}`}
                        onClick={() => {
                          setCurrentImage(image);
                          checkImageOrientation(image); // Check orientation when changing image
                        }}
                        style={{
                          height:
                            selectedProject.thumbnailDimensions?.height ||
                            "200px",
                          width:
                            selectedProject.thumbnailDimensions?.width ||
                            "auto",
                          objectFit: "cover",
                        }}
                      />
                    ))}
                  </LightboxThumbnails>
                )}
            </LightboxImageContainer>

            {/* Info on the right */}
            <LightboxRightContainer>
              <LightboxInfoContainer>
                <LightboxTitle>{selectedProject.title}</LightboxTitle>
                <LightboxDescription>
                  {selectedProject.description
                    .split("\n")
                    .map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                </LightboxDescription>
              </LightboxInfoContainer>
              {/* Link to project */}
              {selectedProject?.link && (
                <LightboxToolsContainer>
                  <h3>Project Link</h3>
                  <LightboxLink href={selectedProject.link} target="_blank">
                    {selectedProject.link}
                  </LightboxLink>
                </LightboxToolsContainer>
              )}
              {/* Figma Prototype */}
              {selectedProject?.figmaLink && (
                <LightboxFigmaContainer>
                  <h3>Figma Prototype</h3>
                  <iframe
                    src={`${selectedProject.figmaLink}`}
                    allowFullScreen
                  />
                  <a
                    href={selectedProject.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="figma-button"
                  >
                    <ExternalLink size={16} />
                    Open in Figma
                  </a>
                </LightboxFigmaContainer>
              )}
              {/* Tools */}
              <LightboxToolsContainer>
                <h3>Tools</h3>
                <div>
                  {selectedProject?.tools.map((tool) => (
                    <LightboxTool key={tool}>{tool}</LightboxTool>
                  ))}
                </div>
              </LightboxToolsContainer>
              {/* Tags */}
              <LightboxToolsContainer>
                <h3>Tags</h3>
                <div>
                  {selectedProject?.tags.map((tag) => (
                    <CategoryLabel key={tag}>{tag}</CategoryLabel>
                  ))}
                </div>
              </LightboxToolsContainer>
            </LightboxRightContainer>
          </LightboxContent>
        </LightboxOverlay>
      )}
    </Container>
  );
};

export default ProjectGallery;
