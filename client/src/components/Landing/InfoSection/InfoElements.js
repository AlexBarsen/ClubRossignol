import styled from "styled-components";

export const InfoContainer = styled.div`
  margin-bottom: 5rem;
`;

export const InfoWrapper = styled.div`
  display: grid;
  align-items: center;
  width: 80%;
  margin: auto;
  padding: 3rem 0rem;
  background: #f6f6f6;
  border-radius: 1rem;
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
  padding-left: 2rem;
  grid-area: col1;
`;

export const Column2 = styled.div`
  padding: 0 3rem;
  margin-bottom: 3rem;
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
`;

export const Heading = styled.h1`
  margin-bottom: 2.4rem;
  color: black;
  font-size: 3rem;
`;

export const Subtitle = styled.p`
  margin-bottom: 3.4rem;
  font-size: 2rem;
  color: black;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const ButtonWrapper = styled.div`
  width: 20rem;
`;

export const ImageWrapper = styled.div`
  border-radius: 0.5rem;

  max-width: 600px;
  box-shadow: 0.7rem 0.7rem 1rem rgba(114, 82, 82, 0.5);
`;

export const InfoImage = styled.img`
  vertical-align: middle;
  border-radius: inherit;
  width: 100%;
`;
