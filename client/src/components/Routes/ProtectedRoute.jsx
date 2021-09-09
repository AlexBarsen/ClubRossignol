import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isAuth, component, ...rest }) => {
  const Component = component;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component />;
        }

        return (
          <Redirect
            to={{ pathname: "/rental", state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;
