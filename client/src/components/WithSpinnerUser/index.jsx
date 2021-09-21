import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./WithSpinnerUserElements";

const WithSpinnerUser =
  (WrappedComponent) =>
  ({ isLoading, currentUser, checkUserSession, ...otherProps }) => {
    console.log(checkUserSession, "ses");
    console.log(currentUser, "user");
    // console.log(isLoading, "load");

    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

export default WithSpinnerUser;
