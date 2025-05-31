import React, { useRef, useState } from "react";
import {
  FormContainer,
  FormField,
  Label,
  Input,
  Textarea,
  SubmitButton,
  SuccessMessage,
} from "./ContactForm.styles";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

  const handleFocus = (e) => {
    e.target.dataset.placeholder = e.target.placeholder;
    e.target.placeholder = "";
  };

  const handleBlur = (e) => {
    e.target.placeholder = e.target.dataset.placeholder;
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2awchnd", "template_ejci9uj", form.current, {
        publicKey: "rcbgbFeo3CBwhThwW",
      })
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccessMessageVisible(true); // Show success message
          setTimeout(() => {
            setIsSuccessMessageVisible(false); // Hide success message after a few seconds
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <FormContainer ref={form} onSubmit={sendEmail}>
      <FormField>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="user_name"
          id="user_name"
          placeholder="your name"
          required
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </FormField>

      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="user_email"
          id="user_email"
          placeholder="your.email@example.com"
          required
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </FormField>

      <FormField>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="tell me about your project..."
          rows={6}
          required
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </FormField>
      {isSuccessMessageVisible && (
        <SuccessMessage>
          Your message has been sent successfully!
        </SuccessMessage>
      )}

      <SubmitButton type="submit">
        Send Message
        <Send className="h-4 w-4" />
      </SubmitButton>
    </FormContainer>
  );
};

export default ContactForm;
