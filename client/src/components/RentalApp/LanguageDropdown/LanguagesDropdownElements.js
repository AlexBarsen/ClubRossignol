import styled from "styled-components";

export const LanguagesListContainer = styled.div``;

export const LanguagesList = styled.ul`
  list-style: none;
  position: absolute;
  background: #e8eae3;
  color: black;
  border: 2px solid black;
  padding: 0.5rem 1rem;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 3.4rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 4.6rem;
  }
`;

export const Flag = styled.li`
  @media screen and (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;
