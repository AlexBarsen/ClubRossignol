import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

import DynamicModal from "../DynamicModal/DynamicModal";
import PasswordReset from "../Sign-In-Up/PasswordReset/PasswordReset";
import SignIn from "../Sign-In-Up/SignIn/SignIn";
import SignUp from "../Sign-In-Up/SignUp/SignUp";

import { selectCurrentUser } from "../../../redux/user/user.selectors";
import { signOutStart } from "../../../redux/user/user.actions";

const AccountDropdown = ({ currentUser, signOut }) => {
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
    <>
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

      <DynamicModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        modalTitle={modalTitle}
        modalSize={modalSize}
        renderComponent={() => wrappedComponent}
      />
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountDropdown);
