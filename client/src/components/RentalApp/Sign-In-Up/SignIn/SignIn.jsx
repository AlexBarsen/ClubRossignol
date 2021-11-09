import React, { useState } from "react";
import "./SignIn.css";
import { connect } from "react-redux";
// import { useTranslation } from "react-i18next";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { emailSignInStart } from "../../../../redux/user/user.actions";

const SignIn = ({ emailSignInStart }) => {
  // const { t } = useTranslation();
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
        <Form.Label className="h3">Email address</Form.Label>
        <Form.Control
          className="formControl"
          size="lg"
          name="email"
          type="email"
          // placeholder="Enter email"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="h3">Password</Form.Label>
        <Form.Control
          className="formControl"
          size="lg"
          name="password"
          type="password"
          // placeholder="Password"
          onChange={handleChange}
        />
      </Form.Group>

      <div className="buttonContainer">
        <Button className="button" variant="primary" type="submit">
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
