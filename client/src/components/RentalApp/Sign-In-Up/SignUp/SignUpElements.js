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
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* margin-top: 2rem; */
`;

export const TermsCheckbox = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  transform: scale(1.4);
`;

export const Label = styled.label`
  margin-left: 1rem;
  font-size: 1.6rem;
`;

export const TermsSpan = styled.span`
  font-weight: bold;
`;
