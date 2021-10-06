import React, { useState } from "react";

import { HomeContainer } from "./HomeElements";

import {
  restaurantSection,
  rentalSection,
  hotelSection,
  shopSection,
} from "../../components/Landing/InfoSection/sections";

import Footer from "../../components/Landing/Footer/index";
import { Navbar } from "../../components/Landing/Navbar";
import Sidebar from "../../components/Landing/Sidebar";
import HeroSection from "../../components/Landing/HeroSection";
import FeaturesSection from "../../components/Landing/FeatureSection";
import InfoSection from "../../components/Landing/InfoSection";
import ContactSection from "../../components/Landing/ContactSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HomeContainer>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <FeaturesSection />
        <InfoSection section={restaurantSection} imgStart={false} />
        <InfoSection section={rentalSection} imgStart={true} />
        <InfoSection section={hotelSection} imgStart={false} />
        <InfoSection section={shopSection} imgStart={true} />
        <ContactSection />
        <Footer />
      </HomeContainer>
    </>
  );
};

export default Home;
