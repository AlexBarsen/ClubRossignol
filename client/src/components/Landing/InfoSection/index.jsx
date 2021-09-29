import React from "react";
import { useTranslation } from "react-i18next";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ButtonWrapper,
  Column2,
  ImageWrapper,
  InfoImage,
} from "./InfoElements";

import RestaurantModal from "../RestaurantModal/index";
import { ButtonLink } from "../Button/ButtonElement";

const InfoSection = ({ section, imgStart }) => {
  const { t } = useTranslation();

  const {
    id,
    topLine,
    headline,
    paragraph1,
    paragraph2,
    buttonLabel,
    image,
    route = null,
    modal = false,
    link = null,
  } = section;

  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{t(topLine)}</TopLine>
                <Heading>{t(headline)}</Heading>
                <Subtitle>{t(paragraph1)}</Subtitle>
                <Subtitle>{t(paragraph2)}</Subtitle>
                <ButtonWrapper>
                  {route ? (
                    <ButtonLink to={`/${route}`}>{t(buttonLabel)}</ButtonLink>
                  ) : modal ? (
                    <RestaurantModal />
                  ) : (
                    <ButtonLink to={{ pathname: link }} target="_blank">
                      {t(buttonLabel)}
                    </ButtonLink>
                  )}
                </ButtonWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImageWrapper>
                <InfoImage src={image} />
              </ImageWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
