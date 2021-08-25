import styled from "styled-components";
import { Link } from "react-router-dom";

export const Category = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
  }
`;

export const Title = styled.h1``;

export const IconContainer = styled(Link)`
  /* height: 10px; */
`;

export const Icon = styled.img`
  height: 50px;
`;
