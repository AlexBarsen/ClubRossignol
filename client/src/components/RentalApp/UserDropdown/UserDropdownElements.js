import styled from "styled-components";

import { Link } from "react-router-dom";

export const User = styled.div`
  display: flex;
`;

export const UserDropdownContainer = styled.div`
  position: relative;
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

export const Option = styled.li``;

export const OptionLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
