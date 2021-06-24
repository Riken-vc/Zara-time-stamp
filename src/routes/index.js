import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import AuthRoute from "./AuthRoute";
import routes from "./routesConfig";

function Routes() {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, exact, auth, Component }) =>
          auth ? (
            <AuthRoute
              path={path}
              exact={exact}
              component={Component}
              key={path}
            />
          ) : (
            <Route path={path} exact={exact} key={path}>
              <Component />
            </Route>
          )
        )}
      </Switch>
    </Router>
  );
}

export default Routes;
