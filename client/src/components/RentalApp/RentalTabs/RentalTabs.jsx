import React from "react";
import "./RentalTabs.scss";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const RentalTabs = () => {
  return (
    <Nav
      justify
      className="d-flex justify-content-center background-navy--light"
      variant="tabs"
      defaultActiveKey="/home"
    >
      <Nav.Item style={{ borderRight: "1px solid #8590aa" }}>
        <LinkContainer to="/rental/category/ski">
          <Nav.Link className="category-title">Ski</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item style={{ borderRight: "1px solid #8590aa" }}>
        <LinkContainer to="/rental/category/snowboard">
          <Nav.Link className="category-title">Snowboard</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/rental/category/bike">
          <Nav.Link className="category-title">Bike</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
};

export default RentalTabs;
