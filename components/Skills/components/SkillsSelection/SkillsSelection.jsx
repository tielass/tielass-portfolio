import React from "react";
import {
  Title,
  Description,
  SkillsList,
  SkillCategory,
} from "./SkillsSelection.styles";

const SkillsSection = () => {
  const skills = [
    {
      title: "Frontend Development",
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "Javascript",
        "Tailwind CSS",
        "HTML5 & CSS3",
      ],
    },
    {
      title: "Visual Design",
      skills: [
        "Logo Design",
        "Brand Identity",
        "Vector Illustrations",
        "Typography",
        "Product & Packaging Design", 
      ],
    },
    {
      title: "Illustration",
      skills: [
        "Character Design",
        "Concept Art",
        "Game Assets",
        "Game UI",
        "Traditional Art",
      ],
    },
    {
      title: "UI / UX",
      skills: [
        "UI Design",
        "Wireframing",
        "Prototyping",
        "User Testing",
        "User Journey Mapping",
      ],
    },
  ];

  return (
    <div>
        <div>
          <Title>Skills</Title>
          <Description>
            My interdisciplinary approach combines technical expertise with
            artistic vision, allowing me to create unique digital experiences.
          </Description>

          <SkillsList>
            {skills.map((category, index) => (
              <SkillCategory key={category.title}>
                <h3>{category.title}</h3>
                <ul>
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </SkillCategory>
            ))}
          </SkillsList>
        </div>
    </div>
  );
};

export default SkillsSection;
