import styled from "styled-components";

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
`;

export const Label = styled.label`
  font-size: 2.2rem;
  color: ${({ sign }) => (sign ? "white" : "black")};
  margin-bottom: 0.5rem;

  @media screen and (max-width: 600px) {
    height: 5rem;
  }
`;

export const Input = styled.input`
  /* width: 25rem; */
  height: 3.5rem;
  font-size: 2rem;
  padding: 0 1rem;
  border: 0.1rem solid black;
  border-radius: 0.5rem;
  outline: none;

  @media screen and (max-width: 600px) {
    height: 5rem;
  }
`;
