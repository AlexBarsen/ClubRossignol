import React from "react";

import FixRequiredSelect from "../RentalModal/FixRequiredSelect";
import BaseSelect from "react-select";
import {
  sexOptions,
  shoeSizeOptions,
  heightOptions,
  weightOptions,
  experienceOptions,
} from "../RentalModal/options";

const Select = (props) => (
  <FixRequiredSelect {...props} SelectComponent={BaseSelect} />
);

const RentalModalSelectTypes = ({ productType, onChangeInput }) => {
  // * <Select> custom styles
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontSize: "1.4rem",
    }),
    menu: (provided, state) => ({
      ...provided,
      fontSize: "1.4rem",
      textAlign: "center",
    }),
  };

  switch (productType) {
    case "boots":
      return (
        <>
          <Select
            placeholder="Marime Picior"
            name="shoeSize"
            onChange={onChangeInput}
            options={shoeSizeOptions}
            styles={customStyles}
            required
          />

          <Select
            placeholder="Sex"
            name="sex"
            onChange={onChangeInput}
            options={sexOptions}
            styles={customStyles}
            required
          />
        </>
      );
    case "skiSnow":
      return (
        <>
          <Select
            placeholder="Inaltime (CM)"
            name="height"
            styles={customStyles}
            onChange={onChangeInput}
            options={heightOptions}
            required
          />

          <Select
            placeholder="Greutate (KG)"
            name="weight"
            styles={customStyles}
            onChange={onChangeInput}
            options={weightOptions}
            required
          />

          <Select
            placeholder="Nivel Experienta"
            name="experience"
            styles={customStyles}
            onChange={onChangeInput}
            options={experienceOptions}
            required
          />

          <Select
            placeholder="Sex"
            name="sex"
            styles={customStyles}
            onChange={onChangeInput}
            options={sexOptions}
            required
          />
        </>
      );
    case "equipment":
      return (
        <>
          <Select
            placeholder="Inaltime (CM)"
            name="height"
            styles={customStyles}
            onChange={onChangeInput}
            options={heightOptions}
            required
          />

          <Select
            placeholder="Greutate (KG)"
            name="weight"
            styles={customStyles}
            onChange={onChangeInput}
            options={weightOptions}
            required
          />

          <Select
            placeholder="Marime Picior"
            name="shoeSize"
            styles={customStyles}
            onChange={onChangeInput}
            options={shoeSizeOptions}
            required
          />

          <Select
            placeholder="Nivel Experienta"
            name="experience"
            styles={customStyles}
            onChange={onChangeInput}
            options={experienceOptions}
            required
          />

          <Select
            placeholder="Sex"
            name="sex"
            styles={customStyles}
            onChange={onChangeInput}
            options={sexOptions}
            required
          />
        </>
      );
    default:
      break;
  }
};

export default RentalModalSelectTypes;
