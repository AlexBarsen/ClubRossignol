import React from "react";

import {
  RentalModalInfoContainer,
  Message,
  Dates,
  DateContent,
} from "./RentalModalInfoElements";

const RentalModalInfo = ({ startDate, endDate, days }) => {
  return (
    <>
      <RentalModalInfoContainer>
        <Message>
          Rezervarile se pot face doar pentru ziua ce urmeaza, respectiv din{" "}
          {startDate}. Va rugam sa fiti atenti la completarea datelor!
        </Message>
        <Dates>
          <DateContent>Din data de: {startDate}</DateContent>
          <DateContent>Pana in data de: {endDate}</DateContent>
          <DateContent>
            Durata inchiriere: {days} {days === 1 ? "zi" : "zile"}
          </DateContent>
        </Dates>
      </RentalModalInfoContainer>
    </>
  );
};

export default RentalModalInfo;
