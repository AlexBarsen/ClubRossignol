import React from "react";
import { useAuthListener } from "../AuthListener/AuthListener";
import { Route, Redirect } from "react-router-dom";

import Spinner from "../../utils/Spinner/Spinner";

const ProtectedRoute = ({ component, match, ...rest }) => {
  const Component = component;

  const { loggedIn, checkingStatus } = useAuthListener();

  return (
    <Route
      exact
      path={`${match.path}/dashboard`}
      {...rest}
      render={() =>
        checkingStatus ? (
          <Spinner />
        ) : loggedIn ? (
          <Component />
        ) : (
          <Redirect to="/rental" />
        )
      }
    />
  );
};

export default ProtectedRoute;
