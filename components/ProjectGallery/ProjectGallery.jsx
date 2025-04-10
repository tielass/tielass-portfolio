import { useState } from "react";
import { ArrowUpRight, Code, Palette, PenTool, Tags } from "lucide-react";
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
} from "./ProjectGallery.styles";

const projects = [
  {
    id: 1,
    title: "Alchemist Verena",
    description:
      "In a world ablaze with mystic wonders, an adventurous alchemist emerges from the shadows, her spirit aflame with a relentless pursuit of arcane secrets. With her satchel filled with vials and her eyes brimming with curiosity, she traverses untamed landscapes, unearthing rare herbs and exotic ingredients to fuel her daring transmutations. Guided by an insatiable hunger for knowledge, she dances on the precipice of discovery, forever driven to unlock the mysteries that lie hidden within the alchemical arts.",
    category: "illustration",
    image:
      "/images/illustration_images/mihail-mihaylov-alchemist-verena.jpg?height=600&width=800",
    tools: ["Photoshop", "Wacom Intuos Pro"],
    tags: ["Illustration", "Character Design"],
  },
  {
    id: 2,
    title: "Jeera",
    description:
      "Portrait of the travelling merchant known as Jeera. Every spring he sets off on a long journey accross the Iron Straits to provide the locals with goods they've never seen before and more often than not - ones they don't at all need.",
    category: "illustration",
    image:
      "/images/illustration_images/mihail-mihaylov-jeera-mihaylov.jpg?height=600&width=800",
    tools: ["Photoshop", "Wacom Intuos Pro"],
    tags: ["Illustration", "Character Design"],
    additionalImages: [
      "/images/illustration_images/mihail-mihaylov-jeera-lineart-mihaylov.jpg",
    ],
  },
  {
    id: 3,
    title: "Character Design Series",
    description:
      "A collection of illustrated characters exploring themes of technology and human connection.",
    category: "illustration",
    image:
      "/images/illustration_images/mihail-mihaylov-ceremonial-dagger-mihaylovlr.jpg?height=600&width=800",
    tools: ["Photoshop"],
    tags: ["Illustration", "Character Design"],
    additionalImages: [
      "/images/illustration_images/mihail-mihaylov-alchemist-verena-2.jpg",
      "/images/illustration_images/mihail-mihaylov-alchemist-verena-3.jpg",
    ],
  },
  {
    id: 4,
    title: "Gift It",
    description:
      "Giftit is a webapp, which helps the user select the right gift, create events and invite friends to them and make use of the birthday calendar feature.",
    category: "development",
    image: "/images/development_images/giftit1.jpg?height=600&width=800",
    link: "https://github.com/tielass/giftit",
    tools: [
      "Ruby on Rails",
      "Javascript",
      "HTML5",
      "CSS3",
      "Figma",
      "PostgreSQL",
    ],
    tags: [
      "WebApp",
      "FullStack Development",
      "Frontend Development",
      "UI/UX Design",
    ],
    additionalImages: [
      "/images/development_images/giftit2.jpg?height=600&width=800",
      "/images/development_images/giftit3.jpg",
      "/images/development_images/giftit4.jpg",
      "/images/development_images/giftit5.jpg",
      "/images/development_images/giftit6.jpg",
    ],
    thumbnailDimensions: { height: "80px", width: "40px" },
  },
  {
    id: 5,
    title: "SpaceX Monitoring",
    description:
      "A website that provides information about SpaceX launches, including launch dates, rocket types, and mission details. Users can filter launches by year and rocket type. The site is designed with the space-x api https://github.com/r-spacex/SpaceX-API",
    category: "development",
    image:
      "/images/development_images/space-x-monitoring-5.jpg?height=600&width=800",
    link: "https://spacexmonitoring.netlify.app/",
    tools: ["React", "Javascript", "HTML5", "CSS3", "Figma", "SpaceX API"],
    tags: ["SpaceX", "WebApp", "Frontend Development"],
    additionalImages: [
      "/images/development_images/space-x-monitoring-1.jpg",
      "/images/development_images/space-x-monitoring-2.jpg",
      "/images/development_images/space-x-monitoring-3.jpg",
    ],
    thumbnailDimensions: { height: "150px", width: "150px" },
  },
  {
    id: 6,
    title: "Pre-Employment Screening Portal",
    description: `Developed a responsive pre-employment screening portal that streamlines candidate background checks, document uploads. Integrated secure authentication, intuitive dashboards, and dynamic form components using modern frontend frameworks for a seamless user experience.\nDue to the confidential nature of the project, specific details and functionalities cannot be publicly disclosed.`,
    category: "development",
    image: "/placeholder.svg?height=600&width=800",
    tools: ["NextJs", "Figma", "React", "NextAuth", "RestAPI", "SSO", "Azure-AD", "MUI DataGrid", "Recharts"],
    tags: ["Frontend development", "WebApp", "UI/UX Design", "NextJs", "React"],
  },
];

const ProjectGallery = () => {
  const [activeCategory, setActiveCategory] = useState("development"); 
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (project) => {
    setSelectedProject({
      ...project,
      additionalImages: [project.image, ...(project.additionalImages || [])],
    });
    setCurrentImage(project.image);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setCurrentImage(null);
    setIsLightboxOpen(false);
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
    <div>
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
            onClick={() => openLightbox(project)} // Open lightbox on click
          >
            <ImageContainer>
              <Overlay className="overlay" />
              <StyledImage
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="image"
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
            <LightboxImageContainer>
              <img src={currentImage} alt={selectedProject.title} />
              {selectedProject.additionalImages?.length > 1 && ( // Render thumbnails only if there are additional images
                <LightboxThumbnails>
                  {selectedProject.additionalImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Additional ${index + 1}`}
                      onClick={() => setCurrentImage(image)} // Update the main image
                      style={{
                        height:
                          selectedProject.thumbnailDimensions?.height ||
                          "200px",
                        width:
                          selectedProject.thumbnailDimensions?.width || "auto",
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
              <LightboxToolsContainer>
                <h3>Tools</h3>
                <div>
                  {selectedProject?.tools.map((tool) => (
                    <LightboxTool key={tool}>{tool}</LightboxTool>
                  ))}
                </div>
              </LightboxToolsContainer>
              <LightboxToolsContainer>
                <h3>Tags</h3>
                <div>
                  {selectedProject?.tags.map((tag) => (
                    <CategoryLabel key={tag}>{tag}</CategoryLabel>
                  ))}
                </div>
              </LightboxToolsContainer>
              {/* Link to project */}
              {selectedProject?.link && (
                <LightboxToolsContainer>
                  <h3>Project Link</h3>
                  <LightboxLink href={selectedProject.link} target="_blank">
                    {selectedProject.link}
                  </LightboxLink>
                </LightboxToolsContainer>
              )}
            </LightboxRightContainer>
          </LightboxContent>
        </LightboxOverlay>
      )}
    </div>
  );
};

export default ProjectGallery;
