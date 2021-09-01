import styled from "styled-components";
import image from "../../../images/view-big.jpg";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  height: 826px;
  z-index: 1;
`;

export const HeroBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
      to right bottom,
      rgba(77, 168, 218, 0.8),
      rgba(0, 124, 199, 0.5)
    ),
    url(${image});
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  background-position: center;
  background-size: cover;
  /* object-fit: contain; */
  z-index: -1;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 40vh;
`;

export const HeroLogo = styled.img`
  width: 100%;
  padding: 0 5rem;
`;

export const HeroHeading = styled.h1`
  font-size: 4.8rem;
  color: black;
  text-align: center;
  padding: 3rem;

  @media screen and (max-width: 960px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 3.2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2.4rem;
  }
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  font-size: 2rem;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  font-size: 2rem;
`;
