import React, { useState } from "react";
import { Navbar } from "../../components/Landing/Navbar";
import Sidebar from "../../components/Landing/Sidebar";
import HeroSection from "../../components/Landing/HeroSection";
import AboutSection from "../../components/Landing/AboutSection";
import InfoSection from "../../components/Landing/InfoSection";
import {
  restaurantSection,
  rentalSection,
  hotelSection,
  shopSection,
} from "../../components/sections";

import Footer from "../../components/RentalApp/Footer/index";

import { HomeContainer } from "./HomeElements";

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
        <AboutSection />
        <InfoSection section={restaurantSection} imgStart={false} />
        <InfoSection section={rentalSection} imgStart={true} />
        <InfoSection section={hotelSection} imgStart={false} />
        <InfoSection section={shopSection} imgStart={true} />
        <Footer />
      </HomeContainer>
    </>
  );
};

export default Home;
