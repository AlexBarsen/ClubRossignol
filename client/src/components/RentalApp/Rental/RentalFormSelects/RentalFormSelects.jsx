import React from "react";
import { useTranslation } from "react-i18next";

import FixRequiredSelect from "../RentalForm/FixRequiredSelect";
import BaseSelect from "react-select";

import {
  shoeSizeOptionsAdult,
  heightOptionsAdult,
  weightOptionsAdult,
  shoeSizeOptionsChild,
  heightOptionsChild,
  weightOptionsChild,
  sexOptionsRO,
  experienceOptionsRO,
  bikesTimePeriodRO,
  sexOptionsENG,
  experienceOptionsENG,
  bikesTimePeriodENG,
} from "../RentalForm/options";

const Select = (props) => (
  <FixRequiredSelect {...props} SelectComponent={BaseSelect} />
);

const RentalFormSelects = ({ productType, adult, onChangeInput }) => {
  const { t } = useTranslation();

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

  const language = useTranslation().i18n.language;

  switch (productType) {
    case "boots":
      return (
        <>
          <Select
            placeholder={t("shoeSize_modal")}
            name="shoeSize"
            onChange={onChangeInput}
            options={adult ? shoeSizeOptionsAdult : shoeSizeOptionsChild}
            styles={customStyles}
            isSearchable={false}
            required
          />

          <Select
            placeholder={t("sex_modal")}
            name="sex"
            onChange={onChangeInput}
            options={language === "ro" ? sexOptionsRO : sexOptionsENG}
            styles={customStyles}
            isSearchable={false}
            required
          />
        </>
      );
    case "skiSnow":
      return (
        <>
          <Select
            placeholder={t("height_modal")}
            name="height"
            styles={customStyles}
            onChange={onChangeInput}
            options={adult ? heightOptionsAdult : heightOptionsChild}
            isSearchable={false}
            required
          />

          <Select
            placeholder={t("weight_modal")}
            name="weight"
            styles={customStyles}
            onChange={onChangeInput}
            options={adult ? weightOptionsAdult : weightOptionsChild}
            isSearchable={false}
            required
          />

          <Select
            placeholder={t("experience_modal")}
            name="experience"
            styles={customStyles}
            onChange={onChangeInput}
            options={
              language === "ro" ? experienceOptionsRO : experienceOptionsENG
            }
            isSearchable={false}
            required
          />

          <Select
            placeholder={t("sex_modal")}
            name="sex"
            styles={customStyles}
            onChange={onChangeInput}
            options={language === "ro" ? sexOptionsRO : sexOptionsENG}
            isSearchable={false}
            required
          />
        </>
      );
    case "equipment":
      return (
        <>
          <Select
            placeholder={t("height_modal")}
            name="height"
            styles={customStyles}
            onChange={onChangeInput}
            options={adult ? heightOptionsAdult : heightOptionsChild}
            isSearchable={false}
            required
          />

          <Select
            placeholder={t("weight_modal")}
            name="weight"
            styles={customStyles}
            onChange={onChangeInput}
            options={adult ? weightOptionsAdult : weightOptionsChild}
            isSearchable={false}
            required
          />

          <Select
            placeholder={t("shoeSize_modal")}
            name="shoeSize"
            styles={customStyles}
            onChange={onChangeInput}
            options={adult ? shoeSizeOptionsAdult : shoeSizeOptionsChild}
            isSearchable={false}
            required
          />

          <Select
            placeholder={t("experience_modal")}
            name="experience"
            styles={customStyles}
            onChange={onChangeInput}
            options={
              language === "ro" ? experienceOptionsRO : experienceOptionsENG
            }
            isSearchable={false}
            required
          />

          <Select
            placeholder={t("sex_modal")}
            name="sex"
            styles={customStyles}
            onChange={onChangeInput}
            options={language === "ro" ? sexOptionsRO : sexOptionsENG}
            isSearchable={false}
            required
          />
        </>
      );

    case "bike":
      return (
        <>
          <Select
            placeholder="I would like to rent the bike for:"
            name="timePeriod"
            styles={customStyles}
            onChange={onChangeInput}
            options={language === "ro" ? bikesTimePeriodRO : bikesTimePeriodENG}
            isSearchable={false}
            required
          />
        </>
      );
    default:
      break;
  }
};

export default RentalFormSelects;
