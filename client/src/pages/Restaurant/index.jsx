import React, { useEffect } from "react";

import { connect } from "react-redux";

import RestaurantCategory from "../../components/Landing/RestaurantCategory/index";

import { fetchRestaurantMenuStart } from "../../redux/restaurant/restaurant.actions";

import { orderRestaurantMenuCollection } from "../../firebase/firebase.utils";

const RestaurantPage = ({ fetchRestaurantMenuStart }) => {
  useEffect(() => {
    fetchRestaurantMenuStart();
  }, [fetchRestaurantMenuStart]);

  orderRestaurantMenuCollection();
  return <> </>;
};

const mapDispatchToProps = (dispatch) => ({
  fetchRestaurantMenuStart: () => dispatch(fetchRestaurantMenuStart()),
});

export default connect(null, mapDispatchToProps)(RestaurantPage);
