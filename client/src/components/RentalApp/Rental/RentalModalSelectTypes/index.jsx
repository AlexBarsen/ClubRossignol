import React from "react";

import { CustomSelect } from "./RentalModalSelectTypesElements";

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
} from "../RentalModal/options";

import { useTranslation } from "react-i18next";

const RentalModalSelectTypes = ({ productType, adult, onChangeInput }) => {
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

  const { t } = useTranslation();

  const language = useTranslation().i18n.language;

  switch (productType) {
    case "boots":
      return (
        <>
          <CustomSelect
            placeholder={t("shoeSize_modal")}
            name="shoeSize"
            onChange={onChangeInput}
            options={adult ? shoeSizeOptionsAdult : shoeSizeOptionsChild}
            styles={customStyles}
            isSearchable={false}
            required
          />

          <CustomSelect
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
          <CustomSelect
            placeholder={t("height_modal")}
            name="height"
            styles={customStyles}
            onChange={onChangeInput}
            options={adult ? heightOptionsAdult : heightOptionsChild}
            isSearchable={false}
            required
          />

          <CustomSelect
            placeholder={t("weight_modal")}
            name="weight"
            styles={customStyles}
            onChange={onChangeInput}
            options={adult ? weightOptionsAdult : weightOptionsChild}
            isSearchable={false}
            required
          />

          <CustomSelect
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

          <CustomSelect
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
          <CustomSelect
            placeholder={t("height_modal")}
            name="height"
            styles={customStyles}
            onChange={onChangeInput}
            options={adult ? heightOptionsAdult : heightOptionsChild}
            isSearchable={false}
            required
          />

          <CustomSelect
            placeholder={t("weight_modal")}
            name="weight"
            styles={customStyles}
            onChange={onChangeInput}
            options={adult ? weightOptionsAdult : weightOptionsChild}
            isSearchable={false}
            required
          />

          <CustomSelect
            placeholder={t("shoeSize_modal")}
            name="shoeSize"
            styles={customStyles}
            onChange={onChangeInput}
            options={adult ? shoeSizeOptionsAdult : shoeSizeOptionsChild}
            isSearchable={false}
            required
          />

          <CustomSelect
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

          <CustomSelect
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
          <CustomSelect
            placeholder={t("timePeriod_modal")}
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

export default RentalModalSelectTypes;
