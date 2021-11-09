import React from "react";
import { useTranslation } from "react-i18next";

import {
  RentalModalInfoContainer,
  Message,
  Dates,
  // DateContent,
  // BoldSpan,
} from "./RentalFormInfoElements";

const RentalFormInfo = ({ startDate, endDate, days, timePeriod }) => {
  const { t } = useTranslation();
  return (
    <>
      <RentalModalInfoContainer>
        <Message>
          {t("reservation_message_1")} {startDate}. {t("reservation_message_2")}
        </Message>

        <Dates className="h2">
          Ati selectat rezervare echipamentului pentru {days} zi din data de{" "}
          {startDate} pana in data de {endDate}.
          {/* <DateContent>
            {t("from")}:<BoldSpan>{startDate}</BoldSpan>
          </DateContent>
          <DateContent>
            {t("to")}:<BoldSpan>{endDate}</BoldSpan>
          </DateContent>
          <DateContent>
            {t("number_of_days")}:
            <BoldSpan>
              {days} {days === 1 ? "zi" : "zile"}
            </BoldSpan>
            {timePeriod
              ? timePeriod === "days"
                ? null
                : `(${timePeriod})`
              : null}
          </DateContent> */}
        </Dates>
      </RentalModalInfoContainer>
    </>
  );
};

export default RentalFormInfo;
