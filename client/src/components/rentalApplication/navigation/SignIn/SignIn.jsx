import React, { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { emailSignInStart } from "../../../../redux/user/user.actions";

import { FloatingLabel, Form, Button } from "react-bootstrap";

const SignIn = ({ emailSignInStart }) => {
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
    <Form onSubmit={handleSubmit} className="p-1">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <FloatingLabel label={t("email")} className="mb-3">
          <Form.Control
            name="email"
            type="email"
            placeholder="johnsnow@example.com"
            onChange={handleChange}
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <FloatingLabel className="mb-3" label={t("password")}>
          <Form.Control
            name="password"
            type="password"
            placeholder="johnsnow1234"
            onChange={handleChange}
          />
        </FloatingLabel>
      </Form.Group>

      <div className="buttonContainer">
        <Button variant="primary" type="submit">
          Login
        </Button>
      </div>
    </Form>
  );
};

// * dispatch function to Redux store
const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
