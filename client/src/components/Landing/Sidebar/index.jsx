import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-75}
            onClick={toggle}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="restaurant"
            smooth={true}
            duration={500}
            spy={true}
            offset={-75}
            onClick={toggle}
          >
            Restaurant
          </SidebarLink>
          <SidebarLink
            to="rental"
            smooth={true}
            duration={500}
            spy={true}
            offset={-75}
            onClick={toggle}
          >
            Rental
          </SidebarLink>

          <SidebarLink
            to="hotel"
            smooth={true}
            duration={500}
            spy={true}
            offset={-75}
            onClick={toggle}
          >
            Hotel
          </SidebarLink>

          <SidebarLink
            to="shop"
            smooth={true}
            duration={500}
            spy={true}
            offset={-75}
            onClick={toggle}
          >
            Shop
          </SidebarLink>
          <SidebarLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-75}
            onClick={toggle}
          >
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/rental">Rental Application</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
