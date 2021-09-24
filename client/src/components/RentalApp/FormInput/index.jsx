import React from "react";

import { Group, Input, Label } from "./FormInputElements";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <>
      <Group>
        <Label {...otherProps}>{label}</Label>
        <Input onChange={handleChange} {...otherProps} />
      </Group>
    </>
  );
};

export default FormInput;
