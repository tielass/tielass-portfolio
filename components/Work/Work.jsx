import React from "react";
import {
  SectionContainer,
  SvgContainer,
  Svg,
  Container,
  Header,
  Title,
  Description,
} from "./Work.styles";
import ProjectGallery from "../ProjectGallery/ProjectGallery";

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
      </Container>
      <ProjectGallery />
    </SectionContainer>
  );
};

export default Work;
