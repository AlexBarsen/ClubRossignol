import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ isAuth, component, ...rest }) => {
  const Component = component;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          if (isAuth.role === "admin") {
            return <Component />;
          }
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

export default PrivateRoute;
