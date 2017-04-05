import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from 'react-router-redux';

// import * as Reducers from './reducers';

export default (history) => {
  const middleware = routerMiddleware(history);

  const store = createStore(combineReducers({
    // ...Reducers,
    router: routerReducer
  }), applyMiddleware(middleware));

  return store;
}
