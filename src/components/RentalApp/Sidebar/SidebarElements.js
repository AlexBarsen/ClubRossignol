import styled from "styled-components";
import { Link } from "react-router-dom";

export const Category = styled.div`
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.div`
  font-size: 2rem;
`;

export const IconContainer = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  height: 20rem;
  width: 18rem;
`;

export const Icon = styled.img`
  width: 90%;
  border-radius: 2.5rem;
  background-image: linear-gradient(
    to right bottom,
    rgba(108, 218, 238, 0.3),
    rgba(108, 218, 238, 0.8)
  );

  box-shadow: 1rem 1rem 1.5rem rgba(114, 82, 82, 0.7);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.07);
  }
`;
