import React, { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import Button from "@mui/material/Button";
import HowToRegIcon from "@mui/icons-material/HowToReg";

import { emailSignUpStart } from "../../../../redux/user/user.actions";

import { FormCheck, Form, Row } from "react-bootstrap";

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
    <Form onSubmit={handleSubmit} className="w-100">
      <div>
        <Row>
          <Form.Group className="col">
            <Form.Control
              name="lastName"
              type="text"
              placeholder={t("last_name")}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 col">
            <Form.Control
              name="firstName"
              type="text"
              placeholder={t("first_name")}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3 col">
            <Form.Control
              name="email"
              type="email"
              placeholder={t("email")}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 col">
            <Form.Control
              name="confirmEmail"
              type="email"
              placeholder={t("confirm_email")}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3 col">
            <Form.Control
              name="password"
              type="password"
              placeholder={t("password")}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 col">
            <Form.Control
              name="confirmPassword"
              type="password"
              placeholder={t("confirm_password")}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3 col">
            <Form.Control
              name="phone"
              type="text"
              placeholder={t("phone")}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="col d-flex align-items-center justify-content-center">
            {/* <Form.Group className="mb-3">
              <FormCheck required name="terms">
                <FormCheck.Input type="checkbox" />
                <FormCheck.Label>Accept Terms and Conditions.</FormCheck.Label>
              </FormCheck>
            </Form.Group> */}
          </Form.Group>
        </Row>
      </div>
      <div className="d-flex justify-content-center">
        <Button
          startIcon={<HowToRegIcon />}
          className="custom-button--blue"
          variant="contained"
          type="submit"
        >
          {t("sign_up")}
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
