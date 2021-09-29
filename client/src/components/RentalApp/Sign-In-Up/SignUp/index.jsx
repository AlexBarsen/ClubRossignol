import React, { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  SignUpContainer,
  Heading,
  Form,
  Wrapper,
  ButtonsContainer,
  TermsCheckbox,
  ButtonContainer,
  Input,
  Label,
  TermsSpan,
} from "./SignUpElements";

import { emailSignUpStart } from "../../../../redux/user/user.actions";

import FormInput from "../../FormInput/index";
import { Button } from "../../Button/ButtonElement";

const SignUp = ({ emailSignUpStart }) => {
  const { t } = useTranslation();

  const [agree, setAgree] = useState(false);

  const [userCredentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    dateOfBirth: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const {
    firstName,
    lastName,
    email,
    confirmEmail,
    dateOfBirth,
    phone,
    password,
    confirmPassword,
  } = userCredentials;

  // * handle state change depending on what user is typing in the FormInput
  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleCheckbox = () => {
    setAgree(!agree);
  };

  // * function which creates the user with email and password
  const handleSubmit = async (event) => {
    event.preventDefault();

    // * check if password match
    if (email !== confirmEmail) {
      alert("Emails don't match");
      return;
    }

    // * check if password match
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    emailSignUpStart({
      email,
      password,
      firstName,
      lastName,
      phone,
      dateOfBirth,
    });

    setCredentials({
      firstName: "",
      lastName: "",
      email: "",
      confirmEmail: "",
      phone: "",
      dateOfBirth: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <SignUpContainer>
        <Heading>{t("sign_up")}</Heading>
        <Form onSubmit={handleSubmit}>
          <Wrapper>
            <FormInput
              sign
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              label={t("name")}
              required
            />
            <FormInput
              sign
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              label={t("surname")}
              required
            />
            <FormInput
              sign
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              label={t("email")}
              required
            />

            <FormInput
              sign
              type="email"
              name="confirmEmail"
              value={confirmEmail}
              onChange={handleChange}
              label={t("confirm_email")}
              required
            />

            <FormInput
              sign
              type="date"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={handleChange}
              label={t("date_of_birth")}
              max="2010-01-01"
              required
            />

            <FormInput
              sign
              type="tel"
              name="phone"
              value={phone}
              onChange={handleChange}
              label={t("phone")}
              required
            />

            <FormInput
              sign
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              label={t("password")}
              required
            />

            <FormInput
              sign
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              label={t("confirm_password")}
              required
            />
          </Wrapper>

          <ButtonsContainer>
            <TermsCheckbox>
              <Input type="checkbox" id="agree" onChange={handleCheckbox} />
              <Label htmlFor="agree">
                {t("agree")} <TermsSpan>{t("terms_and_conditions")}.</TermsSpan>
              </Label>
            </TermsCheckbox>

            <ButtonContainer>
              <Button buttonType="signIn" type="submit" disabled={!agree}>
                {t("sign_up")}
              </Button>
            </ButtonContainer>
          </ButtonsContainer>
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
