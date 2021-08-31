import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import i18next from "i18next";
import ReactCountryFlag from "react-country-flag";

import {
  LanguagesListContainer,
  LanguagesList,
  Flag,
} from "./LanguagesDropdownElements";

const LanguagesDropdown = () => {
  const languages = [
    {
      code: "ro",
      name: "româna",
      country_code: "ro",
    },
    {
      code: "gb",
      name: "english",
      country_code: "gb",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggle = (code) => {
    i18next.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <>
      <LanguagesListContainer>
        <BiWorld
          size={30}
          style={{ position: "relative" }}
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen ? (
          <LanguagesList>
            {languages.map(({ code, name, country_code }) => (
              <Flag key={country_code} onClick={() => toggle(code)}>
                <ReactCountryFlag
                  countryCode={country_code}
                  style={{
                    width: "3rem",
                    height: "3rem",
                    margin: "0.5rem",
                  }}
                  svg
                />
                {name}
              </Flag>
            ))}
          </LanguagesList>
        ) : null}
      </LanguagesListContainer>
    </>
  );
};

export default LanguagesDropdown;
