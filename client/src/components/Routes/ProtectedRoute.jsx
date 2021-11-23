import React from "react";
import { useAuthListener } from "./AuthListener";
import { Redirect } from "react-router-dom";

import WithSpinner from "../WithSpinner";

const ProtectedRoute = ({ isAuth, component, ...rest }) => {
  const Component = component;

  const { loggedIn, checkingStatus } = useAuthListener();

  return (
    <>
      {checkingStatus ? (
        <WithSpinner />
      ) : loggedIn ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/rental" }} />
      )}
    </>
  );
};

export default ProtectedRoute;
