import styled from "styled-components";

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
`;

export const Label = styled.label`
  font-size: 2rem;
  text-align: left;
  color: black;
  font-weight: bold;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const Input = styled.input`
  height: 4rem;
  font-size: 2rem;
  padding: 0 1rem;
  border: 1px solid black;
  border-radius: 0.3rem;
  outline: none;

  &::-webkit-inner-spin-button {
    display: none;
  }
  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  @media screen and (max-width: 768px) {
    height: 5rem;
    font-size: 3rem;
  }
`;
