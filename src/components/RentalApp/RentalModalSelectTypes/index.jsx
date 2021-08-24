import React from "react";

import { CustomSelect } from "./RentalModalSelectTypesElements";

import {
  sexOptions,
  shoeSizeOptions,
  heightOptions,
  weightOptions,
  experienceOptions,
} from "../RentalModal/options";

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
          <CustomSelect
            placeholder="Marime Picior"
            name="shoeSize"
            onChange={onChangeInput}
            options={shoeSizeOptions}
            styles={customStyles}
            required
          />

          <CustomSelect
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
          <CustomSelect
            placeholder="Inaltime (CM)"
            name="height"
            styles={customStyles}
            onChange={onChangeInput}
            options={heightOptions}
            required
          />

          <CustomSelect
            placeholder="Greutate (KG)"
            name="weight"
            styles={customStyles}
            onChange={onChangeInput}
            options={weightOptions}
            required
          />

          <CustomSelect
            placeholder="Nivel Experienta"
            name="experience"
            styles={customStyles}
            onChange={onChangeInput}
            options={experienceOptions}
            required
          />

          <CustomSelect
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
          <CustomSelect
            placeholder="Inaltime (CM)"
            name="height"
            styles={customStyles}
            onChange={onChangeInput}
            options={heightOptions}
            required
          />

          <CustomSelect
            placeholder="Greutate (KG)"
            name="weight"
            styles={customStyles}
            onChange={onChangeInput}
            options={weightOptions}
            required
          />

          <CustomSelect
            placeholder="Marime Picior"
            name="shoeSize"
            styles={customStyles}
            onChange={onChangeInput}
            options={shoeSizeOptions}
            required
          />

          <CustomSelect
            placeholder="Nivel Experienta"
            name="experience"
            styles={customStyles}
            onChange={onChangeInput}
            options={experienceOptions}
            required
          />

          <CustomSelect
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
