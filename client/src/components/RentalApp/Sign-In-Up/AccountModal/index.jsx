import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserSignInHidden } from "../../../../redux/user/user.selectors";
import { toggleUserSignInHidden } from "../../../../redux/user/user.actions";

import {
  HeaderOption,
  SignInModalContanier,
  ModalOverlay,
  ModalContent,
  Wrapper,
  CloseButtonContainer,
} from "./AccountModalElements";

import { Button } from "../../Button/ButtonElement";

import SignIn from "../SignIn/index";
import SignUp from "../SignUp/index";
import PasswordReset from "../PasswordReset/index";

const AccountModal = ({ userSignInHidden, toggleUserSignInHidden }) => {
  // const [modalVisibility, setModalVisibility] = useState(userSignInHidden);

  const [state, setState] = useState("sign");

  const handleChange2 = (display) => {
    setState(display);
  };

  // * toggle visible OR hidden Modal depeding on the state
  const toggleModal = () => {
    toggleUserSignInHidden();

    handleChange2("sign");

    if (!userSignInHidden) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <>
      <HeaderOption onClick={toggleModal}>Account</HeaderOption>

      {/* render Modal depending on the state */}
      {!userSignInHidden && (
        <SignInModalContanier>
          <ModalOverlay></ModalOverlay>

          <ModalContent>
            {/* <Wrapper><h1>Sign In</h1> <h1>Sign Up</h1></Wrapper> */}
            {/* <SignIn /> */}
            {state === "sign" ? (
              <SignIn handleChange2={handleChange2} />
            ) : state === "signUp" ? (
              <SignUp handleChange2={handleChange2} />
            ) : (
              <PasswordReset handleChange2={handleChange2} />
            )}
            {/* <SignUp /> */}
            {/* <button onClick={() => setState("signUp")}>change</button> */}
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
  userSignInHidden: selectUserSignInHidden,
});

// * dispatch function to Redux store
const mapDispatchToProps = (dispatch) => ({
  toggleUserSignInHidden: () => dispatch(toggleUserSignInHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountModal);
