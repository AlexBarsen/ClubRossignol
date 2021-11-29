import React, { useState } from "react";

import {
  restaurantSection,
  rentalSection,
  hotelSection,
  shopSection,
} from "../../components/Landing/InfoCard/sections";

import Footer from "../../components/Landing/Footer/Footer";
import Navigation from "../../components/Landing/Navigation/Navigation";
import HeroCarousel from "../../components/Landing/HeroCarousel/HeroCarousel";

import InfoCard from "../../components/Landing/InfoCard/InfoCard";
import Contact from "../../components/Landing/Contact/Contact";
import Features from "../../components/Landing/Features/Features";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <Navigation />
        <HeroCarousel />
        <Features />
        <InfoCard section={restaurantSection} imgStart={false} />
        <InfoCard section={rentalSection} imgStart={true} />
        <InfoCard section={hotelSection} imgStart={false} />
        <InfoCard section={shopSection} imgStart={true} />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
