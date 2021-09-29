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
  position: relative;
`;

export const LanguageContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  position: absolute;
  top: 5px;
  left: 0;

  @media screen and (max-width: 768px) {
    top: 0px;
  }

  @media screen and (max-width: 600px) {
    top: -5px;
  }

  @media screen and (max-width: 450px) {
    top: -10px;
  }
`;

export const NavLogo = styled(LinkR)`
  cursor: pointer;
  display: flex;
  align-items: center;

  margin-left: 7rem;
`;

export const NavLogoSvg = styled.img`
  height: 6rem;
  @media screen and (max-width: 960px) {
    height: 3rem;
  }

  @media screen and (max-width: 768px) {
    height: 5rem;
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

export const NavItem = styled.li``;

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
  border-radius: 1rem;
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
`;
