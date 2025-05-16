import React from "react";
import styled from "@emotion/styled";

const StyledContainer = styled.div`
  width: 100%;
  max-width: ${(props) => props.maxWidth || "1400px"};
  margin: 0 auto;
  padding-left: ${(props) => (props.noPadding ? "0" : "1.5rem")};
  padding-right: ${(props) => (props.noPadding ? "0" : "1.5rem")};
  position: relative;
  overflow-x: hidden; /* Prevent horizontal overflow */
  box-sizing: border-box;

  @media (max-width: 1366px) {
    max-width: ${(props) =>
      props.maxWidth ? `calc(${props.maxWidth} * 0.95)` : "1330px"};
    padding-left: ${(props) => (props.noPadding ? "0" : "2.5rem")};
    padding-right: ${(props) => (props.noPadding ? "0" : "2.5rem")};
  }

  @media (min-width: 640px) {
    padding-left: ${(props) => (props.noPadding ? "0" : "2rem")};
    padding-right: ${(props) => (props.noPadding ? "0" : "2rem")};
  }

  @media (min-width: 1024px) {
    padding-left: ${(props) => (props.noPadding ? "0" : "4rem")};
    padding-right: ${(props) => (props.noPadding ? "0" : "4rem")};
  }

  @media (min-width: 1440px) {
    padding-left: ${(props) => (props.noPadding ? "0" : "1.5rem")};
    padding-right: ${(props) => (props.noPadding ? "0" : "1.5rem")};
  }

  /* Mobile adjustments */
  @media (max-width: 640px) {
    padding-left: ${(props) => (props.noPadding ? "0" : "1.5rem")};
    padding-right: ${(props) => (props.noPadding ? "0" : "1.5rem")};
    
  }

  /* Extra small screens */
  @media (max-width: 480px) {
    padding-left: ${(props) => (props.noPadding ? "0" : "1.5rem")};
    padding-right: ${(props) => (props.noPadding ? "0" : "1.5rem")};
  }
`;

const Container = ({ children, className, maxWidth, noPadding }) => {
  return (
    <StyledContainer
      className={className}
      maxWidth={maxWidth}
      noPadding={noPadding}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
