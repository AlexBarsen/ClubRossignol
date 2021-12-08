import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsUserLoaded } from "../../../../../redux/user/user.selectors";

import WithSpinner from "../../../../utils/WithSpinner/WithSpinner";
import UserCard from "./UserCard";

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsUserLoaded(state),
});

const UserInformationContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(UserCard);

export default UserInformationContainer;
