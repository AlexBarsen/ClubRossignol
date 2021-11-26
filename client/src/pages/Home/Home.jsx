import React, { useState } from "react";

import {
  restaurantSection,
  rentalSection,
  hotelSection,
  shopSection,
} from "../../components/Landing/InfoSection/sections";

import Footer from "../../components/Landing/Footer/index";
import { Navbar } from "../../components/Landing/Navbar";

import HeroSection from "../../components/Landing/HeroSection";
import FeaturesSection from "../../components/Landing/FeatureSection";
import InfoSection from "../../components/Landing/InfoSection";
import ContactSection from "../../components/Landing/ContactSection";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <Navbar toggle={toggle} />
        <HeroSection />
        <FeaturesSection />
        <InfoSection section={restaurantSection} imgStart={false} />
        <InfoSection section={rentalSection} imgStart={true} />
        <InfoSection section={hotelSection} imgStart={false} />
        <InfoSection section={shopSection} imgStart={true} />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
