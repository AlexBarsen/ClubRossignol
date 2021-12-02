import React from "react";
import { useTranslation } from "react-i18next";

import Select from "react-select";
import Container from "react-bootstrap/Container";

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

const EditFormSelects = ({ type, adult, onChangeInput, defaultValues }) => {
  const { t } = useTranslation();

  // * <Select> custom styles
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontSize: "1rem",
    }),
    menu: (provided, state) => ({
      ...provided,
      fontSize: "1rem",
      textAlign: "center",
    }),
  };

  const language = useTranslation().i18n.language;

  switch (type) {
    case "boots":
      return (
        <Container className="d-flex justify-content-between p-0">
          <div style={{ width: "48%" }}>
            <Select
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
          </div>

          <div style={{ width: "48%" }}>
            <Select
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
          </div>
        </Container>
      );
    case "skiSnow":
      return (
        <Container className="p-0">
          <Container className="d-flex justify-content-between p-0 mb-3">
            <div style={{ width: "48%" }}>
              <Select
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
            </div>

            <div style={{ width: "48%" }}>
              <Select
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
            </div>
          </Container>

          <Container className="d-flex justify-content-between p-0">
            <div style={{ width: "48%" }}>
              <Select
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
            </div>

            <div style={{ width: "48%" }}>
              <Select
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
            </div>
          </Container>
        </Container>
      );
    case "equipment":
      return (
        <Container className="p-0">
          <Container className="d-flex justify-content-between p-0 mb-3">
            <div style={{ width: "48%" }}>
              <Select
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
            </div>

            <div style={{ width: "48%" }}>
              <Select
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
            </div>
          </Container>

          <Container className="d-flex justify-content-between p-0 mb-3">
            <div style={{ width: "48%" }}>
              <Select
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
            </div>

            <div style={{ width: "48%" }}>
              <Select
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
            </div>
          </Container>

          <div style={{ width: "48%" }}>
            <Select
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
          </div>
        </Container>
      );
    case "bike":
      return (
        <>
          <Select
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

export default EditFormSelects;
