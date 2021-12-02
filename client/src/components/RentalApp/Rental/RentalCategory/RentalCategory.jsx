import React from "react";

import { CategoryItems } from "./RentalCategoryElements";

import RentalCard from "../RentalCard/RentalCard";

const RentalCategory = ({ categoryName, products }) => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div>{categoryName}</div>
        <CategoryItems type={categoryName}>
          {products.map((item) => (
            <RentalCard key={item.id} item={item} />
          ))}
        </CategoryItems>
      </div>
    </>
  );
};

export default RentalCategory;
