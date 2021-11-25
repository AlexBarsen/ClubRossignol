import React from "react";
import { useAuthListener } from "./AuthListener";
import { Route, Redirect } from "react-router-dom";

import Spinner from "../Spinner/index";

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
