import React from "react";
import { Route, Redirect } from "react-router-dom";
import Spinner from "../Spinner/index";

import { useAuthListener } from "./AuthListener";

const PrivateRoute = ({ component, match }) => {
  const Component = component;

  const { loggedIn, checkingStatus, userRole } = useAuthListener();

  return (
    <Route
      exact
      path={`${match.path}/admin`}
      render={() =>
        checkingStatus ? (
          <Spinner />
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
