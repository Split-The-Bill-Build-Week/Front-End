import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const Component = props.component
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          // if token is in localStorage, render the given component
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;