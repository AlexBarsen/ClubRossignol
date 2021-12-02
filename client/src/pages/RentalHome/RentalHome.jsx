import React from "react";
import RentalFAQ from "../../components/RentalApp/Rental/RentalFAQ/RentalFAQ";

import RentalSteps from "../../components/RentalApp/RentalSteps/RentalSteps";
import {
  WinterPricesTable,
  BikePricesTable,
} from "../../components/RentalApp/PricesTable/PricesTable";
import { Image } from "react-bootstrap";

const RentalHome = () => {
  return (
    <>
      <div className="h4 text-center my-5">
        <div className="mt-4">
          <Image src="https://firebasestorage.googleapis.com/v0/b/rental-clubrossignol.appspot.com/o/SVG%2FLogo%2Flogo_big_white.svg?alt=media&token=f30ead73-fbc0-488a-988d-a59b8d38c5e1" />
        </div>

        <div className="mt-3">
          <strong>Totul simplu si rapid in doar 4 pasi.</strong>
        </div>
      </div>

      <RentalSteps />

      <h2 className="text-center mt-5">Lista preturi</h2>
      <div className="d-flex justify-content-around mt-4">
        <div>
          <WinterPricesTable />
        </div>

        <div>
          <BikePricesTable />
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-5 h3 text-center">
          <strong>Frequently asked questions</strong>
        </div>

        <ol>
          <RentalFAQ />
        </ol>
      </div>
    </>
  );
};

export default RentalHome;
