import React from "react";
import { SectionContainer, Header, Title, Description } from "./Work.styles";
import ProjectGallery from "../ProjectGallery/ProjectGallery";
import Container from "../Container";

const Work = () => {
  return (
    <Container>
      <SectionContainer>
        <Header>
          <Title>Work</Title>
          <Description>
            A curated selection of projects that blur the boundaries between
            code, design, and illustration.
          </Description>
        </Header>
        <ProjectGallery />
      </SectionContainer>
    </Container>
  );
};

export default Work;
