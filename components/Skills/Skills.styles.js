import styled from "@emotion/styled";

export const SectionContainer = styled.div`
  min-height: 100vh;
  padding: 5rem 0;
  position: relative;

  @media (min-width: 1400px) {
    max-width: 1400px;
    margin: 0 auto;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 80vh;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
