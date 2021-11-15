import React from "react";
import { useTranslation } from "react-i18next";

const RentalFormInfo = ({
  startDate,
  endDate,
  days,
  productName,
  timePeriod,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="d-flex flex-column">
        <div className="text-center px-2" style={{ fontSize: "1.1rem" }}>
          {t("reservation_message_1")} <strong>{startDate}.</strong>
          {t("reservation_message_2")} Ati selectat rezervarea ununi echipament
          de tip <strong> {t(productName)}</strong> pentru{" "}
          <strong>{days}</strong> zi din data de <strong>{startDate} </strong>{" "}
          pana in data de <strong>{endDate}</strong>.
        </div>
      </div>
    </>
  );
};

export default RentalFormInfo;
