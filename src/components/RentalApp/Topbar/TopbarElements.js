import styled from "styled-components";

export const Category = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    height: 30px;
    /* display: flex; */
  }
`;

export const Title = styled.h1``;

export const IconContainer = styled.div`
  height: 10px;
`;

export const Icon = styled.img`
  height: 40px;
`;
