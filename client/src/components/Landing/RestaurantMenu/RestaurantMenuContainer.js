import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsMenuLoaded } from "../../../redux/restaurant/restaurant.selectors";
import WithSpinner from "../WithSpinner/index";
import RestaurantMenu from "./index";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsMenuLoaded(state),
});

const RestaurantMenuContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(RestaurantMenu);

export default RestaurantMenuContainer;
