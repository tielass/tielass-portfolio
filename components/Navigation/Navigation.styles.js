import styled from "@emotion/styled"

export const NavContainer = styled.div`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 50;
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`

export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const NavButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  .dot {
    height: 0.75rem;
    width: 0.75rem;
    border-radius: 50%;
    transition: all 0.3s;
    background-color: ${(props) => (props.active ? "#ff6b6b" : "#f0f0f0")};
    opacity: ${(props) => (props.active ? 1 : 0.5)};
    transform: ${(props) => (props.active ? "scale(1.25)" : "scale(1)")};
  }
  .label {
    position: absolute;
    right: 1.5rem;
    opacity: 0;
    transition: opacity 0.3s;
    white-space: nowrap;
    text-transform: capitalize;
    font-size: 0.875rem;
    &:hover {
      opacity: 1;
    }
  }
`