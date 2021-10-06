import React from "react";
import { useTranslation } from "react-i18next";

import {
  RentalModalInfoContainer,
  Message,
  Dates,
  DateContent,
  BoldSpan,
} from "./RentalModalInfoElements";

const RentalModalInfo = ({ startDate, endDate, days, timePeriod }) => {
  const { t } = useTranslation();
  return (
    <>
      <RentalModalInfoContainer>
        <Message>
          {t("reservation_message_1")} {startDate}. {t("reservation_message_2")}
        </Message>

        <Dates>
          <DateContent>
            Din data de:<BoldSpan>{startDate}</BoldSpan>
          </DateContent>
          <DateContent>
            Pana in data de:<BoldSpan>{endDate}</BoldSpan>
          </DateContent>
          <DateContent>
            Durata inchiriere:
            <BoldSpan>
              {days} {days === 1 ? "zi" : "zile"}
            </BoldSpan>
            {timePeriod
              ? timePeriod === "days"
                ? null
                : `(${timePeriod})`
              : null}
          </DateContent>
        </Dates>
      </RentalModalInfoContainer>
    </>
  );
};

export default RentalModalInfo;
