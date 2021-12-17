import React, { useEffect } from "react";
import "./Notice.scss";
import { Image } from "react-bootstrap";
import ImportantIcon from "./warning.png";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const Notice = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const { t } = useTranslation();
  return (
    <div
      className="d-flex justify-content-center align-items-center p-5 pb-0"
      data-aos="fade-up"
    >
      <div className="icon-container">
        <Image src={ImportantIcon} className="icon-image" />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center ms-5">
        <span className="h4 text-center">
          <strong>{t("notice")}</strong>
        </span>

        <div>
          <Button
            variant="contained"
            href="/rental"
            className="mt-3 custom-button--blue text-center"
          >
            {t("rent_online")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Notice;
