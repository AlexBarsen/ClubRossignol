import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsOrdersLoaded } from "../../../../redux/order/order.selectors";
import WithSpinner from "../../WithSpinner/index";
import AdminOrders from "./index";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsOrdersLoaded(state),
});

const AdminOrderContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(AdminOrders);

export default AdminOrderContainer;
