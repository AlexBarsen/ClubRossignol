import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

const CategoryDropdown = () => {
  return (
    <NavDropdown title="Rent" id="basic-nav-dropdown">
      <LinkContainer to="/rental">
        <NavDropdown.Item className="">All Rentals</NavDropdown.Item>
      </LinkContainer>
      <NavDropdown.Divider />
      <LinkContainer to="/rental/category/ski">
        <NavDropdown.Item className="">Ski</NavDropdown.Item>
      </LinkContainer>
      <LinkContainer to="/rental/category/snowboard">
        <NavDropdown.Item className="">Snowboard</NavDropdown.Item>
      </LinkContainer>
      <LinkContainer to="/rental/category/bike">
        <NavDropdown.Item className="">Bike</NavDropdown.Item>
      </LinkContainer>
    </NavDropdown>
  );
};

export default CategoryDropdown;
