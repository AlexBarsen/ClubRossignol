import React, { useState } from "react";
import { connect } from "react-redux";

import {
  RestaurantMenuContainer,
  RestaurantCategories,
  Element,
  MenuContainer,
  CategoryTitle,
  Message,
} from "./RestaurantMenuElements";

import RestaurantCategory from "../RestaurantCategory/index";
import RestaurantItem from "../RestaurantItem/index";

import { createStructuredSelector } from "reselect";
import { selectMenuArray } from "../../../redux/restaurant/restaurant.selectors";

const RestaurantMenu = ({ restaurantMenu }) => {
  const [menuItems, setMenuItems] = useState(null);
  const [category, setCategory] = useState(null);

  const filterMenu = (category, products) => {
    setMenuItems(products);
    setCategory(category);
  };

  return (
    <>
      <RestaurantMenuContainer>
        <RestaurantCategories>
          {restaurantMenu.map(({ categoryID, ...otherRentalProps }) => (
            <RestaurantCategory
              key={categoryID}
              {...otherRentalProps}
              filterMenu={filterMenu}
            />
          ))}
        </RestaurantCategories>

        <Element>
          {category ? (
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
          ) : null}
          <MenuContainer>
            {menuItems
              ? menuItems.map((item) => (
                  <RestaurantItem key={item.id} item={item} />
                ))
              : null}
          </MenuContainer>
          {menuItems ? null : (
            <Message>Selectati categoria dorita pentru vedea produsele</Message>
          )}
        </Element>
      </RestaurantMenuContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  restaurantMenu: selectMenuArray,
});

export default connect(mapStateToProps)(RestaurantMenu);
