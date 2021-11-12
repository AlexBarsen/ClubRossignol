import React from "react";
import { connect } from "react-redux";

import { CategoryProductsContainer } from "./CategoryElements.js";

import RentalCard from "../../components/RentalApp/Rental/RentalCard/RentalCard";
import { selectRentalCategory } from "../../redux/rental/rental.selectors";

const CategoryPage = ({ category }) => {
  if (!category) throw Error;
  const { categoryName, products } = category;

  return (
    <div className="d-flex justify-content-center">
      <CategoryProductsContainer type={categoryName}>
        {products.map((product) => (
          <RentalCard key={product.productID} item={product} />
        ))}
      </CategoryProductsContainer>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectRentalCategory(ownProps.match.params.categoryName)(state),
});

export default connect(mapStateToProps)(CategoryPage);