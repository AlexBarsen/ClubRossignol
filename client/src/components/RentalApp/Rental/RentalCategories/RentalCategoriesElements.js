import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

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
    height: 8rem;
  }
`;

export const Category = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  color: black;
  transition: all 0.2s ease-in-out;
  will-change: transform;

  &:hover {
    transform: scale(1.07);
  }
`;

export const CategoryTitle = styled.div`
  font-size: 2.6rem;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const ArrowDown = styled(FaArrowDown)`
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
