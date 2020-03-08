import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import isAuthenticated from "./auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    {/* Switch garante a abertura apenas de uma url por vez e ajuda a manipular as urls */}
    <Switch>
      {/* exct garante que a rota sera exatamente aquela e não as outras rotas */}
      <Route exact path="/" component={() => <h1>Hello World</h1>} />
      <PrivateRoute path="/app" component={() => <h1>Você esta Logado!</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
