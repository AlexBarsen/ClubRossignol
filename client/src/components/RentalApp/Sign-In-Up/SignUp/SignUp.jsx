import React, { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="h2">{t("name")}</Form.Label>
        <Form.Control name="firstName" type="text" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="h2">{t("surname")}</Form.Label>
        <Form.Control name="lastName" type="text" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="h2">{t("password")}</Form.Label>
        <Form.Control name="email" type="email" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="h2">{t("confirm_email")}</Form.Label>
        <Form.Control
          name="confirmEmail"
          type="email"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="h2">{t("phone")}</Form.Label>
        <Form.Control
          name="phoneNumber"
          type="number"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="h2">{t("password")}</Form.Label>
        <Form.Control name="password" type="password" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="h2">{t("confirm_password")}</Form.Label>
        <Form.Control
          name="confirmPassword"
          type="password"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 h3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label={t("agree") + " " + t("terms_and_conditions")}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  emailSignUpStart: (userCredentials) =>
    dispatch(emailSignUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
