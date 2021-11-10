import React, { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import i18next from "i18next";
import { LinkContainer } from "react-router-bootstrap";
import DynamicModal from "../DynamicModal/DynamicModal";
import SignIn from "../Sign-In-Up/SignIn/SignIn";
import SignUp from "../Sign-In-Up/SignUp/SignUp";
import PasswordReset from "../Sign-In-Up/PasswordReset/PasswordReset";

import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../../redux/user/user.selectors";

import { selectCartHidden } from "../../../redux/cart/cart.selectors";

import OffCanvasCart from "../Cart-Checkout/OffCanvasCart/OffCanvasCart";

import { signOutStart } from "../../../redux/user/user.actions";

const Navigation = ({ currentUser, signOut }) => {
  const { t } = useTranslation();
  const [modalShow, setModalShow] = useState(false);
  const [modalSize, setModalSize] = useState(null);
  const [modalTitle, setModalTitle] = useState(null);
  const [wrappedComponent, setWrappedComponent] = useState(null);

  const renderModal = (component, size) => {
    setModalTitle(
      component.type.WrappedComponent.name === "SignIn"
        ? "Sign In"
        : component.type.WrappedComponent.name === "SignUp"
        ? "Sign Up"
        : "Password Reset"
    );
    setWrappedComponent(component);
    setModalSize(size);
    setModalShow(true);
  };

  return (
    <Navbar style={{ backgroundColor: "lightblue" }} expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav "
          className="d-flex justify-content-end"
        >
          <Nav>
            <Nav.Link>{t("back_to_website")}</Nav.Link>

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

            {currentUser ? (
              <DropdownButton
                size="sm"
                id="dropdown-basic-button"
                title={`Signed in as: ${currentUser.firstName} ${currentUser.lastName}`}
              >
                <LinkContainer to="/rental/dashboard">
                  <Dropdown.Item className="">Dashboard</Dropdown.Item>
                </LinkContainer>
                <Dropdown.Item className="" onClick={() => signOut()}>
                  Sign out
                </Dropdown.Item>
              </DropdownButton>
            ) : (
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item
                  className=""
                  onClick={() => renderModal(<SignIn />, "md")}
                >
                  Sign In
                </NavDropdown.Item>
                <NavDropdown.Item
                  className=""
                  onClick={() => renderModal(<SignUp />, "lg")}
                >
                  Sign Up
                </NavDropdown.Item>
                <NavDropdown.Item
                  className=""
                  onClick={() => renderModal(<PasswordReset />, "md")}
                >
                  Forgot password?
                </NavDropdown.Item>
              </NavDropdown>
            )}
            <NavDropdown title="Select Language" id="basic-nav-dropdown">
              <NavDropdown.Item
                className=""
                onClick={() => i18next.changeLanguage("ro")}
              >
                Romanian <span className="">🇷🇴</span>
              </NavDropdown.Item>
              <NavDropdown.Item
                className=""
                onClick={() => i18next.changeLanguage("en")}
              >
                English <span className="">🇬🇧</span>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <OffCanvasCart key={1} placement="end" />

      <DynamicModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        modalTitle={modalTitle}
        modalSize={modalSize}
        renderComponent={() => wrappedComponent}
      />
    </Navbar>
  );
};

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

// * dispatch function to the Redux store
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
