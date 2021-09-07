import React, { useState } from "react";
import { FaCheckSquare, FaSquare } from "react-icons/fa";

import { CheckBoxContainer, Label } from "./CheckboxElements";

const Checkbox = ({ name, label, checked, size }) => {
  const [check, setCheck] = useState(checked);

  const Icon = check ? FaCheckSquare : FaSquare;

  const onCheckChange = (event) => {
    if (checked) return;
    setCheck(!check);
  };

  return (
    <>
      <CheckBoxContainer>
        <Icon
          style={{ cursor: "pointer" }}
          size={size}
          onClick={onCheckChange}
        />
        {label && <Label>{label}</Label>}
      </CheckBoxContainer>
    </>
  );
};

export default Checkbox;
