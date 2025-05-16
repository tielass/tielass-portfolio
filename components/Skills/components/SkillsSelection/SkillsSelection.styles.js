import styled from "@emotion/styled";

export const Title = styled.h2`
  font-size: 8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #ff6b6b;
  letter-spacing: -0.05em;

  @media (max-width: 1366px) {
    font-size: 6.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 5.5rem;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
  }

  @media (max-width: 640px) {
    font-size: 4.5rem;
  }

  @media (max-width: 480px) {
    font-size: 3.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.25rem;
  color: #a0a0a0;
  max-width: 32rem;
  margin-bottom: 3rem;

  @media (max-width: 1366px) {
    font-size: 1.15rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

export const SkillsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SkillCategory = styled.div`
  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: #ff6b6b;

    @media (max-width: 1366px) {
      font-size: 1.15rem;
    }

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: #f0f0f0;
      margin-bottom: 0.5rem;

      @media (max-width: 1366px) {
        font-size: 0.95rem;
      }

      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }
`;

export const SkillsCanvasContainer = styled.div`
  height: 60vh;
  position: relative;
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;
