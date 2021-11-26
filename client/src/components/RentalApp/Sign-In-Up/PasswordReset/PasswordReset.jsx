import React, { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import { passwordResetStart } from "../../../../redux/user/user.actions";

import { Form, Button, FloatingLabel } from "react-bootstrap";

const PasswordReset = ({ passwordResetStart }) => {
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
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
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

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <FloatingLabel
          controlId="floatingInput"
          label={t("confirm_email")}
          className="mb-3"
        >
          <Form.Control
            name="confirmEmail"
            type="confirmEmail"
            placeholder="johnsnow@example.com"
            onChange={handleChange}
          />
        </FloatingLabel>
      </Form.Group>

      <div className="buttonContainer">
        <Button className="button w-100" variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

// * dispatch function to Redux store
const mapDispatchToProps = (dispatch) => ({
  passwordResetStart: (email) => dispatch(passwordResetStart({ email })),
});

export default connect(null, mapDispatchToProps)(PasswordReset);
