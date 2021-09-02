import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  height: 6rem;
  background: #373833;
  border-bottom: 2px solid black;

  @media screen and (max-width: 600px) {
    height: 10rem;
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

  @media screen and (max-width: 768px) {
    &:not(:first-child) {
      display: none;
    }
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

export const LanguageList = styled.ul`
  list-style: none;
`;

export const Flag = styled.li`
  color: #fff;
  font-size: 2rem;
  padding: 1rem;
  cursor: pointer;
`;
