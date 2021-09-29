import React from "react";

import { FeaturesContainer, Features } from "./FeaturesSectionElements";

import Feature from "../Feature/index";
import FeaturesData from "./features";

const AboutSection = () => {
  return (
    <>
      <FeaturesContainer id="about">
        <Features>
          {FeaturesData.map((feature) => (
            <Feature key={feature.id} feature={feature} />
          ))}
        </Features>
      </FeaturesContainer>
    </>
  );
};

export default AboutSection;
