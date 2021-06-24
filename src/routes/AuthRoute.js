import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import AppWrapper from "../components/AppWrapper";

function AuthRoute(props) {
  const { path, exact, component: Component } = props;
  const [isAuthenticated, setAuthentication] = useState(true);
  return isAuthenticated ? (
    <Route path={path} exact={exact}>
      <AppWrapper>
        <Component />
      </AppWrapper>
    </Route>
  ) : (
    <Redirect to="/login" />
  );
}

export default AuthRoute;
