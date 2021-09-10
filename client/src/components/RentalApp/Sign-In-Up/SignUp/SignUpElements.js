import styled from "styled-components";

export const SignUpContainer = styled.div`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
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

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
`;
