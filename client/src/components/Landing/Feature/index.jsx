import React from "react";

import Pizza from "../svg/pizza.svg";

import {
  FeatureContainer,
  FeatureImage,
  FeatureDetails,
  FeatureName,
  FeatureDescription,
} from "./FeatureElements";

import { useTranslation } from "react-i18next";

const Feature = ({ feature }) => {
  const { t } = useTranslation();

  const { image, name, description } = feature;
  return (
    <>
      <FeatureContainer>
        <FeatureImage src={Pizza} alt="Photo" />
        <FeatureDetails>
          <FeatureName>{t(name)}</FeatureName>
          <FeatureDescription>{t(description)}</FeatureDescription>
        </FeatureDetails>
      </FeatureContainer>
    </>
  );
};

export default Feature;
