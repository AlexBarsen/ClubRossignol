import styled from "styled-components";
import { Link } from "react-router-dom";

export const Category = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 20rem;
  height: 25rem;
  margin: 1rem;
  background: yellowgreen;
`;

export const Title = styled.div`
  font-size: 2rem;
`;

export const Icon = styled.div`
  background: lightblue;
  height: 100%;
  margin: 1rem;
  width: 90%;
`;
