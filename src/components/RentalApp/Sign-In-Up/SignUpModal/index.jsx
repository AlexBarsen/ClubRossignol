import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleUserSignInHidden } from "../../../../redux/user/user.actions";
import { toggleUserSignUpHidden } from "../../../../redux/user/user.actions";

import {
  selectUserSignInHidden,
  selectUserSignUpHidden,
} from "../../../../redux/user/user.selectors";

import {
  HeaderOption,
  SignUpModalContanier,
  ModalOverlay,
  ModalContent,
  CloseButtonContainer,
} from "./SignUpModalElements";

import { Button } from "../../Button/ButtonElement";

import SignUp from "../SignUp/index";

const SignUpModal = ({
  userSignUpHidden,
  userSignInHidden,
  toggleUserSignUpHidden,
  toggleUserSignInHidden,
}) => {
  // * toggle visible OR hidden Modal depeding on the state
  const toggleModal = () => {
    if (!userSignInHidden) toggleUserSignInHidden();
    toggleUserSignUpHidden();

    if (!userSignUpHidden) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <>
      <HeaderOption onClick={toggleModal}>Sign Up</HeaderOption>

      {/* render Modal depending on the state */}
      {!userSignUpHidden && (
        <SignUpModalContanier>
          <ModalOverlay></ModalOverlay>

          <ModalContent>
            <SignUp />

            <CloseButtonContainer>
              <Button closeModal onClick={toggleModal}>
                ❌
              </Button>
            </CloseButtonContainer>
          </ModalContent>
        </SignUpModalContanier>
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  userSignUpHidden: selectUserSignUpHidden,
  userSignInHidden: selectUserSignInHidden,
});

// * dispatch function to Redux store
const mapDispatchToProps = (dispatch) => ({
  toggleUserSignInHidden: () => dispatch(toggleUserSignInHidden()),
  toggleUserSignUpHidden: () => dispatch(toggleUserSignUpHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal);
