import React, { useRef } from "react";

import { connect } from "react-redux";

import {
  SignContainer,
  Container,
  CollapsibleContainer,
  Content,
} from "./SignElements";

import SignIn from "../../components/RentalApp/SignIn/index";

import SignUp from "../../components/RentalApp/SignUp/index";

import { createStructuredSelector } from "reselect";
import { selectUserSignUpHidden } from "../../redux/user/user.selectors";

const Sign = ({ userSignUpHidden }) => {
  const parentRef = useRef();

  return (
    <>
      <SignContainer>
        <SignUp />
        {/* <SignIn /> */}
      </SignContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  userSignUpHidden: selectUserSignUpHidden,
});

export default connect(mapStateToProps)(Sign);
