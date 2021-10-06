import React, { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import {
  PasswordResetContainer,
  Form,
  Heading,
  ButtonContainer,
} from "./PasswordResetElements";

import { passwordResetStart } from "../../../../redux/user/user.actions";

import FormInput from "../../FormInput/index";
import { Button } from "../../Button/ButtonElement";

const ResetPassword = ({ passwordResetStart }) => {
  const { t } = useTranslation();

  const [emails, setEmails] = useState({
    email: "",
    confirmEmail: "",
  });

  const { email, confirmEmail } = emails;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email !== confirmEmail) {
      toast.error(t("email_no_match"));
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
      <Heading>{t("reset_password")}</Heading>

      <Form onSubmit={handleSubmit}>
        <FormInput
          sign
          name="email"
          type="email"
          handleChange={handleChange}
          label={t("email")}
          value={email}
          required
        />

        <FormInput
          sign
          name="confirmEmail"
          type="email"
          value={confirmEmail}
          handleChange={handleChange}
          label={t("confirm_email")}
          required
        />

        <ButtonContainer>
          <Button buttonType="signIn" onClick={() => handleSubmit}>
            {t("reset_password")}
          </Button>
        </ButtonContainer>
      </Form>
    </PasswordResetContainer>
  );
};

// * dispatch function to Redux store
const mapDispatchToProps = (dispatch) => ({
  passwordResetStart: (email) => dispatch(passwordResetStart({ email })),
});

export default connect(null, mapDispatchToProps)(ResetPassword);
