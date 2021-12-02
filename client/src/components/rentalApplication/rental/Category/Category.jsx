import React from "react";

import { CategoryItems } from "./CategoryElements.js";

import EquipmentCard from "../EquipmentCard/EquipmentCard";

const Category = ({ categoryName, products }) => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="h2 mb-5">
          <strong>{categoryName}</strong>
        </div>
        <CategoryItems type={categoryName}>
          {products.map((item) => (
            <EquipmentCard key={item.id} item={item} />
          ))}
        </CategoryItems>
      </div>
    </>
  );
};

export default Category;
