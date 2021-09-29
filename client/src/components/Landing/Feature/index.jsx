import React from "react";

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

  const { imageUrl, heading, description } = feature;
  return (
    <>
      <FeatureContainer>
        <FeatureImage src={imageUrl} alt="Photo" />
        <FeatureDetails>
          <FeatureName>{t(heading)}</FeatureName>
          <FeatureDescription>{t(description)}</FeatureDescription>
        </FeatureDetails>
      </FeatureContainer>
    </>
  );
};

export default Feature;
