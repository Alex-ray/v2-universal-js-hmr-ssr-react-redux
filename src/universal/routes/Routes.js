// Libraries
import React, {Component, PropTypes} from  'react';
import {Route, Redirect} from 'react-router';

// Routes
// import * as Routes from 'universal/routes/index.js';

// Containers
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
      <div className={background}>
        <Route exact location={location} path='/' render={() => {return (<div>HELLO WORLD!</div>);}} />
      </div>
    );
  }
}

export default Routes;
