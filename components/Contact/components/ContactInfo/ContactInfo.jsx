import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Container from "../../../Container"; // Import the universal Container
import {
  Grid,
  Title,
  Description,
  InfoSection,
  InfoItem,
  InfoTitle,
  InfoLink,
  SocialLinks,
  SocialLink,
  FormContainer,
  DecorativeCircle,
} from "./ContactInfo.styles";

const ContactInfo = () => {
  return (
    <Container>
      {" "}
      {/* Replace the styled Container with our universal Container */}
      <Grid>
        <div>
          <Title
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contact
          </Title>

          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              Interested in working together? Let's discuss your project and
              bring your vision to life.
            </p>

            <InfoSection>
              <InfoItem>
                <InfoTitle>Email</InfoTitle>
                <InfoLink href="mailto:tielass@gmail.com">
                  tielass@gmail.com
                </InfoLink>
              </InfoItem>

              <InfoItem>
                <InfoTitle>Location</InfoTitle>
                <p>Berlin, Germany</p>
              </InfoItem>

              <InfoItem>
                <InfoTitle>Connect</InfoTitle>
                <SocialLinks>
                  <SocialLink
                    href="https://www.instagram.com/mmhikes/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </SocialLink>
                  <SocialLink
                    href="https://github.com/tielass"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </SocialLink>
                  <SocialLink
                    href="https://www.linkedin.com/in/tielass/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </SocialLink>
                </SocialLinks>
              </InfoItem>
            </InfoSection>
          </Description>
        </div>

        <FormContainer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ContactForm />
          <DecorativeCircle className="top-right" />
          <DecorativeCircle className="bottom-left" />
        </FormContainer>
      </Grid>
    </Container>
  );
};

export default ContactInfo;
