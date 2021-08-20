import React, { useEffect } from "react";
import { connect } from "react-redux";

import RentalOverviewContainer from "../../components/oldProj/rental-overview/rental-overview";

import { fetchRentalsStart } from "../../redux/rental/rental.actions";

const RentalPage = ({ fetchRentalsStart }) => {
  useEffect(() => {
    fetchRentalsStart();
  }, [fetchRentalsStart]);

  // * CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))
  // * wrrapped the WithSpinner(CollectionOverview) into a Container
  return (
    <div className="rental-page background">
      <RentalOverviewContainer />
    </div>
  );
};

// * dispatch actions to Redux store
const mapDispatchToProps = (dispatch) => ({
  fetchRentalsStart: () => dispatch(fetchRentalsStart()),
});

export default connect(null, mapDispatchToProps)(RentalPage);
