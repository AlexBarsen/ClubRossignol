import React, { useState } from "react";
import "./SignUp.css";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormCheck } from "react-bootstrap";

import { emailSignUpStart } from "../../../../redux/user/user.actions";

const SignUp = ({ emailSignUpStart }) => {
  const { t } = useTranslation();

  // const [agree, setAgree] = useState(false);

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

  // const handleCheckbox = () => {
  //   setAgree(!agree);
  // };

  // * function which creates the user with email and password
  const handleSubmit = async (event) => {
    event.preventDefault();

    // * check if password match
    if (email !== confirmEmail) {
      toast.error(t("email_no_match"));
      return;
    }

    // * check if password match
    if (password !== confirmPassword) {
      toast.error(t("password_no_match"));
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
    <Form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
          <Form.Group className="mb-3 col" controlId="formBasicEmail">
            <Form.Label className="h2">{t("name")}</Form.Label>
            <Form.Control
              className="formControl"
              size="lg"
              name="firstName"
              type="text"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 col" controlId="formBasicPassword">
            <Form.Label className="h2">{t("surname")}</Form.Label>
            <Form.Control
              className="formControl"
              size="lg"
              name="lastName"
              type="text"
              onChange={handleChange}
            />
          </Form.Group>
        </div>

        <div className="row">
          <Form.Group className="mb-3 col" controlId="formBasicPassword">
            <Form.Label className="h2">{t("email")}</Form.Label>
            <Form.Control
              className="formControl"
              size="lg"
              name="email"
              type="email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 col" controlId="formBasicPassword">
            <Form.Label className="h2">{t("confirm_email")}</Form.Label>
            <Form.Control
              className="formControl"
              size="lg"
              name="confirmEmail"
              type="email"
              onChange={handleChange}
            />
          </Form.Group>
        </div>

        <div className="row">
          <Form.Group className="mb-3 col" controlId="formBasicPassword">
            <Form.Label className="h2">{t("phone")}</Form.Label>
            <Form.Control
              className="formControl"
              size="lg"
              name="phoneNumber"
              type="text"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 col" controlId="formBasicPassword">
            <Form.Label className="h2">{t("password")}</Form.Label>
            <Form.Control
              className="formControl"
              size="lg"
              name="password"
              type="password"
              onChange={handleChange}
            />
          </Form.Group>
        </div>

        <div className="row">
          <Form.Group className="mb-3 col" controlId="formBasicPassword">
            <Form.Label className="h2">{t("confirm_password")}</Form.Label>
            <Form.Control
              className="formControl"
              size="lg"
              name="confirmPassword"
              type="password"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group
            className="col d-flex align-items-center justify-content-center"
            controlId="formBasicCheckbox"
          >
            <Form.Group className="mb-3 h3">
              <FormCheck required name="terms">
                <FormCheck.Input type="checkbox" />
                <FormCheck.Label>Accept Terms and Conditions.</FormCheck.Label>
              </FormCheck>
            </Form.Group>
          </Form.Group>
        </div>
      </div>
      <div className="buttonContainer">
        <Button className="button" variant="primary" type="submit">
          Sign Up
        </Button>
      </div>
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  emailSignUpStart: (userCredentials) =>
    dispatch(emailSignUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
