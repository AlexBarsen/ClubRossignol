import React from "react";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavLogoSvg,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

import { FaBars } from "react-icons/fa";

export const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavLogoSvg src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/SVG%2FLogo%2Flogo.svg?alt=media&token=05b2ed2b-1069-4890-abde-e9b36389ad8a"></NavLogoSvg>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-120}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="restaurant"
                smooth={true}
                duration={500}
                spy={true}
                offset={-120}
              >
                Restaurant
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="rental"
                smooth={true}
                duration={500}
                spy={true}
                offset={-120}
              >
                Rental
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="hotel"
                smooth={true}
                duration={500}
                spy={true}
                offset={-120}
              >
                Hotel
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="shop"
                smooth={true}
                duration={500}
                spy={true}
                offset={-120}
              >
                Shop
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-120}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/rental">Rental Application</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
