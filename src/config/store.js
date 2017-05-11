import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createHashHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import reducers from '../data/reducers';

// Use hash history
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

export default store;