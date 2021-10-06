import styled from "styled-components";

export const ContactSectionContainer = styled.div`
  margin-bottom: 8rem; ;
`;

export const ContactSectionContent = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  background: #f6f6f6;
  border-radius: 1rem;
  margin: auto;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Heading = styled.h1`
  font-size: 2.6rem;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 3.2rem;
  }
`;

export const Form = styled.form`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const Label = styled.label`
  font-size: 2rem;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const Input = styled.input`
  height: 3rem;
  width: 30rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  outline: none;
  font-size: 1.8rem;
  padding: 0 0.7rem;
`;

export const TextArea = styled.textarea`
  width: 50rem;
  height: 30rem;
  border-radius: 1rem;
  border: 1px solid black;
  outline: none;
  padding: 1rem;
  font-size: 1.8rem;
`;

export const ButtonContainer = styled.div``;

export const GoogleMapsWrapper = styled.div`
  padding: 2rem;
`;

export const Adress = styled.div`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

export const Contact = styled.div`
  margin-top: 1rem;
  font-size: 2rem;
`;

export const TextSpan = styled.span`
  font-weight: bold;
`;
