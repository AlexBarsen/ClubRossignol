import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import Feature from "../Feature/Feature";

import { FEATURES_DATA as features } from "./Features";

const AboutUs = () => {
  return (
    <div className="py-5">
      {/* <div className="d-flex justify-content-center">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/SVG%2FLogo%2Flogo_big_white.svg?alt=media&token=f30ead73-fbc0-488a-988d-a59b8d38c5e1"
          style={{ width: "40rem" }}
        />
      </div> */}
      <Container className="d-flex justify-content-between align-items-center mt-5 gap-5">
        <div className="d-flex justify-content-center">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/SVG%2FLogo%2Flogo_big_white.svg?alt=media&token=f30ead73-fbc0-488a-988d-a59b8d38c5e1"
            style={{ width: "25rem" }}
          />
        </div>
        {/* <div className="h3 text-center" style={{ width: "40%" }}>
          Despre Noi
        </div> */}
        <div className="h5" style={{ width: "60%", lineHeight: "1.6" }}>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            vero repellendus eveniet delectus, eos velit sequi quidem amet
            officia, mollitia molestiae provident porro laborum aperiam vel
            dicta error nihil qui.
          </span>
          <br />
          <br />
          <span style={{ lineHeight: "2" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            nesciunt, labore doloremque praesentium maxime quae quia at,
            repellat aperiam doloribus commodi a quod facilis adipisci eos dolor
            dolore in quaerat.
          </span>
        </div>
      </Container>

      <Container className="mt-5 d-flex gap-5 justify-content-center">
        {features.map((feature, index) => (
          <Feature feature={feature} key={index} />
        ))}
      </Container>
    </div>
  );
};

export default AboutUs;
