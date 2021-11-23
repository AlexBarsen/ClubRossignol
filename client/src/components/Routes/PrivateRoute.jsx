import React from "react";
import { Route, Redirect } from "react-router-dom";
import WithSpinner from "../WithSpinner";

import { useAuthListener } from "./AuthListener";

const PrivateRoute = ({ component, match }) => {
  const Component = component;

  const { loggedIn, checkingStatus, userRole } = useAuthListener();

  console.log(userRole);

  return (
    <Route
      exact
      path={`${match.path}/admin`}
      render={() =>
        checkingStatus ? (
          <WithSpinner />
        ) : loggedIn ? (
          userRole === "admin" ? (
            <Component />
          ) : (
            <Redirect to="/rental" />
          )
        ) : (
          <Redirect to="/rental" />
        )
      }
    />
  );
};

export default PrivateRoute;
