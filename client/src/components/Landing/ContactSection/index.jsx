import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  ContactSectionContainer,
  ContactSectionContent,
  Heading,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  ButtonContainer,
  GoogleMapsWrapper,
  Adress,
  Contact,
  TextSpan,
} from "./ContactSectionElement";

import GoogleApiWrapper from "../GoogleMaps/index";
import { Button } from "../Button/ButtonElement";

const ContactSection = () => {
  const { t } = useTranslation();

  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const { firstName, lastName, email, message } = inputValues;

  const handleChange = (event) => {
    const { value, name } = event.target;

    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setInputValues({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };
  return (
    <ContactSectionContainer id="contact">
      <ContactSectionContent>
        <Form onSubmit={handleSubmit}>
          <Heading>Contact</Heading>

          <FormGroup>
            <Label>{t("name")}</Label>
            <Input
              name="firstName"
              type="text"
              value={firstName}
              onChange={handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>{t("surname")}</Label>
            <Input
              name="lastName"
              type="text"
              value={lastName}
              onChange={handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>{t("message")}:</Label>
            <TextArea
              name="message"
              value={message}
              onChange={handleChange}
              type="text"
            ></TextArea>
          </FormGroup>

          <ButtonContainer>
            <Button type="submit">Submit</Button>
          </ButtonContainer>
          <Contact>
            <TextSpan>Tel: </TextSpan>0742 956 198 / 0799 570 326 / 0722 222 314
          </Contact>
        </Form>

        <GoogleMapsWrapper>
          <Adress>Str. Drumul Sulinar nr. 1, Poiana Brașov, 500001</Adress>

          <GoogleApiWrapper />
        </GoogleMapsWrapper>
      </ContactSectionContent>
    </ContactSectionContainer>
  );
};

export default ContactSection;
