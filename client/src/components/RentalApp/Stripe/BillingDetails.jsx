import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const BillingDetails = () => {
  return (
    <>
      <InputGroup className="mb-3">
        <FormControl name="email" type="email" placeholder="Email address" />
      </InputGroup>

      <InputGroup className="mb-3">
        <FormControl name="name" type="text" placeholder="First Name" />
      </InputGroup>

      <InputGroup className="mb-3">
        <FormControl name="address" type="text" placeholder="Address" />
      </InputGroup>

      <InputGroup className="mb-3">
        <FormControl name="city" type="text" placeholder="City" />
      </InputGroup>

      <InputGroup className="mb-3">
        <FormControl name="zip" type="text" placeholder="Zip" />
      </InputGroup>

      {/* <InputGroup className="mb-3">
        <FormControl name="country" type="text" placeholder="Country" />
      </InputGroup> */}
    </>
  );
};

export default BillingDetails;
