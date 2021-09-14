import styled from "styled-components";
import image from "../../../images/view-big.jpg";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  height: 800px;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 650px;
  }
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
  background-position: center;
  background-size: cover;
  z-index: -1;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const HeroLogo = styled.img`
  width: 100%;
`;

export const HeroHeading = styled.h1`
  font-size: 4.8rem;
  color: black;
  text-align: center;
  padding: 3rem;
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
