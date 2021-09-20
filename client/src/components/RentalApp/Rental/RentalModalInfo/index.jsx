import React from "react";

import {
  RentalModalInfoContainer,
  Message,
  Dates,
  DateContent,
  BoldSpan,
} from "./RentalModalInfoElements";

const RentalModalInfo = ({ startDate, endDate, days, timePeriod }) => {
  return (
    <>
      <RentalModalInfoContainer>
        <Message>
          Rezervarile se pot face doar pentru ziua ce urmeaza, respectiv din{" "}
          {startDate}. Va rugam sa fiti atenti la completarea datelor!
        </Message>
        <Dates>
          <DateContent>
            Din data de: <BoldSpan>{startDate}</BoldSpan>
          </DateContent>
          <DateContent>
            Pana in data de: <BoldSpan>{endDate}</BoldSpan>
          </DateContent>
          <DateContent>
            Durata inchiriere:
            <BoldSpan>
              {days} {days === 1 ? "zi" : "zile"}
            </BoldSpan>
            {timePeriod ? ` (${timePeriod})` : null}
          </DateContent>
        </Dates>
      </RentalModalInfoContainer>
    </>
  );
};

export default RentalModalInfo;
