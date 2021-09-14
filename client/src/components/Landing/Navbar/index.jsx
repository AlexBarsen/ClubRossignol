import React from "react";
import { FaBars } from "react-icons/fa";

import Logo from "../../../svg/logo.svg";
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

export const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/ ">
            <NavLogoSvg src={Logo}></NavLogoSvg>
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
                // offset={-85}
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
                offset={82}
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
                offset={82}
              >
                Rental
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="shop"
                smooth={true}
                duration={500}
                spy={true}
                offset={82}
              >
                Shop
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="hotel"
                smooth={true}
                duration={500}
                spy={true}
                offset={82}
              >
                Hotel
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={82}
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
