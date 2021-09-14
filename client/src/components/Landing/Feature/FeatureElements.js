import styled from "styled-components";

export const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0.5rem 0.5rem 1rem rgba(114, 82, 82, 1);
  border-radius: 1rem;
  border: 1px solid black;
  height: 26rem;
  width: 30rem;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-1rem) scale(1.05);
  }
`;

export const FeatureImage = styled.img`
  width: 100%;
  height: 50%;
  background-size: contain;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
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
