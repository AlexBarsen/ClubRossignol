import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) =>
    primary ? "rgb(77, 168, 218)" : "rgb(244, 217, 73)"};
  white-space: nowrap;
  padding: 1rem 1.5rem;
  font-size: 2.4rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3);
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.04);
  }

  &:active {
    transform: scale(1);
  }
`;
