import React from "react";
import SkillsSelection from "./components/SkillsSelection/SkillsSelection";
import SkillsCanvas from "./components/SkillsCanvas/SkillsCanvas";
import { GridContainer, SectionContainer } from "./Skills.styles";

const Skills = () => {
  return (
    <SectionContainer>
      <GridContainer>
        <SkillsSelection />
        <SkillsCanvas />
      </GridContainer>
    </SectionContainer>
  );
};

export default Skills;
