import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  height: 8rem;
  font-size: 2rem;
  top: 0;
  position: sticky;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    font-size: 1.8rem;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 8rem;
  z-index: 1;
`;

export const NavLogo = styled(LinkR)`
  cursor: pointer;
`;

export const NavLogoSvg = styled.img`
  height: 100%;
  padding: 1rem;

  @media screen and (max-width: 960px) {
    height: 90%;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 3.2rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #ffd540;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 1.5rem;
  background: #ffd540;
  white-space: nowrap;
  padding: 1rem 2.2rem;
  color: #010606;
  font-size: 1.6rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }

  @media screen and (max-width: 960px) {
    font-size: 1.4rem;
  }
`;
