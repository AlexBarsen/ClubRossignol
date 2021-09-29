import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 45rem;
`;

export const Heading = styled.h1`
  margin-bottom: 2rem;
  color: black;

  @media screen and (max-width: 900px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 3.2rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 1.4rem;
`;

export const SignResetWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SignUpWrapper = styled.div``;

export const Paragraph = styled.p`
  color: black;
  font-size: 1.6rem;
  display: flex;
  margin-top: 1.6rem;

  @media screen and (max-width: 900px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 2.4rem;
  }
`;
