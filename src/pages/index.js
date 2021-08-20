import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import InfoSection from "../components/InfoSection";
import {
  restaurantSection,
  rentalSection,
  hotelSection,
  shopSection,
} from "../components/sections";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutSection />
      <InfoSection section={restaurantSection} imgStart={false} />
      <InfoSection section={rentalSection} imgStart={true} />
      <InfoSection section={hotelSection} imgStart={false} />
      <InfoSection section={shopSection} imgStart={true} />
    </>
  );
};

export default Home;
