import styled from "styled-components";

export const AboutContainer = styled.div`
  margin-top: -9.5rem;
  padding: 10rem 0;
  height: 826px;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  background: rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(
    to left bottom,
    rgba(244, 217, 73, 1),
    rgba(244, 217, 73, 0.6)
  );
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1100px) {
    margin-top: -9.5rem;
  }

  @media screen and (max-width: 960px) {
    margin-top: -10.5rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: -13rem;
    height: 750px;
  }

  @media screen and (max-width: 600px) {
    margin-top: -15rem;
    height: 600px;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
