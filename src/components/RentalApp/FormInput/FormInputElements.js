import styled from "styled-components";

export const Group = styled.div`
  margin-top: 1.5rem;
  padding: 0.5rem 0;
  position: relative;
`;

export const Input = styled.input`
  width: 35rem;
  height: 3rem;
  font-size: 2rem;
  padding: 0 1rem;
  border: 0.1rem solid black;
  border-radius: 0.3rem;
  outline: none;

  &:focus,
  &:not(:focus):valid {
    top: -2.2rem;
    bottom: 0;
    left: 0;
    font-size: 1.6rem;
    opacity: 1;
    color: #404040;
  }
`;

export const Label = styled.label`
  position: absolute;
  font-size: 1.6rem;
  color: #cccccc;
  pointer-events: none;
  top: 0.9rem;
  left: 1.2rem;
  transition: all 0.35s ease;
`;
