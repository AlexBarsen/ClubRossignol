import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  padding: 2rem;
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
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Paragraph = styled.p`
  color: black;
  font-size: 1.6rem;
  display: flex;
  margin: 1rem 0;

  /* justify-content: flex-end; */

  @media screen and (max-width: 900px) {
    font-size: 2.6rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 3rem;
  }
`;
