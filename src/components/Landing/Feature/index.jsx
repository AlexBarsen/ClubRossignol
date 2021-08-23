import React from "react";

import {
  FeatureContainer,
  FeatureImage,
  FeatureDetails,
  FeatureName,
  FeatureDescription,
} from "./FeatureElements";

const Feature = ({ feature }) => {
  const { image, name, description } = feature;
  return (
    <>
      <FeatureContainer>
        <FeatureImage src={image} alt="Photo" />
        <FeatureDetails>
          <FeatureName>{name}</FeatureName>
          <FeatureDescription>{description}</FeatureDescription>
        </FeatureDetails>
      </FeatureContainer>
    </>
  );
};

export default Feature;
