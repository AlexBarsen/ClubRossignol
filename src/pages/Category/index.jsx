import React from "react";
import { connect } from "react-redux";
import RentalItem from "../../components/RentalApp/RentalItem/index";
import {
  selectRentalCategory,
  selectRentals,
} from "../../redux/rental/rental.selectors";

import {
  CategoryPageContainer,
  Title,
  CategoryProductsContainer,
} from "./CategoryElements";

const CategoryPage = ({ category, rentals }) => {
  console.log(category);
  const { categoryName, products } = category;
  console.log(categoryName, products);
  return (
    <CategoryPageContainer>
      <Title></Title>
      <CategoryProductsContainer>
        {products.map((product) => (
          <RentalItem key={product.id} item={product} />
        ))}
      </CategoryProductsContainer>
    </CategoryPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectRentalCategory(ownProps.match.params.categoryName)(state),
  rentals: selectRentals,
});

export default connect(mapStateToProps)(CategoryPage);
