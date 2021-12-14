import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="w-100 p-0"
      style={{ position: "absolute", top: "0", opacity: "0.5", zIndex: "2" }}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto mt-2 d-flex gap-4">
            <Nav.Link className="h4" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="h4" href="#hotel">
              Hotel
            </Nav.Link>
            <Nav.Link className="h4" href="#restaurant">
              Restaurant
            </Nav.Link>
            <Nav.Link className="h4" href="#rental">
              Rental
            </Nav.Link>
            <Nav.Link className="h4" href="#shop">
              Shop
            </Nav.Link>
            <Nav.Link className="h4" href="#link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
