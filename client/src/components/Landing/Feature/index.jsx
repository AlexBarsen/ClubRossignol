import React from "react";
import { useTranslation } from "react-i18next";

import {
  FeatureContainer,
  FeatureImage,
  FeatureDetails,
  FeatureName,
  FeatureDescription,
} from "./FeatureElements";

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
