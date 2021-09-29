import styled from "styled-components";

export const SignUpContainer = styled.div`
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

export const Form = styled.form``;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  &:last-child {
    justify-content: flex-end;
  }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TermsCheckbox = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

export const TermsSpan = styled.span`
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    margin-top: 1.4rem;
  }
`;

export const Input = styled.input`
  transform: scale(1.4);
  margin-left: 0.5rem;

  @media screen and (max-width: 768px) {
    transform: scale(1.2);
  }
`;

export const Label = styled.label`
  margin-left: 1rem;
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
  }
`;
