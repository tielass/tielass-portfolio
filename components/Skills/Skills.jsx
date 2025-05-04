import React from "react";
import SkillsSelection from "./components/SkillsSelection/SkillsSelection";
import SkillsCanvas from "./components/SkillsCanvas/SkillsCanvas";
import Container from "../Container";
import { GridContainer, SectionContainer } from "./Skills.styles";

const Skills = () => {
  return (
    <SectionContainer>
      <Container>
        <GridContainer>
          <SkillsSelection />
          <SkillsCanvas />
        </GridContainer>
      </Container>
    </SectionContainer>
  );
};

export default Skills;
