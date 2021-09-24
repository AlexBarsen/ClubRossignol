import React, { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import { passwordResetStart } from "../../../../redux/user/user.actions";

import FormInput from "../../FormInput/index";
import { Button } from "../../Button/ButtonElement";

import { PasswordResetContainer, Form, Heading } from "./PasswordResetElements";

const ResetPassword = ({ passwordResetStart }) => {
  const [emails, setEmails] = useState({
    email: "",
    confirmEmail: "",
  });

  const { email, confirmEmail } = emails;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email !== confirmEmail) {
      toast.error("E-mails don't match.");
      setEmails({ ...emails, confirmEmail: "" });
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

        <Button buttonType="signIn" onClick={() => handleSubmit}>
          Reset Password
        </Button>
      </Form>
    </PasswordResetContainer>
  );
};

// * dispatch function to Redux store
const mapDispatchToProps = (dispatch) => ({
  passwordResetStart: (email) => dispatch(passwordResetStart({ email })),
});

export default connect(null, mapDispatchToProps)(ResetPassword);
