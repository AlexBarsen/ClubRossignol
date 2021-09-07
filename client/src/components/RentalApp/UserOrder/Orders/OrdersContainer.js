import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsUserOrdersLoaded } from "../../../../redux/user/user.selectors";
import WithSpinner from "../../WithSpinner/index";
import Orders from "./index";

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsUserOrdersLoaded(state),
});

const OrdersContainer = compose(connect(mapStateToProps), WithSpinner)(Orders);

export default OrdersContainer;
