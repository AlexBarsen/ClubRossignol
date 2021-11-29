import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      sticky="top"
      style={{ borderBottom: "2px solid black" }}
    >
      <Container className="d-flex justify-content-between">
        <div style={{ height: "4rem" }}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/SVG%2FLogo%2Flogo.svg?alt=media&token=05b2ed2b-1069-4890-abde-e9b36389ad8a"
            alt=""
            style={{ height: "100%" }}
          />
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#restaurant">Restaurant</Nav.Link>
            <Nav.Link href="#rental">Rental</Nav.Link>
            <Nav.Link href="#hotel">Hotel</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
