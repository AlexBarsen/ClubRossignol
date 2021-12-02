import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { isRentalFetching } from "../../../../redux/rental/rental.selectors";
import WithSpinner from "../../../utils/WithSpinner/WithSpinner.jsx";
import Overview from "./Overview";

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  isLoading: isRentalFetching,
});

// * wrapped HOC WithSpinner(CollectionsOverview) into a Container to simplify the
// * rental.component.jsx

// * use compose to evaluate and chain multiple functions
// * => CollectionsOverviewContainer =
// * connect(mapStateToProps)(WithSpinner(CollectionsOverview))
const OverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Overview);

export default OverviewContainer;
