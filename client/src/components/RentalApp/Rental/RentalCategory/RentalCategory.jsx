import React from "react";

import { CategoryItems } from "./RentalCategoryElements";

import RentalCard from "../RentalCard/RentalCard";

const RentalCategory = ({ categoryName, products }) => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="h1 mb-3">{categoryName}</div>
        <CategoryItems type={categoryName}>
          {products.map((item) => (
            <RentalCard key={item.productID} item={item} />
          ))}
        </CategoryItems>
      </div>
    </>
  );
};

export default RentalCategory;
