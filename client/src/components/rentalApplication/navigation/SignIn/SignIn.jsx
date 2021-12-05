import React, { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { emailSignInStart } from "../../../../redux/user/user.actions";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { Form } from "react-bootstrap";

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
    <Form onSubmit={handleSubmit} className="w-100">
      <Form.Group className="mb-3">
        <Form.Control
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          name="password"
          type="password"
          placeholder={t("password")}
          onChange={handleChange}
        />
      </Form.Group>

      <div className="buttonContainer">
        <Button
          startIcon={<LoginIcon />}
          variant="contained"
          type="submit"
          className="custom-button--blue"
        >
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
