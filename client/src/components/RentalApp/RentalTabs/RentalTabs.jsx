import React from "react";
import "./RentalTabs.scss";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const RentalTabs = () => {
  return (
    <Nav
      justify
      className="d-flex justify-content-center background-navy--light w-100"
      variant="tabs"
      defaultActiveKey="/home"
    >
      <Nav.Item className="tab-item">
        <LinkContainer to="/rental/category/ski">
          <Nav.Link className="tab-link">Ski</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item className="tab-item">
        <LinkContainer to="/rental/category/snowboard">
          <Nav.Link className="tab-link">Snowboard</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item className="tab-item">
        <LinkContainer to="/rental/category/bike">
          <Nav.Link className="tab-link">Bike</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
};

export default RentalTabs;
