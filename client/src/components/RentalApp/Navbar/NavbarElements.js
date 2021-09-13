import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  height: 6rem;
  background: #373833;
  border-bottom: 2px solid black;
  width: 100%;

  @media screen and (max-width: 600px) {
    height: 10rem;
  }

  @media screen and (max-width: 450px) {
    height: 12rem;
  }
`;

export const User = styled.div``;

export const HeaderOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const HeaderOptionLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 2rem;
  font-size: 2rem;

  &:first-child {
    padding: 0 2rem;
    margin-right: auto;
  }

  @media screen and (max-width: 768px) {
    &:not(:first-child) {
      display: none;
    }
  }
`;

export const HeaderOption = styled.div`
  color: white;
  text-decoration: none;
  margin-right: 2rem;
  font-size: 2rem;

  &:first-child {
    padding: 0 2rem;
    margin-right: auto;
  }

  @media all and (max-width: 768px) {
    &:not(:first-child) {
      display: none;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media all and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -10px;
    right: -20px;
    transform: translate(-100%, 60%);
    font-size: 3.2rem;
    cursor: pointer;
    color: #fff;
  }

  @media all and (max-width: 600px) {
    top: 2px;
  }

  @media all and (max-width: 500px) {
    top: -2px;
  }

  @media all and (max-width: 450px) {
    top: 0px;
  }

  @media all and (max-width: 400px) {
    top: -10px;
  }
`;

export const LanguageList = styled.ul`
  list-style: none;
`;

export const Flag = styled.li`
  color: #fff;
  font-size: 2rem;
  padding: 1rem;
  cursor: pointer;
`;

// export const Wrapper = styled.div`
//   display: flex;
//   justify-content: flex-start;
// `;
