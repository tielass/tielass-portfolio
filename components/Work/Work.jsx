import React from "react";
import { SectionContainer, Header, Title, Description } from "./Work.styles";
import ProjectGallery from "../ProjectGallery/ProjectGallery";
import Container from "../Container";

const Work = () => {
  return (
    <SectionContainer>
      <Container>
        <Header>
          <Title>Work</Title>
          <Description>
            A curated selection of projects that blur the boundaries between
            code, design, and illustration.
          </Description>
        </Header>
        <ProjectGallery />
      </Container>
    </SectionContainer>
  );
};

export default Work;
