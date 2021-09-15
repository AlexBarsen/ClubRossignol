import React, { useState } from "react";

import { connect } from "react-redux";

import RestaurantCategory from "../RestaurantCategory/index";

import RestaurantItem from "../RestaurantItem/index";

import {
  RestaurantMenuContainer,
  RestaurantCategories,
  MenuContainer,
  Element,
  Message,
} from "./RestaurantMenuElements";
import { createStructuredSelector } from "reselect";
import { selectMenuArray } from "../../../redux/restaurant/restaurant.selectors";

const RestaurantMenu = ({ restaurantMenu }) => {
  const [menuItems, setMenuItems] = useState(null);

  const filterMenu = (items) => {
    setMenuItems(items);
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
          <MenuContainer>
            {menuItems
              ? menuItems.map((item) => (
                  <RestaurantItem key={item.productID} item={item} />
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
