import React from "react";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const RentalTabs = () => {
  return (
    <Nav
      justify
      className="d-flex justify-content-center background-primary--2 mb-4"
      variant="tabs"
      defaultActiveKey="/home"
    >
      <Nav.Item>
        <LinkContainer to="/rental/category/ski">
          <Nav.Link>Ski</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/rental/category/snowboard">
          <Nav.Link>Snowboard</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/rental/category/bike">
          <Nav.Link>Bike</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
};

export default RentalTabs;
