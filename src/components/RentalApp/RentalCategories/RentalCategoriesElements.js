import styled from "styled-components";
import { Link } from "react-router-dom";

export const Category = styled.div`
  display: flex;
  align-items: center;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.07);
  }

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const Title = styled(Link)`
  border-radius: 2rem;
  font-size: 2.6rem;
  padding: 1rem;

  color: black;
  text-decoration: none;
`;
