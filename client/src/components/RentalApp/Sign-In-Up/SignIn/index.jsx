import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../../FormInput/index";
import { Button } from "../../Button/ButtonElement";

import { emailSignInStart } from "../../../../redux/user/user.actions";

import {
  SignInContainer,
  Form,
  Heading,
  ButtonsContainer,
  ButtonContainer,
  Wrapper,
  Paragraph,
} from "./SignInElements";

import { useTranslation } from "react-i18next";

const SignIn = ({ emailSignInStart, handleDisplay }) => {
  const { t } = useTranslation();

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
        <Heading>{t("sign_in_email_password")}</Heading>

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
            name="password"
            type="password"
            value={password}
            handleChange={handleChange}
            label={t("password")}
            required
          />

          <ButtonsContainer>
            <Wrapper>
              <ButtonContainer>
                <Button type="submit" buttonType="signIn">
                  {t("sign_in")}
                </Button>
              </ButtonContainer>

              <Button
                buttonType="signIn"
                onClick={() => handleDisplay("reset")}
              >
                {t("reset_password")}
              </Button>
            </Wrapper>
            <Paragraph>{t("no_account")}</Paragraph>
            <Button buttonType="signIn" onClick={() => handleDisplay("signUp")}>
              {t("sign_up")}
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
