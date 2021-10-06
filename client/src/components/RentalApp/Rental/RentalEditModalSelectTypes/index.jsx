import React from "react";
import { useTranslation } from "react-i18next";

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

import { CustomSelect } from "./RentalEditModalSelectTypesElements";

const EditModalSelectTypes = ({
  productType,
  adult,
  onChangeInput,
  defaultValues,
}) => {
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
          <CustomSelect
            placeholder={t("shoeSize_modal")}
            name="shoeSize"
            defaultValue={
              defaultValues.shoeSize
                ? {
                    value: defaultValues.shoeSize,
                    label: defaultValues.shoeSize + " EUR",
                  }
                : null
            }
            onChange={onChangeInput}
            options={adult ? shoeSizeOptionsAdult : shoeSizeOptionsChild}
            styles={customStyles}
            isSearchable={false}
          />

          <CustomSelect
            placeholder={t("sex_modal")}
            name="sex"
            defaultValue={
              defaultValues.sex
                ? {
                    value: defaultValues.sex,
                    label: t(defaultValues.sex),
                  }
                : null
            }
            onChange={onChangeInput}
            options={language === "ro" ? sexOptionsRO : sexOptionsENG}
            styles={customStyles}
            isSearchable={false}
          />
        </>
      );
    case "skiSnow":
      return (
        <>
          <CustomSelect
            placeholder={t("height_modal")}
            name="height"
            defaultValue={
              defaultValues.height
                ? {
                    value: defaultValues.height,
                    label: defaultValues.height + " CM",
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={adult ? heightOptionsAdult : heightOptionsChild}
            isSearchable={false}
          />

          <CustomSelect
            placeholder={t("weight_modal")}
            name="weight"
            defaultValue={
              defaultValues.weight
                ? {
                    value: defaultValues.weight,
                    label: defaultValues.weight + " KG",
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={adult ? weightOptionsAdult : weightOptionsChild}
            isSearchable={false}
          />

          <CustomSelect
            placeholder={t("experience_modal")}
            name="experience"
            defaultValue={
              defaultValues.experience
                ? {
                    value: defaultValues.experience,
                    label: t(defaultValues.experience),
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={
              language === "ro" ? experienceOptionsRO : experienceOptionsENG
            }
            isSearchable={false}
          />

          <CustomSelect
            placeholder={t("sex_modal")}
            name="sex"
            defaultValue={
              defaultValues.sex
                ? {
                    value: defaultValues.sex,
                    label: t(defaultValues.sex),
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={language === "ro" ? sexOptionsRO : sexOptionsENG}
            isSearchable={false}
          />
        </>
      );
    case "equipment":
      return (
        <>
          <CustomSelect
            placeholder={t("height_modal")}
            name="height"
            defaultValue={
              defaultValues.height
                ? {
                    value: defaultValues.height,
                    label: defaultValues.height + " CM",
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={adult ? heightOptionsAdult : heightOptionsChild}
            isSearchable={false}
          />

          <CustomSelect
            placeholder={t("weight_modal")}
            name="weight"
            defaultValue={
              defaultValues.weight
                ? {
                    value: defaultValues.weight,
                    label: defaultValues.weight + " KG",
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={adult ? weightOptionsAdult : weightOptionsChild}
            isSearchable={false}
          />

          <CustomSelect
            placeholder={t("shoeSize_modal")}
            name="shoeSize"
            defaultValue={
              defaultValues.shoeSize
                ? {
                    value: defaultValues.shoeSize,
                    label: defaultValues.shoeSize + " EUR",
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={adult ? shoeSizeOptionsAdult : shoeSizeOptionsChild}
            isSearchable={false}
          />

          <CustomSelect
            placeholder={t("experience_modal")}
            name="experience"
            defaultValue={
              defaultValues.experience
                ? {
                    value: defaultValues.experience,
                    label: t(defaultValues.experience),
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={
              language === "ro" ? experienceOptionsRO : experienceOptionsENG
            }
            isSearchable={false}
          />

          <CustomSelect
            placeholder={t("sex_modal")}
            name="sex"
            defaultValue={
              defaultValues.sex
                ? {
                    value: defaultValues.sex,
                    label: t(defaultValues.sex),
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={language === "ro" ? sexOptionsRO : sexOptionsENG}
            isSearchable={false}
          />
        </>
      );
    case "bike":
      return (
        <>
          <CustomSelect
            placeholder={t("timePeriod_modal")}
            name="timePeriod"
            defaultValue={
              defaultValues.timePeriod
                ? {
                    value: defaultValues.timePeriod,
                    label:
                      defaultValues.timePeriod === "per_day"
                        ? `${t("per_day")}`
                        : defaultValues.timePeriod === "2h"
                        ? `${t("2h")}`
                        : `${t("4h")}`,
                  }
                : null
            }
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

export default EditModalSelectTypes;
