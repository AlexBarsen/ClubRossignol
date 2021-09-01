import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCategoriesLoaded } from "../../redux/rental/rental.selectors";
import WithSpinner from "../../components/RentalApp/WithSpinner/index";
import CategoryPage from "./index";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCategoriesLoaded(state),
});

const CategoryPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CategoryPage);

export default CategoryPageContainer;
