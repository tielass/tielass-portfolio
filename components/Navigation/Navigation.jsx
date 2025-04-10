import React from 'react'
import { NavContainer, NavList, NavButton } from './Navigation.styles'

const Navigation = ({ sections, activeSection, scrollToSection }) => {
    return (
        <NavContainer>
          <NavList>
            {sections.map((section) => (
              <NavButton key={section} onClick={() => scrollToSection(section)} active={activeSection === section}>
                <span className="dot" />
                <span className="label">{section}</span>
              </NavButton>
            ))}
          </NavList>
        </NavContainer>
      )
}

export default Navigation