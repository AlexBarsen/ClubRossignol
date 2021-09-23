import React, { useState } from "react";

import { createStructuredSelector } from "reselect";

import FormInput from "../../FormInput/index";
import { Button } from "../../Button/ButtonElement";

import {
  emailSignInStart,
  toggleUserSignUpHidden,
  toggleUserSignInHidden,
} from "../../../../redux/user/user.actions";

import {
  SignInContainer,
  Form,
  Heading,
  ButtonsContainer,
  Wrapper,
  Paragraph,
} from "./SignInElements";

import SignUpModal from "../SignUpModal/index";

import { connect } from "react-redux";

const SignIn = ({
  emailSignInStart,
  toggleUserSignUpHidden,
  handleChange2,
}) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  // * function which logs the user in
  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);

    setCredentials({
      email: "",
      password: "",
    });
  };

  // * update state depending on what user is typing in the FormInput
  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <>
      <SignInContainer>
        <Heading>Sign in with Email and Password</Heading>

        <Form onSubmit={handleSubmit}>
          <FormInput
            sign
            name="email"
            type="email"
            handleChange={handleChange}
            label="Email"
            value={email}
            required
          />

          <FormInput
            sign
            name="password"
            type="password"
            value={password}
            handleChange={handleChange}
            label="Parola"
            required
          />

          <ButtonsContainer>
            <Wrapper>
              <Button type="submit" buttonType="signIn">
                Sign In
              </Button>
              <Button buttonType="signIn">Password ?</Button>
            </Wrapper>
            <Paragraph>Don't have an account?</Paragraph>
            {/* <SignUpModal type="button" /> */}
          </ButtonsContainer>
        </Form>
        <button onClick={() => handleChange2("signUp")}>Sign Up</button>
        <button onClick={() => handleChange2("reset")}>Reset</button>
      </SignInContainer>
    </>
  );
};

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  // userSignInHidden: selectUserSignInHidden,
});

// * dispatch function to Redux store
const mapDispatchToProps = (dispatch) => ({
  toggleUserSignUpHidden: () => dispatch(toggleUserSignUpHidden()),
  toggleUserSignInHidden: () => dispatch(toggleUserSignInHidden()),
  //   toggleUserSignInHidden: () => dispatch(toggleUserSignInHidden()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
