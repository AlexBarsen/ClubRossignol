import React from "react";
import { connect } from "react-redux";
import RentalItem from "../../components/RentalApp/RentalItem/index";
import { selectRentalCategory } from "../../redux/rental/rental.selectors";

import {
  CategoryPageContainer,
  Title,
  CategoryProductsContainer,
  Element,
} from "./CategoryElements.js";

const CategoryPage = ({ category }) => {
  const { categoryName, products } = category;

  return (
    <CategoryPageContainer key={categoryName}>
      <Title>{categoryName}</Title>
      <Element>
        <CategoryProductsContainer type={categoryName}>
          {products.map((product) => (
            <RentalItem
              specificCategory={true}
              key={product.id}
              item={product}
            />
          ))}
        </CategoryProductsContainer>
      </Element>
    </CategoryPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectRentalCategory(ownProps.match.params.categoryName)(state),
});

export default connect(mapStateToProps)(CategoryPage);
