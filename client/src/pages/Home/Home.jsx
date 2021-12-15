import React from "react";

import Hero from "../../components/landing-new/Hero/Hero";
import Navigation from "../../components/landing-new/Navigation/Navigation";
import Footer from "../../components/landing-new/Footer/Footer";

import Section from "../../components/landing-new/Section/Section";

import {
  restaurant_section,
  rental_section,
  hotel_section,
  shop_section,
} from "../../components/landing-new/Section/data";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Section section={restaurant_section} />
      <Section section={rental_section} />
      <Section section={hotel_section} />
      <Section section={shop_section} />
      <Footer />
    </>
  );
};

export default HomePage;
