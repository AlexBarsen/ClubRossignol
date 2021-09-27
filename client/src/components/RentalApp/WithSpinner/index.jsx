import React from "react";
import Spinner from "../../Spinner/index";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "./WithSpinnerElements";

// * HOC (Higher Order Component) which renders a "Spinner"
// * until the data finishes fetching from Firestore
const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, checkUserSession, error = null, ...otherProps }) => {
    return isLoading ? (
      error ? (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/iRjGBZj.png" />
          <ErrorImageText>
            Some error occured, sorry for the inconvenience.
          </ErrorImageText>
        </ErrorImageOverlay>
      ) : (
        <Spinner />
      )
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

export default WithSpinner;
