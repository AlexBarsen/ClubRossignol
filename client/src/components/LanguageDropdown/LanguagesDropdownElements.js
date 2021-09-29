import styled from "styled-components";

export const LanguagesListContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 15px;
  left: 30px;
`;

export const IconContainer = styled.div`
  position: relative;
`;

export const LanguagesList = styled.ul`
  list-style: none;
  position: absolute;
  left: -50%;
  background: #fff;
  color: black;
  border: 2px solid black;
  padding: 0.3rem;

  @media screen and (max-width: 768px) {
    left: -50%;
    width: 10rem;
  }
`;

export const Flag = styled.li``;
