import React, { useEffect } from "react";
import { connect } from "react-redux";

import { RentalPageContainer } from "./RentaPageElements";

import RentalOverviewContainer from "../../components/oldProj/rental-overview/RentalOverviewContainer";

import { Header, Wrapper, Categories, Content } from "./RentaPageElements";

import { fetchRentalsStart } from "../../redux/rental/rental.actions";

const RentalPage = ({ fetchRentalsStart }) => {
  useEffect(() => {
    fetchRentalsStart();
  }, [fetchRentalsStart]);

  // * CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))
  // * wrrapped the WithSpinner(CollectionOverview) into a Container
  return (
    <RentalPageContainer>
      <Header />
      <Wrapper>
        <Categories></Categories>
        <Content></Content>
      </Wrapper>
      {/* <RentalOverviewContainer /> */}
    </RentalPageContainer>
  );
};

// * dispatch actions to Redux store
const mapDispatchToProps = (dispatch) => ({
  fetchRentalsStart: () => dispatch(fetchRentalsStart()),
});

export default connect(null, mapDispatchToProps)(RentalPage);
