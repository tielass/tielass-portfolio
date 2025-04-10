import React from "react";
import {
  FormContainer,
  FormField,
  Label,
  Input,
  Textarea,
  SubmitButton,
} from "./ContactForm.styles";
import { Send } from "lucide-react";

const ContactForm = () => {
  const handleFocus = (e) => {
    e.target.dataset.placeholder = e.target.placeholder; 
    e.target.placeholder = ""; 
  };

  const handleBlur = (e) => {
    e.target.placeholder = e.target.dataset.placeholder; 
  };

  return (
    <FormContainer>
      <FormField>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
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
          id="email"
          name="email"
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

      <SubmitButton type="submit">
        Send Message
        <Send className="h-4 w-4" />
      </SubmitButton>
    </FormContainer>
  );
};

export default ContactForm;