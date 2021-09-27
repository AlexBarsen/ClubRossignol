import React, { useState } from "react";

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

import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBackground />
      <HeroContent>
        <HeroLogo src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/SVG%2FLogo%2Flogo.svg?alt=media&token=05b2ed2b-1069-4890-abde-e9b36389ad8a" />
        <HeroHeading>{t("hero_text")}</HeroHeading>
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
