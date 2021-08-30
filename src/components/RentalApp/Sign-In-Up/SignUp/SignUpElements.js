import styled from "styled-components";

export const SignUpContainer = styled.div`
  /* background: #fa2742;
  border: 3px solid black;
  padding: 5rem; */
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    /* margin-top: 4rem;
    margin-bottom: 4rem; */
  }
`;

export const Heading = styled.h1`
  color: black;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;

export const HeadingSecondary = styled.h2`
  color: black;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 3.2rem;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
`;
