import React, { useState } from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import {
  toggleUserSignUpHidden,
  toggleUserSignInHidden,
  passwordResetStart,
} from "../../../../redux/user/user.actions";

import FormInput from "../../FormInput/index";
import { Button } from "../../Button/ButtonElement";

import { PasswordResetContainer, Form, Heading } from "./PasswordResetElements";

const ResetPassword = ({ passwordResetStart, handleChange2 }) => {
  const [emails, setEmails] = useState({
    email: "",
    confirmEmail: "",
  });

  const { email, confirmEmail } = emails;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email !== confirmEmail) {
      alert("emails don't match");
      return;
    }

    passwordResetStart(email);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setEmails({ ...emails, [name]: value });
  };
  return (
    <PasswordResetContainer>
      <Heading>Reset password</Heading>

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
          name="confirmEmail"
          type="email"
          value={confirmEmail}
          handleChange={handleChange}
          label="Confirm Email"
          required
        />

        <button onClick={handleSubmit}>Reset</button>
      </Form>
      <button onClick={() => handleChange2("signUp")}>Sign Up</button>
      <button onClick={() => handleChange2("reset")}>Reset</button>
    </PasswordResetContainer>
  );
};

// * dispatch function to Redux store
const mapDispatchToProps = (dispatch) => ({
  toggleUserSignUpHidden: () => dispatch(toggleUserSignUpHidden()),
  toggleUserSignInHidden: () => dispatch(toggleUserSignInHidden()),
  //   toggleUserSignInHidden: () => dispatch(toggleUserSignInHidden()),
  passwordResetStart: (email) => dispatch(passwordResetStart({ email })),
});

export default connect(null, mapDispatchToProps)(ResetPassword);
