import React, { useEffect } from "react";

import { connect } from "react-redux";

import { fetchRestaurantMenuStart } from "../../redux/restaurant/restaurant.actions";

import RestaurantMenuContainer from "../../components/Landing/RestaurantMenu/RestaurantMenuContainer";

import { RestaurantPageContainer } from "./RestaurantElements";

const RestaurantPage = ({ fetchRestaurantMenuStart }) => {
  useEffect(() => {
    fetchRestaurantMenuStart();
  }, [fetchRestaurantMenuStart]);

  return (
    <>
      <RestaurantPageContainer>
        <RestaurantMenuContainer />
      </RestaurantPageContainer>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchRestaurantMenuStart: () => dispatch(fetchRestaurantMenuStart()),
});

export default connect(null, mapDispatchToProps)(RestaurantPage);
