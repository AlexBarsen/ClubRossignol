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
      fontSize: "2rem",
      display: "flex",
      "@media screen and (max-width: 600px)": {
        ...provided,
        fontSize: "2.6rem",
      },
      "@media screen and (max-width: 450px)": {
        ...provided,
        fontSize: "3.6rem",
      },
    }),
    menu: (provided, state) => ({
      ...provided,
      fontSize: "2rem",
      textAlign: "center",
      "@media screen and (max-width: 600px)": {
        ...provided,
        fontSize: "2.6rem",
      },
      "@media screen and (max-width: 450px)": {
        ...provided,
        fontSize: "3.6rem",
      },
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
            isSearchable={false}
            required
          />

          <CustomSelect
            placeholder="Sex"
            name="sex"
            onChange={onChangeInput}
            options={sexOptions}
            styles={customStyles}
            isSearchable={false}
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
            isSearchable={false}
            required
          />

          <CustomSelect
            placeholder="Greutate (KG)"
            name="weight"
            styles={customStyles}
            onChange={onChangeInput}
            options={weightOptions}
            isSearchable={false}
            required
          />

          <CustomSelect
            placeholder="Nivel Experienta"
            name="experience"
            styles={customStyles}
            onChange={onChangeInput}
            options={experienceOptions}
            isSearchable={false}
            required
          />

          <CustomSelect
            placeholder="Sex"
            name="sex"
            styles={customStyles}
            onChange={onChangeInput}
            options={sexOptions}
            isSearchable={false}
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
            isSearchable={false}
            required
          />

          <CustomSelect
            placeholder="Greutate (KG)"
            name="weight"
            styles={customStyles}
            onChange={onChangeInput}
            options={weightOptions}
            isSearchable={false}
            required
          />

          <CustomSelect
            placeholder="Marime Picior"
            name="shoeSize"
            styles={customStyles}
            onChange={onChangeInput}
            options={shoeSizeOptions}
            isSearchable={false}
            required
          />

          <CustomSelect
            placeholder="Nivel Experienta"
            name="experience"
            styles={customStyles}
            onChange={onChangeInput}
            options={experienceOptions}
            isSearchable={false}
            required
          />

          <CustomSelect
            placeholder="Sex"
            name="sex"
            styles={customStyles}
            onChange={onChangeInput}
            options={sexOptions}
            isSearchable={false}
            required
          />
        </>
      );
    default:
      break;
  }
};

export default RentalModalSelectTypes;
