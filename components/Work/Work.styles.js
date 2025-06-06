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

export const SvgContainer = styled.div`
  position: absolute;
  top: -10rem;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 0;
`;

export const Svg = styled.svg`
  width: 100%;
  height: 6.25rem;
`;

export const Header = styled.div`
  margin-bottom: 4rem;
  max-width: 48rem;
`;

export const Title = styled.h1`
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
`;
