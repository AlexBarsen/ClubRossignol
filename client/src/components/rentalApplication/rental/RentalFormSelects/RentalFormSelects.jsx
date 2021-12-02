import React from "react";
import { useTranslation } from "react-i18next";

import FixRequiredSelect from "../RentalForm/FixRequiredSelect";
import BaseSelect from "react-select";

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

const Select = (props) => (
  <FixRequiredSelect {...props} SelectComponent={BaseSelect} />
);

const RentalFormSelects = ({ type, adult, onChangeInput }) => {
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
              onChange={onChangeInput}
              options={adult ? shoeSizeOptionsAdult : shoeSizeOptionsChild}
              styles={customStyles}
              isSearchable={false}
              required
            />
          </div>

          <div style={{ width: "48%" }}>
            <Select
              placeholder={t("sex_modal")}
              name="sex"
              onChange={onChangeInput}
              options={language === "ro" ? sexOptionsRO : sexOptionsENG}
              styles={customStyles}
              isSearchable={false}
              required
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
                styles={customStyles}
                onChange={onChangeInput}
                options={adult ? heightOptionsAdult : heightOptionsChild}
                isSearchable={false}
                required
              />
            </div>

            <div style={{ width: "48%" }}>
              <Select
                placeholder={t("weight_modal")}
                name="weight"
                styles={customStyles}
                onChange={onChangeInput}
                options={adult ? weightOptionsAdult : weightOptionsChild}
                isSearchable={false}
                required
              />
            </div>
          </Container>

          <Container className="d-flex justify-content-between p-0">
            <div style={{ width: "48%" }}>
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
            </div>

            <div style={{ width: "48%" }}>
              <Select
                placeholder={t("sex_modal")}
                name="sex"
                styles={customStyles}
                onChange={onChangeInput}
                options={language === "ro" ? sexOptionsRO : sexOptionsENG}
                isSearchable={false}
                required
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
                styles={customStyles}
                onChange={onChangeInput}
                options={adult ? heightOptionsAdult : heightOptionsChild}
                isSearchable={false}
                required
              />
            </div>

            <div style={{ width: "48%" }}>
              <Select
                placeholder={t("weight_modal")}
                name="weight"
                styles={customStyles}
                onChange={onChangeInput}
                options={adult ? weightOptionsAdult : weightOptionsChild}
                isSearchable={false}
                required
              />
            </div>
          </Container>

          <Container className="d-flex justify-content-between p-0 mb-3">
            <div style={{ width: "48%" }}>
              <Select
                placeholder={t("shoeSize_modal")}
                name="shoeSize"
                styles={customStyles}
                onChange={onChangeInput}
                options={adult ? shoeSizeOptionsAdult : shoeSizeOptionsChild}
                isSearchable={false}
                required
              />
            </div>

            <div style={{ width: "48%" }}>
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
            </div>
          </Container>

          <div style={{ width: "48%" }}>
            <Select
              placeholder={t("sex_modal")}
              name="sex"
              styles={customStyles}
              onChange={onChangeInput}
              options={language === "ro" ? sexOptionsRO : sexOptionsENG}
              isSearchable={false}
              required
            />
          </div>
        </Container>
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
