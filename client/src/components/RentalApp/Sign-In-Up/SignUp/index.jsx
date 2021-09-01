import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../../FormInput/index";
import { Button } from "../../Button/ButtonElement";

import { emailSignUpStart } from "../../../../redux/user/user.actions";

import {
  SignUpContainer,
  Heading,
  HeadingSecondary,
  Form,
  ButtonContainer,
} from "./SignUpElements";

const SignUp = ({ emailSignUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, phone, password, confirmPassword } =
    userCredentials;

  // * function which creates the user with email and password
  const handleSubmit = async (event) => {
    event.preventDefault();

    // * check if password match
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    emailSignUpStart({ email, password, firstName, lastName, phone });

    setCredentials({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  // * handle state change depending on what user is typing in the FormInput
  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <>
      <SignUpContainer>
        <Heading>Sign Up</Heading>
        <HeadingSecondary>
          Create account with email and password
        </HeadingSecondary>
        <Form onSubmit={handleSubmit}>
          <FormInput
            sign
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            label="Nume"
            required
          />
          <FormInput
            sign
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            label="Prenume"
            required
          />
          <FormInput
            sign
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
            required
          />
          <FormInput
            sign
            type="tel"
            name="phone"
            value={phone}
            onChange={handleChange}
            label="Numar telefon"
            required
          />
          <FormInput
            sign
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="Parola"
            required
          />
          <FormInput
            sign
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            label="Confirma Parola"
            required
          />
          <ButtonContainer>
            <Button signIn type="submit">
              SIGN UP
            </Button>
          </ButtonContainer>
        </Form>
      </SignUpContainer>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  emailSignUpStart: (userCredentials) =>
    dispatch(emailSignUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
