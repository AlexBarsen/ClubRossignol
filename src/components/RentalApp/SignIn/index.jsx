import React, { useState } from "react";

import FormInput from "../../RentalApp/FormInput/index";
import { Button } from "../../RentalApp/Button/ButtonElement";

import {
  emailSignInStart,
  toggleUserSignUpHidden,
} from "../../../redux/user/user.actions";

import { createStructuredSelector } from "reselect";

import {
  SignInContainer,
  Form,
  Heading,
  ButtonsContainer,
  Paragraph,
} from "./SignInElements";

import { connect } from "react-redux";

const SignIn = ({ emailSignInStart, toggleUserSignUpHidden }) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const parentRef = useRef();

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
            <Button type="submit" signIn>
              Sign In
            </Button>
            <Paragraph>Don't have an account?</Paragraph>
          </ButtonsContainer>
        </Form>
        <Button onClick={toggleUserSignUpHidden}>Sign Up</Button>
      </SignInContainer>
    </>
  );
};

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  //   userSignInHidden: selectUserSignInHidden,
});

// * dispatch function to Redux store
const mapDispatchToProps = (dispatch) => ({
  toggleUserSignUpHidden: () => dispatch(toggleUserSignUpHidden()),
  //   toggleUserSignInHidden: () => dispatch(toggleUserSignInHidden()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
