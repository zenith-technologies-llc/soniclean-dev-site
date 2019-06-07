import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import { Redirect } from "react-router";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import AppRoutes from './Routes/AppRoutes'
import AuthRoute from "./Routes/AuthRoute";

import './App.scss';

class App extends Component {

  render() {
    return (
      <>
        <Switch>
          {AppRoutes.map((prop, key) => {
            if (prop.redirect)
              return (
                <Redirect from={prop.path} to={prop.to} key={key} />
              );
            return (
              <AuthRoute
                path={prop.path}
                component={prop.component}
                key={key}
                private={prop.private}
                name={prop.name}
              />
            );
          })}
        </Switch>
      </>
    );
  }
}

export default compose(
  withRouter,
  connect(
    ({ auth }) => ({
      loggedIn: auth.loggedIn,
    }),
    null
  )
)(App);

