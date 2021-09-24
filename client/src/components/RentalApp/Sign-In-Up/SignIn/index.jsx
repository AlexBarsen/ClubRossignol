import React, { useState } from "react";

import FormInput from "../../FormInput/index";
import { Button } from "../../Button/ButtonElement";

import { emailSignInStart } from "../../../../redux/user/user.actions";

import {
  SignInContainer,
  Form,
  Heading,
  ButtonsContainer,
  Wrapper,
  Paragraph,
} from "./SignInElements";

import { connect } from "react-redux";

const SignIn = ({ emailSignInStart, handleDisplay }) => {
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

              <Button
                buttonType="signIn"
                onClick={() => handleDisplay("reset")}
              >
                Reset Password
              </Button>
            </Wrapper>
            <Paragraph>Don't have an account?</Paragraph>
            <Button buttonType="signIn" onClick={() => handleDisplay("signUp")}>
              Sign Up
            </Button>
          </ButtonsContainer>
        </Form>
      </SignInContainer>
    </>
  );
};

// * dispatch function to Redux store
const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
