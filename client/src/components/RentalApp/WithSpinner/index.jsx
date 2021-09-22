import React from "react";
import Spinner from "../../Spinner/index";

// * HOC (Higher Order Component) which renders a "Spinner"
// * until the data finishes fetching from Firestore
const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  };

export default WithSpinner;
