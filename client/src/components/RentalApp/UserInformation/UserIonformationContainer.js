import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsUserLoaded } from "../../../redux/user/user.selectors";
import WithSpinner from "../WithSpinner/index";
import UserInformation from "./index";

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsUserLoaded(state),
});

const UserInformationContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(UserInformation);

export default UserInformationContainer;
