import React from "react";

import { Group, Input, Label } from "./FormInputElements";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <>
      <Group>
        <Input onChange={handleChange} {...otherProps} />
        {label ? <Label>{label}</Label> : null}
      </Group>
    </>
  );
};

export default FormInput;
