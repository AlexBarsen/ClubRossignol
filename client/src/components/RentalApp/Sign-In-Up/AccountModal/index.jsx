import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectAcountModalHidden } from "../../../../redux/user/user.selectors";
import { toggleAcountModalHidden } from "../../../../redux/user/user.actions";

import {
  HeaderOption,
  SignInModalContanier,
  ModalOverlay,
  ModalContent,
  CloseButtonContainer,
} from "./AccountModalElements";

import { Button } from "../../Button/ButtonElement";

import SignIn from "../SignIn/index";
import SignUp from "../SignUp/index";
import PasswordReset from "../PasswordReset/index";

const AccountModal = ({ acountModalHidden, toggleAcountModalHidden }) => {
  const [state, setState] = useState(null);

  const handleDisplay = (display) => {
    setState(display);
  };

  // * toggle visible OR hidden Modal depeding on the state
  const toggleModal = (display) => {
    toggleAcountModalHidden();

    setState(display);

    if (!acountModalHidden) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <>
      <HeaderOption onClick={() => toggleModal("signIn")}>Sign In</HeaderOption>

      <HeaderOption onClick={() => toggleModal("signUp")}>Sign Up</HeaderOption>

      {/* render Modal depending on the state */}
      {!acountModalHidden && (
        <SignInModalContanier>
          <ModalOverlay></ModalOverlay>

          <ModalContent>
            {state === "signIn" ? (
              <SignIn handleDisplay={handleDisplay} />
            ) : state === "signUp" ? (
              <SignUp handleDisplay={handleDisplay} />
            ) : (
              <PasswordReset handleDisplay={handleDisplay} />
            )}
            <CloseButtonContainer>
              <Button buttonType="close" onClick={toggleModal}>
                ❌
              </Button>
            </CloseButtonContainer>
          </ModalContent>
        </SignInModalContanier>
      )}
    </>
  );
};

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  acountModalHidden: selectAcountModalHidden,
});

// * dispatch function to Redux store
const mapDispatchToProps = (dispatch) => ({
  toggleAcountModalHidden: () => dispatch(toggleAcountModalHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountModal);
