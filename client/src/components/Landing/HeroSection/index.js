import React, { useState } from "react";

import Logo from "../../../svg/logo.svg";

import {
  HeroContainer,
  HeroBackground,
  HeroHeading,
  HeroLogo,
  HeroContent,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

import { ButtonScroll } from "../Button/ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBackground />
      <HeroContent>
        <HeroLogo src={Logo} />
        <HeroHeading>
          In Poiana Brasov la baza partiei din anul 1999.
        </HeroHeading>
        <HeroBtnWrapper>
          <ButtonScroll
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={false}
          >
            Descopera locatia {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonScroll>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
