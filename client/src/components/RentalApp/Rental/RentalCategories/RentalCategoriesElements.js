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

  @media screen and (max-width: 768px) {
    width: 60rem;
  }

  @media screen and (max-width: 600px) {
    height: 9rem;
  }
`;

export const Category = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  color: black;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.07);
  }
`;

export const CategoryTitle = styled.div`
  border-radius: 2rem;
  font-size: 2.6rem;
  padding: 1rem;
`;
