import React from "react";
import { RentalFAQ_data } from "./RentalFAQ_data";

const RentalFAQ = () => {
  RentalFAQ_data.map((question) => console.log(question));
  return (
    <>
      {RentalFAQ_data.map((question, index) => (
        <div key={index} className="mt-3">
          <strong>
            <li style={{ fontSize: "1.1rem" }}>{question.question}</li>
          </strong>
          <span>
            {question.anwser}
            {question.boldAnwser ? (
              <div className="mt-1">
                <strong>{question.boldAnwser}</strong>
              </div>
            ) : null}
          </span>
          {question.ul ? (
            <ul>
              {question.ul.map((element) => (
                <strong>
                  <li>{element}</li>
                </strong>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </>
  );
};

export default RentalFAQ;
