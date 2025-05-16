import React, { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import Container from "../../../Container"; // Import the universal Container
import { Copy, Check } from "lucide-react";
import {
  Grid,
  Title,
  Description,
  InfoSection,
  InfoItem,
  InfoTitle,
  InfoLink,
  EmailContainer,
  CopyButton,
  SocialLinks,
  SocialLink,
  FormContainer,
  DecorativeCircle,
} from "./ContactInfo.styles";

const ContactInfo = () => {
  const [copied, setCopied] = useState(false);
  const email = "tielass@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <Container>
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
                <EmailContainer>
                  <InfoLink href={`mailto:${email}`}>{email}</InfoLink>
                  <CopyButton
                    onClick={copyToClipboard}
                    className={copied ? "copied" : ""}
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="icon" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy size={14} className="icon" /> Copy
                      </>
                    )}
                  </CopyButton>
                </EmailContainer>
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
