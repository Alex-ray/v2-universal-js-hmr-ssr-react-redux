// Libraries
import React, {Component, PropTypes} from  'react';
import {Route, Redirect} from 'react-router';

// Routes
import * as RouteMap from 'universal/routes/index.js';

// Containers
import AppContainer from 'universal/containers/App/AppContainer.js';
// import PrivateRouteContainer from 'universal/containers/PrivateRoute/PrivateRouteContainer.js';

// Styles
import {
  background
} from 'universal/styles/global.less';

class Routes extends Component {
  render () {
    const {
      location
    } = this.props;

    return (
      <AppContainer>
        <div>
          <Route exact location={location} path='/' component={RouteMap.Home} />
          <Route exact location={location} path='/counter' component={RouteMap.Counter} />
        </div>
      </AppContainer>
    );
  }
}

export default Routes;
