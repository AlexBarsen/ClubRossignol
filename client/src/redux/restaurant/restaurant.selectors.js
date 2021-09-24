import { createSelector } from "reselect";

const selectRestaurant = (state) => state.restaurant;

export const selectRestaurantMenu = createSelector(
  [selectRestaurant],
  (restaurant) => restaurant.menu
);

export const selectMenuArray = createSelector([selectRestaurantMenu], (menu) =>
  menu ? Object.keys(menu).map((key) => menu[key]) : []
);

export const selectIsMenuLoaded = createSelector(
  [selectRestaurant],
  (restaurant) => !!restaurant.menu
);

export const selectRestaurantError = createSelector(
  [selectRestaurant],
  (restaurant) => restaurant.error
);
