import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navigation.scss";

import Languages from "../../utils/Languages/Languages";

const Navigation = () => {
  return (
    <Navbar expand="md" className="navigation-bar">
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
          <Languages landing={true} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
