import React, { useState } from "react";

import { connect } from "react-redux";

import {
  toggleUserSignUpHidden,
  toggleUserSignInHidden,
  passwordResetStart,
} from "../../../../redux/user/user.actions";

import FormInput from "../../FormInput/index";
import { Button } from "../../Button/ButtonElement";

import {
  PasswordResetContainer,
  Form,
  Heading,
  ButtonsContainer,
} from "./PasswordResetElements";

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

        <Button buttonType="signIn" onClick={handleSubmit}>
          Reset Password
        </Button>
      </Form>

      <ButtonsContainer>
        <Button buttonType="signIn" onClick={() => handleChange2("signUp")}>
          Sign Up
        </Button>

        <Button buttonType="signIn" onClick={() => handleChange2("reset")}>
          Reset
        </Button>
      </ButtonsContainer>
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
