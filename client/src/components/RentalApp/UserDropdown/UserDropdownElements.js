import styled from "styled-components";

export const User = styled.div`
  display: flex;
  cursor: pointer;
`;

export const UserDropdownContainer = styled.div`
  position: relative;
  z-index: 5;
`;

export const OptionsList = styled.ul`
  width: 100%;
  position: absolute;
  list-style: none;
  color: black;
  background: #e8eae3;
  border: 2px solid black;
  font-size: 2rem;
  padding: 0.5rem 1rem;
`;

export const Option = styled.li`
  cursor: pointer;
`;
