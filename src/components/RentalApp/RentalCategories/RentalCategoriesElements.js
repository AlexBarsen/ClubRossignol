import styled from "styled-components";
import { Link } from "react-router-dom";

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const Title = styled(Link)`
  font-size: 3rem;
  padding: 1rem;
  pointer: cursor;
  color: black;
  text-decoration: none;
`;
