import styled from "styled-components";

export const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1rem 0.7rem 0.7rem rgba(114, 82, 82, 0.5);
  border: 1px solid black;
  border-radius: 0.5rem;
  height: 30rem;
  width: 30rem;
  transition: all 0.3s;
  background: #f6f6f6;
  will-change: transform;

  &:hover {
    transform: translateY(-1rem) scale(1.05);
  }

  @media screen and (max-width: 768px) {
    width: 28rem;

    &:hover {
      transform: none;
    }
  }
`;

export const FeatureImage = styled.img`
  height: 15rem;
  background-size: contain;
  border-bottom: 2px solid black;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;

export const FeatureDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const FeatureName = styled.h1`
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
`;

export const FeatureDescription = styled.div`
  font-size: 1.6rem;
  text-align: center;
  padding: 0 0.3rem;
`;
