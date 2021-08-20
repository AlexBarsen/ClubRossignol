import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  height: 826px;
  padding: 15rem 0;
  margin-top: -8.25rem;
  background: rgba(0, 0, 0, 0.2);
  background-image: ${({ primary }) =>
    primary
      ? `linear-gradient(
    to right bottom,
    rgba(77, 168, 218, 1),
    rgba(0, 124, 199, 0.2)
  );`
      : `linear-gradient(
    to left bottom,
    rgba(244, 217, 73, 1),
    rgba(244, 217, 73, 0.2)
  );`};

  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
  color: #fff;

  @media screen and (max-width: 1100px) {
    margin-top: -9.4rem;
  }

  @media screen and (max-width: 960px) {
    margin-top: -10.4rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: -11.7rem;
    height: 750px;
  }

  @media screen and (max-width: 600px) {
    margin-top: -11rem;
    height: 600px;
  }

  @media screen and (max-width: 480px) {
    height: 520px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  align-items: center;
  min-height: 530px;
  width: 90%;
  margin: auto;

  background: #fff;
  background-image: ${({ primary }) =>
    primary
      ? `linear-gradient( 
        to right bottom ,
        rgba(244, 217, 73, .2),
        rgba(244,217,73, .8));`
      : `linear-gradient(
    to left bottom,
    rgba(77, 168, 218, .2),
    rgba(0, 124, 199, 0.7)
  );`};

  border-radius: 2rem;

  @media screen and (max-width: 1300px) {
    min-height: 500px;
  }

  @media screen and (max-width: 1100px) {
    min-height: 400px;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
    padding: 4rem;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;

  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const Column1 = styled.div`
  /* margin-bottom: 1.5rem; */
  padding-left: 2rem;

  grid-area: col1;
  @media screen and (max-width: 768px) {
    margin-top: 2.5rem;
  }
`;

export const Column2 = styled.div`
  /* margin-bottom: 1.5rem; */
  padding: 0 3rem;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 54rem;
`;

export const TopLine = styled.p`
  color: black;
  font-size: 2rem;
  line-height: 1.6rem;
  margin-bottom: 1.6rem;

  @media screen and (max-width: 1100px) {
    font-size: 1.8rem;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 2.4rem;
  color: black;
  font-size: 3rem;

  @media screen and (max-width: 1100px) {
    font-size: 2.2rem;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 3.5rem;
  font-size: 2rem;
  color: black;

  @media screen and (max-width: 1100px) {
    font-size: 1.8rem;
  }
`;

export const ButtonWrapper = styled.div`
  width: 20rem;

  @media screen and (max-width: 768px) {
    margin: auto;
  }
`;

export const ImageWrapper = styled.div`
  border-radius: 2rem;

  max-width: 680px;
  box-shadow: 1rem 1rem 1.5rem rgba(114, 82, 82, 0.7);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    max-width: 55rem;
  }
`;

export const InfoImage = styled.img`
  vertical-align: middle;
  border-radius: inherit;
  width: 100%;
`;
