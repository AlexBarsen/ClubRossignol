import React from "react";
import { Card, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import GoogleApiWrapper from "../GoogleMaps/index";

const Contact = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <Card style={{ width: "70rem" }} className="shadow">
        <Card.Body>
          <Card.Title>Contact</Card.Title>
          <div className="d-flex justify-content-between">
            <Form className="d-flex border p-2">
              <div className="d-flex flex-column justify-content-center">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="firstName" placeholder="First Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="lastNameName" placeholder="First Name" />
                </Form.Group>
              </div>

              <div className="d-flex flex-column ms-2 justify-content-center p-3">
                <InputGroup
                  style={{ height: "15rem", width: "20rem" }}
                  className="d-flex flex-column"
                >
                  <InputGroup.Text>Message</InputGroup.Text>

                  <FormControl
                    style={{ width: "100%" }}
                    as="textarea"
                    aria-label="With textarea"
                  />
                </InputGroup>

                <Button variant="primary" type="submit" className="mt-3">
                  Submit
                </Button>
              </div>
            </Form>

            <GoogleApiWrapper />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;
