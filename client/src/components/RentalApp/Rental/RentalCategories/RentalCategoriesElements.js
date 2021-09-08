import styled from "styled-components";
import { Link } from "react-router-dom";

export const RentalCategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #fa2742;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80rem;

  @media screen and (max-width: 900px) {
    width: 60rem;
  }

  @media screen and (max-width: 600px) {
    height: 9rem;
  }
`;

export const Category = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  font-weight: bold;

  /* &:not(:first-child) {
    margin-left: 20rem;
  } */

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.07);
  }

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const Title = styled.div`
  border-radius: 2rem;
  font-size: 2.6rem;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;
