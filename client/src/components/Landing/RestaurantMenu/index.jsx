import React, { useState } from "react";

import { connect } from "react-redux";

import RestaurantCategory from "../RestaurantCategory/index";

import RestaurantItem from "../RestaurantItem/index";

import {
  RestaurantMenuContainer,
  RestaurantCategories,
  MenuContainer,
} from "./RestaurantMenuElements";
import { createStructuredSelector } from "reselect";
import { selectMenuArray } from "../../../redux/restaurant/restaurant.selectors";

const RestaurantMenu = ({ restaurantMenu }) => {
  const [menuItems, setMenuItems] = useState(null);

  const filterMenu = (items) => {
    setMenuItems(items);
  };

  console.log(restaurantMenu);
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

        <MenuContainer>
          {menuItems
            ? menuItems.map((item) => (
                <RestaurantItem key={item.productID} item={item} />
              ))
            : null}
        </MenuContainer>
      </RestaurantMenuContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  restaurantMenu: selectMenuArray,
});

export default connect(mapStateToProps)(RestaurantMenu);
