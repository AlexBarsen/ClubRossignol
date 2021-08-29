import React from "react";

import { CustomSelect } from "./EditModalSelectTypesElements";

import {
  sexOptions,
  shoeSizeOptions,
  heightOptions,
  weightOptions,
  experienceOptions,
} from "../RentalModal/options";

const EditModalSelectTypes = ({
  productType,
  onChangeInput,
  defaultValues,
}) => {
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
            defaultValue={
              defaultValues.shoeSize
                ? {
                    value: defaultValues.shoeSize,
                    label: defaultValues.shoeSize,
                  }
                : null
            }
            onChange={onChangeInput}
            options={shoeSizeOptions}
            styles={customStyles}
            isSearchable={false}
          />

          <CustomSelect
            placeholder="Sex"
            name="sex"
            defaultValue={
              defaultValues.sex
                ? {
                    value: defaultValues.sex,
                    label: defaultValues.sex,
                  }
                : null
            }
            onChange={onChangeInput}
            options={sexOptions}
            styles={customStyles}
            isSearchable={false}
          />
        </>
      );
    case "skiSnow":
      return (
        <>
          <CustomSelect
            placeholder="Inaltime (CM)"
            name="height"
            defaultValue={
              defaultValues.height
                ? {
                    value: defaultValues.height,
                    label: defaultValues.height,
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={heightOptions}
            isSearchable={false}
          />

          <CustomSelect
            placeholder="Greutate (KG)"
            name="weight"
            defaultValue={
              defaultValues.weight
                ? {
                    value: defaultValues.weight,
                    label: defaultValues.weight,
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={weightOptions}
            isSearchable={false}
          />

          <CustomSelect
            placeholder="Nivel Experienta"
            name="experience"
            defaultValue={
              defaultValues.experience
                ? {
                    value: defaultValues.experience,
                    label: defaultValues.experience,
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={experienceOptions}
            isSearchable={false}
          />

          <CustomSelect
            placeholder="Sex"
            name="sex"
            defaultValue={
              defaultValues.sex
                ? {
                    value: defaultValues.sex,
                    label: defaultValues.sex,
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={sexOptions}
            isSearchable={false}
          />
        </>
      );
    case "equipment":
      return (
        <>
          <CustomSelect
            placeholder="Inaltime (CM)"
            name="height"
            defaultValue={
              defaultValues.height
                ? {
                    value: defaultValues.height,
                    label: defaultValues.height,
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={heightOptions}
            isSearchable={false}
          />

          <CustomSelect
            placeholder="Greutate (KG)"
            name="weight"
            defaultValue={
              defaultValues.weight
                ? {
                    value: defaultValues.weight,
                    label: defaultValues.weight,
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={weightOptions}
            isSearchable={false}
          />

          <CustomSelect
            placeholder="Marime Picior"
            name="shoeSize"
            defaultValue={
              defaultValues.shoeSize
                ? {
                    value: defaultValues.shoeSize,
                    label: defaultValues.shoeSize,
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={shoeSizeOptions}
            isSearchable={false}
          />

          <CustomSelect
            placeholder="Nivel Experienta"
            name="experience"
            defaultValue={
              defaultValues.experience
                ? {
                    value: defaultValues.experience,
                    label: defaultValues.experience,
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={experienceOptions}
            isSearchable={false}
          />

          <CustomSelect
            placeholder="Sex"
            name="sex"
            defaultValue={
              defaultValues.sex
                ? {
                    value: defaultValues.sex,
                    label: defaultValues.sex,
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={sexOptions}
            isSearchable={false}
          />
        </>
      );
    default:
      break;
  }
};

export default EditModalSelectTypes;
