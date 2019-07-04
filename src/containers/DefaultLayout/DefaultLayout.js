import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchLogout } from "modules/auth";
import { Link } from 'react-router-dom';
import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../Routes/routes';

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {
  loading = () => <div className="animated fadeIn pt-1 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;

  signOut(e) {
    e.preventDefault()
    this.props.userLogout()
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={e => this.signOut(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader >
                <img src="assets/img/avatars/8.jpg" className="img-avatar" alt="Avatar"></img>
                <div><strong>JOHN DOE</strong></div>
                <div className="text-muted"><small>Founder & CEO</small></div>
              <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                <Link to="/settings"> <button type="button" className="btn btn-link"><i className="icon-settings"></i></button></Link>
                <Link to="/contact"> <button type="button" className="btn btn-link"><i className="icon-speech"></i></button></Link>
                <Link to="/profile"> <button type="button" className="btn btn-link"><i className="icon-user"></i></button></Link>
              </div>
            </AppSidebarHeader>
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav navConfig={navigation} {...this.props} />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <Container fluid className="mt-4 mb-4">
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/sales" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogout: () => {
      dispatch(fetchLogout());
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
    null
  )(DefaultLayout)
);
