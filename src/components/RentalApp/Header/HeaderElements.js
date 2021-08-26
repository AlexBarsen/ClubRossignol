import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5.5rem;
  /* border-top-left-radius: 2rem;
  border-top-right-radius: 2rem; */
  padding-left: 25rem;
  background: #1b9ce5;
  border-bottom: 2px solid black; ;
`;

export const HeaderOptions = styled.div`
  display: flex;
  height: 100%;
  /* justify-content: center; */
  align-items: center;
`;

export const HeaderOption = styled(Link)`
  margin-right: 2rem;
  font-size: 2rem;
`;
