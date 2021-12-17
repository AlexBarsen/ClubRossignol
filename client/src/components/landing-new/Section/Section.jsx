import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Section.scss";
import { Carousel, Container } from "react-bootstrap";
import Button from "@mui/material/Button";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Section = ({ section }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const { t } = useTranslation();
  const { id, imgStart, headline, text, images, buttonText, link } = section;

  return (
    <Container
      data-aos="fade-up"
      className={
        imgStart
          ? "d-flex  align-items-center gap-5 my-0 section-container"
          : "d-flex flex-row-reverse justify-content-center align-items-center gap-5 my-0 section-container"
      }
      id={id}
    >
      <div>
        <p className="h3 text-center font-weight-bold">{t(headline)}</p>
        <p className="mt-5 h6 " style={{ lineHeight: "2.4" }}>
          {text}
        </p>

        <div
          className={
            imgStart
              ? "d-flex justify-content-start"
              : "d-flex justify-content-end"
          }
        >
          <div>
            <Button
              href={link}
              variant="contained"
              className="custom-button--blue"
            >
              {t(buttonText)}
            </Button>
          </div>
        </div>
      </div>

      <div>
        <Carousel
          className="shadow carousel carousel-container"
          interval={null}
          fade={true}
        >
          {images.map((image, index) => (
            <Carousel.Item>
              <img
                className="d-block w-100 carousel carousel-image"
                src={image}
                alt={"Slide " + index}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default Section;
