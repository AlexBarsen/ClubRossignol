import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import {
  selectIsUserOrdersLoaded,
  selectUserOrdersError,
} from "../../../../redux/user/user.selectors";

import WithSpinner from "../../../WithSpinner/WithSpinner";
import Orders from "./Orders";

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsUserOrdersLoaded(state),
  error: (state) => selectUserOrdersError(state),
});

const OrdersContainer = compose(connect(mapStateToProps), WithSpinner)(Orders);

export default OrdersContainer;
