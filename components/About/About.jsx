import React from "react";
import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import Container from "../Container";
import {
  Grid,
  ImageContainer,
  ImageWrapper,
  GradientOverlay,
  BlurredCircle,
  Content,
  Title,
  Description,
  ResumeLink,
  ResumeContainer,
  DownloadLink,
} from "./About.styles";

const About = () => {
  return (
    <Container>
      <Grid>
        <ImageContainer>
          <ImageWrapper>
            <GradientOverlay />
            <Image
              src="/images/Mihaylov_about.jpg"
              alt="Portrait"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </ImageWrapper>
          <BlurredCircle className="bottom-right" />
          <BlurredCircle className="top-left" />
        </ImageContainer>

        <Content>
          <Title
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About
          </Title>

          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              I&apos;m an interdisciplinary creative who thrives at the
              intersection of code, design, and illustration. My work blurs the
              boundaries between these disciplines, creating digital experiences
              that are both functional and emotionally resonant.
            </p>
            <p>
              With a background spanning frontend development, graphic design,
              and illustration, I bring a holistic perspective to every project.
              This cross-disciplinary approach allows me to solve problems
              creatively and deliver work that stands out in an increasingly
              homogenized digital landscape.
            </p>
            <p>
              When I&apos;m not creating for clients, I&apos;m experimenting
              with new techniques, contributing to open-source projects, or
              sketching in my studio. I believe that continuous exploration is
              essential for growth and innovation.
            </p>

            <ResumeContainer>
              {/* View Resume Link */}
              <ResumeLink
                href="https://drive.google.com/file/d/1aIcBi3iAlUJ8D6TZMfOrQDRCAa8cPV_n/view?usp=sharing"
                target="_blank"
              >
                <span className="text-lg font-medium">View Resume</span>
                <ArrowUpRight className="h-5 w-5 icon" />
              </ResumeLink>

              {/* Download Resume Button */}
              <DownloadLink
                href="/Mihail_Mihaylov_CV.pdf"
                download="Mihail_Mihaylov_CV.pdf" // This sets the downloaded file name
              >
                <span className="text-lg font-medium">Download Resume</span>
                <Download className="h-5 w-5 icon" />
              </DownloadLink>
            </ResumeContainer>
          </Description>
        </Content>
      </Grid>
    </Container>
  );
};

export default About;
