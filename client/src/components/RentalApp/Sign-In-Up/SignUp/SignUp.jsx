import React, { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FloatingLabel, FormCheck } from "react-bootstrap";

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
          <Form.Group className="col" controlId="formBasicEmail">
            <FloatingLabel
              controlId="floatingInput"
              label={t("surname")}
              className="mb-3"
              onChange={handleChange}
            >
              <Form.Control name="firstName" type="text" placeholder="John" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3 col" controlId="formBasicPassword">
            <FloatingLabel
              controlId="floatingInput"
              label={t("name")}
              className="mb-3"
            >
              <Form.Control
                name="lastName"
                type="text"
                placeholder="Snow"
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
        </div>

        <div className="row">
          <Form.Group className="mb-3 col" controlId="formBasicPassword">
            <FloatingLabel
              controlId="floatingInput"
              label={t("email")}
              className="mb-3"
            >
              <Form.Control
                name="email"
                type="email"
                placeholder="johnsnow@example.com"
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3 col" controlId="formBasicPassword">
            <FloatingLabel
              controlId="floatingInput"
              label={t("confirm_email")}
              className="mb-3"
            >
              <Form.Control
                name="confirmEmail"
                type="email"
                placeholder="johnsnow@example.com"
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
        </div>

        <div className="row">
          <Form.Group className="mb-3 col" controlId="formBasicPassword">
            <FloatingLabel
              controlId="floatingInput"
              label={t("password")}
              className="mb-3"
            >
              <Form.Control
                name="password"
                type="password"
                placeholder="johnsnow1234"
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3 col" controlId="formBasicPassword">
            <FloatingLabel
              controlId="floatingInput"
              label={t("confirm_password")}
              className="mb-3"
            >
              <Form.Control
                name="confirmPassword"
                type="password"
                placeholder="johnsnow1234"
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
        </div>

        <div className="row">
          <Form.Group className="mb-3 col" controlId="formBasicPassword">
            <FloatingLabel
              controlId="floatingInput"
              label={t("phone")}
              className="mb-3"
            >
              <Form.Control
                name="phone"
                type="text"
                placeholder="0712345678"
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group
            className="col d-flex align-items-center justify-content-center"
            controlId="formBasicCheckbox"
          >
            <Form.Group className="mb-3">
              <FormCheck required name="terms">
                <FormCheck.Input type="checkbox" />
                <FormCheck.Label>Accept Terms and Conditions.</FormCheck.Label>
              </FormCheck>
            </Form.Group>
          </Form.Group>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Button className="w-100 fs-20" variant="primary" type="submit">
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
