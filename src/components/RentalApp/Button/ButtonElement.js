import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  background: lightblue;
  white-space: nowrap;
  padding: 0.8rem 1.3rem;
  font-size: 2rem 1rem;
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
    transform: scale(1.04);
  }

  &:active {
    transform: scale(1);
  }
`;