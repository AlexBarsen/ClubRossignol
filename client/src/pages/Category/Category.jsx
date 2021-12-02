import React from "react";
import { connect } from "react-redux";

import { CategoryProductsContainer } from "./CategoryElements.js";

import EquipmentCard from "../../components/rentalApplication/rental/EquipmentCard/EquipmentCard";
import { selectRentalCategory } from "../../redux/rental/rental.selectors";

const CategoryPage = ({ category }) => {
  if (!category) throw Error;
  const { categoryName, products } = category;

  return (
    <div className="d-flex justify-content-center pt-4">
      <CategoryProductsContainer type={categoryName}>
        {products.map((product) => (
          <EquipmentCard key={product.productID} item={product} />
        ))}
      </CategoryProductsContainer>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectRentalCategory(ownProps.match.params.categoryName)(state),
});

export default connect(mapStateToProps)(CategoryPage);
