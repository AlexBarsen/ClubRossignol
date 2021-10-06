import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const ButtonScroll = styled(LinkS)`
  border-radius: 1rem;
  background: #ffd540;
  white-space: nowrap;
  padding: 0.8rem 1.3rem;
  font-size: 2.6rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3);
  transition: 0.2s ease-in-out;
  will-change: transform;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;

export const ButtonLink = styled(LinkR)`
  border-radius: 1.5rem;
  background: #ffd540;
  white-space: nowrap;
  padding: 0.8rem 1.3rem;
  font-size: 2rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3);
  transition: 0.2s ease-in-out;
  text-decoration: none;
  will-change: transform;

  &:hover {
    transform: scale(1.04);
  }

  &:active {
    transform: scale(1);
  }
`;

export const Button = styled.button`
  border-radius: 1.5rem;
  background: #ffd540;
  white-space: nowrap;
  padding: 1rem 1.5rem;
  font-size: 2rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3);
  transition: 0.2s ease-in-out;
  text-decoration: none;
  will-change: transform;

  &:hover {
    transform: scale(1.04);
  }

  &:active {
    transform: scale(1);
  }
`;
