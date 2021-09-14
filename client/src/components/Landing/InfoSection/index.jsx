import React from "react";
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

import { ButtonLink } from "../Button/ButtonElement";

const InfoSection = ({ section, imgStart }) => {
  const {
    id,
    topLine,
    headline,
    description1,
    description2,
    buttonLabel,
    image,
    route,
    link,
  } = section;

  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headline}</Heading>
                <Subtitle>{description1}</Subtitle>
                <Subtitle>{description2}</Subtitle>
                <ButtonWrapper>
                  {route ? (
                    <ButtonLink to={`/${route}`}>{buttonLabel}</ButtonLink>
                  ) : (
                    <ButtonLink to={{ pathname: link }} target="_blank">
                      {buttonLabel}
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
