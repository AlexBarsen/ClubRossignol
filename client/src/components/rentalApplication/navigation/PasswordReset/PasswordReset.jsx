import React, { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import { passwordResetStart } from "../../../../redux/user/user.actions";

import { Form } from "react-bootstrap";

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
    <Form onSubmit={handleSubmit} className="w-100">
      <Form.Group className="mb-3">
        <Form.Control
          name="email"
          type="email"
          placeholder={t("email")}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          name="confirmEmail"
          type="confirmEmail"
          placeholder={t("confirm_email")}
          onChange={handleChange}
        />
      </Form.Group>

      <div className="buttonContainer">
        <Button
          startIcon={<RestartAltIcon />}
          className="custom-button--blue"
          variant="contained"
          type="submit"
        >
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
