import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserSignInHidden } from "../../../../redux/user/user.selectors";
import { toggleUserSignInHidden } from "../../../../redux/user/user.actions";

import {
  HeaderOption,
  SignInModalContanier,
  ModalOverlay,
  ModalContent,
  CloseButtonContainer,
} from "./SignInModalElements";

import { Button } from "../../Button/ButtonElement";

import SignIn from "../SignIn/index";

const SignInModal = ({ userSignInHidden, toggleUserSignInHidden }) => {
  // const [modalVisibility, setModalVisibility] = useState(userSignInHidden);

  // * toggle visible OR hidden Modal depeding on the state
  const toggleModal = () => {
    toggleUserSignInHidden();

    if (!userSignInHidden) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <>
      <HeaderOption onClick={toggleModal}>Sign In</HeaderOption>

      {/* render Modal depending on the state */}
      {!userSignInHidden && (
        <SignInModalContanier>
          <ModalOverlay></ModalOverlay>

          <ModalContent>
            <SignIn />

            <CloseButtonContainer>
              <Button closeModal onClick={toggleModal}>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignInModal);
