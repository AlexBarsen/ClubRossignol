import styled from "styled-components";

export const Button = styled.button`
  /* border-radius: ${({ signIn }) => (signIn ? "0.5rem" : "5rem")}; */
  border-radius: 0.3rem;
  background: lightgray;
  white-space: nowrap;
  padding: ${({ signIn }) => (signIn ? "0.6rem" : "0.8rem 1.3rem")};

  width: ${({ signIn }) => (signIn ? "100%" : "auto")};
  font-size: ${({ signIn }) => (signIn ? "2rem" : "2rem")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3);
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 4.4rem;
  }
`;
