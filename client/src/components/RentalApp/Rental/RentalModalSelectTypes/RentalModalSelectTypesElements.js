import styled from "styled-components";
import FixRequiredSelect from "../RentalModal/FixRequiredSelect";
import BaseSelect from "react-select";

const Select = (props) => (
  <FixRequiredSelect {...props} SelectComponent={BaseSelect} />
);

export const CustomSelect = styled(Select)``;
