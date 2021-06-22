import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { token } from "../redux/selectors/auth.selector";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const state = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        state && state.token !== undefined ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};
