import styled from "@emotion/styled";

export const FormContainer = styled.form`
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
  margin: 0.5rem 0;
`;

export const Label = styled.label`
  font-size: 0.875rem; 
  font-weight: 500;
  color: #a0a0a0;
  margin: 1rem 0 0 0.5rem; 
`;

export const Input = styled.input`
  background-color: #1a1a1a;
  border: none;
  border-radius: 0.375rem; 
  padding: 1rem; 
  color: #f0f0f0;
  transition: all 0.3s;
  &:focus {
    outline: none;
    ring: 2px solid #ff6b6b; 
  }
`;

export const Textarea = styled.textarea`
  background-color: #1a1a1a;
  border: none;
  border-radius: 0.375rem; 
  padding: 0.75rem 1rem; 
  color: #f0f0f0;
  transition: all 0.3s;
  resize: none;
  &:focus {
    outline: none;
    ring: 2px solid #ff6b6b;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem 1rem; 
  margin-top: 2rem;
  border-radius: 0.375rem; 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
  color: #0f0f0f;
  transition: all 0.3s;
  background-color: #ff6b6b;
  border: none;
  &:hover {
    background-color: #ff8787;
  }
`;