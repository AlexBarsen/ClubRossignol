import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";

import DynamicModal from "../DynamicModal/DynamicModal";
import PasswordReset from "../Sign-In-Up/PasswordReset/PasswordReset";
import SignIn from "../Sign-In-Up/SignIn/SignIn";
import SignUp from "../Sign-In-Up/SignUp/SignUp";

import {
  selectAcountModalHidden,
  selectCurrentUser,
} from "../../../redux/user/user.selectors";
import {
  signOutStart,
  toggleAcountModalHidden,
} from "../../../redux/user/user.actions";

const AccountLinks = ({
  currentUser,
  accountModalHidden,
  toggleAccountModal,
  signOut,
}) => {
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
    toggleAccountModal();
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
            <Dropdown.Item>Dashboard</Dropdown.Item>
          </LinkContainer>
          <Dropdown.Item onClick={() => signOut()}>Sign out</Dropdown.Item>
        </DropdownButton>
      ) : (
        <>
          <Nav.Link
            className="me-3 text-navy--dark"
            onClick={() => renderModal(<SignIn />, "md")}
          >
            Sign In
          </Nav.Link>
          <Nav.Link
            className="me-3 text-navy--dark"
            onClick={() => renderModal(<SignUp />, "lg")}
          >
            Sign Up
          </Nav.Link>
          <Nav.Link
            className="me-3 text-navy--dark"
            onClick={() => renderModal(<PasswordReset />, "md")}
          >
            Forgot password?
          </Nav.Link>
        </>
      )}

      <DynamicModal
        show={!accountModalHidden}
        onHide={() => toggleAccountModal()}
        title={modalTitle}
        size={modalSize}
        render={() => wrappedComponent}
      />
    </>
  );
};

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  accountModalHidden: selectAcountModalHidden,
});

// * dispatch function to the Redux store
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStart()),
  toggleAccountModal: () => dispatch(toggleAcountModalHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountLinks);
