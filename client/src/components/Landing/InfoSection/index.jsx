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

import { Button } from "../Button/ButtonElement";

const InfoSection = ({ section, imgStart }) => {
  const {
    id,
    topLine,
    headline,
    description1,
    description2,
    buttonLabel,
    image,
    primary,
  } = section;
  return (
    <>
      <InfoContainer id={id} primary={primary}>
        <InfoWrapper primary={primary}>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headline}</Heading>
                <Subtitle>{description1}</Subtitle>
                <Subtitle>{description2}</Subtitle>
                <ButtonWrapper>
                  <Button to="/" primary={primary}>
                    {buttonLabel}
                  </Button>
                </ButtonWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImageWrapper primary={primary}>
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
