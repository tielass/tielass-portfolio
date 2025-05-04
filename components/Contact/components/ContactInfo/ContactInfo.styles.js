import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 10;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem; /* gap-16 in Tailwind CSS */
  align-items: center;
  min-height: 80vh;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* lg:grid-cols-2 in Tailwind CSS */
  }
`;

export const Title = styled(motion.h2)`
  font-size: 4rem; /* Smaller default size for mobile */
  font-weight: bold;
  color: #ff6b6b;
  margin-bottom: 1.5rem;
  letter-spacing: -0.05em;

  @media (min-width: 640px) {
    font-size: 6rem; /* Medium size for tablets */
  }

  @media (min-width: 1024px) {
    font-size: 8rem; /* Full size for desktop */
  }
`;

export const Description = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem; /* space-y-8 in Tailwind CSS */
  font-size: 1.25rem; /* text-xl in Tailwind CSS */
  color: #a0a0a0;
  max-width: 32rem; /* max-w-xl in Tailwind CSS */
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* space-y-6 in Tailwind CSS */
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InfoTitle = styled.h3`
  font-size: 1.125rem; /* text-lg in Tailwind CSS */
  font-weight: 500;
  color: #ff6b6b;
  margin-bottom: 0.5rem; /* mb-2 in Tailwind CSS */
`;

export const InfoLink = styled.a`
  color: #f0f0f0;
  transition: color 0.3s;
  &:hover {
    color: #ff6b6b;
  }
  display: flex;
  align-items: center;
  gap: 0.5rem;
  .icon {
    transition: transform 0.3s;
  }
  &:hover .icon {
    transform: rotate(45deg);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem; /* gap-6 in Tailwind CSS */
`;

export const SocialLink = styled.a`
  color: #a0a0a0;
  transition: color 0.3s;
  &:hover {
    color: #ff6b6b;
  }
`;

export const FormContainer = styled(motion.div)`
  position: relative;
`;

export const Form = styled.form`
  background-color: #2a2a2a;
  border-radius: 0.5rem;
  padding: 2rem;
  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.875rem; /* text-sm in Tailwind CSS */
  font-weight: 500;
  color: #a0a0a0;
`;

export const Input = styled.input`
  background-color: #1a1a1a;
  border: none;
  border-radius: 0.375rem; /* rounded-md in Tailwind CSS */
  padding: 0.75rem 1rem; /* py-3 px-4 in Tailwind CSS */
  color: #f0f0f0;
  transition: all 0.3s;
  &:focus {
    outline: none;
    ring: 2px solid #ff6b6b; /* focus:ring-2 focus:ring-[#ff6b6b] in Tailwind CSS */
  }
`;

export const Textarea = styled.textarea`
  background-color: #1a1a1a;
  border: none;
  border-radius: 0.375rem; /* rounded-md in Tailwind CSS */
  padding: 0.75rem 1rem; /* py-3 px-4 in Tailwind CSS */
  color: #f0f0f0;
  transition: all 0.3s;
  resize: none;
  &:focus {
    outline: none;
    ring: 2px solid #ff6b6b; /* focus:ring-2 focus:ring-[#ff6b6b] in Tailwind CSS */
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem 1rem; /* py-3 px-4 in Tailwind CSS */
  border-radius: 0.375rem; /* rounded-md in Tailwind CSS */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
  color: #0f0f0f;
  transition: all 0.3s;
  background-color: ${(props) =>
    props.isSubmitting ? "rgba(255, 107, 107, 0.7)" : "#ff6b6b"};
  &:hover {
    background-color: ${(props) =>
      props.isSubmitting ? "rgba(255, 107, 107, 0.7)" : "#ff8787"};
  }
`;

export const DecorativeCircle = styled.div`
  position: absolute;
  background-color: rgba(255, 107, 107, 0.1);
  border-radius: 50%;
  z-index: 0;
  &.top-right {
    top: -1.5rem;
    right: -1.5rem;
    height: 3rem;
    width: 3rem;
  }
  &.bottom-left {
    bottom: -2rem;
    left: -2rem;
    height: 4rem;
    width: 4rem;
  }
`;
