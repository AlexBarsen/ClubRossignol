import React from "react";

import {
  restaurantSection,
  rentalSection,
  hotelSection,
  shopSection,
} from "../../components/landing/InfoCard/sections";

import Footer from "../../components/landing/Footer/Footer";
import Navigation from "../../components/landing/Navigation/Navigation";
import HeroCarousel from "../../components/landing/HeroCarousel/HeroCarousel";

import InfoCard from "../../components/landing/InfoCard/InfoCard";
import Contact from "../../components/landing/Contact/Contact";
import Features from "../../components/landing/Features/Features";

const HomePage = () => {
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
