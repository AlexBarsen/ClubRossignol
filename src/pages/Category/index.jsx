import React from "react";
import { connect } from "react-redux";
import RentalItem from "../../components/RentalApp/RentalItem/index";
import { selectRentalCategory } from "../../redux/rental/rental.selectors";

import {
  CategoryPageContainer,
  Title,
  CategoryProductsContainer,
} from "./CategoryElements.js";

const CategoryPage = ({ category }) => {
  const { categoryName, products } = category;

  return (
    <CategoryPageContainer>
      <Title>{categoryName}</Title>
      <CategoryProductsContainer type={categoryName}>
        {products.map((product) => (
          <RentalItem specificCategory={true} key={product.id} item={product} />
        ))}
      </CategoryProductsContainer>
    </CategoryPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectRentalCategory(ownProps.match.params.categoryName)(state),
});

export default connect(mapStateToProps)(CategoryPage);
