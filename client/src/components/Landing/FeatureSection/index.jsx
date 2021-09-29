import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutFeatures,
} from "./FeaturesSectionElements";

import Feature from "../Feature/index";
import FeaturesData from "./features";

const AboutSection = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          {/* <AboutHeading>Features</AboutHeading> */}
          <AboutFeatures>
            {FeaturesData.map((feature) => (
              <Feature key={feature.id} feature={feature} />
            ))}
          </AboutFeatures>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
