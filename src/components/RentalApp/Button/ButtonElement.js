import styled from "styled-components";

export const Button = styled.button`
  border-radius: ${({ signIn }) => (signIn ? "0.5rem" : "5rem")};
  background: lightblue;
  white-space: nowrap;
  padding: ${({ signIn }) => (signIn ? "0.6rem" : "0.8rem 1.3rem")};

  width: ${({ signIn }) => (signIn ? "100%" : "auto")};
  font-size: ${({ signIn }) => (signIn ? "2rem" : "1.6rem")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3);
  transition: 0.2s ease-in-out;
  margin-bottom: 15px;

  &:hover {
    transform: scale(1.04);
  }

  &:active {
    transform: scale(1);
  }
`;
