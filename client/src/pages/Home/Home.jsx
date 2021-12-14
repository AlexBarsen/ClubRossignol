import React, { useEffect } from "react";

import Hero from "../../components/landing-new/Hero/Hero";
import Navigation from "../../components/landing-new/Navigation/Navigation";
import Footer from "../../components/landing/Footer/Footer";

import Section from "../../components/landing-new/Section/Section";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import {
  restaurant_section,
  rental_section,
  hotel_section,
  shop_section,
} from "../../components/landing-new/Section/data";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Navigation />
      <Hero />
      <div data-aos="fade-up">
        <Section section={restaurant_section} />
      </div>
      <div data-aos="fade-up">
        <Section section={rental_section} />
      </div>
      <div data-aos="fade-up">
        <Section section={hotel_section} />
      </div>
      <div data-aos="fade-up">
        <Section section={shop_section} />
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
