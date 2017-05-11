import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutablejs';
import createHistory from 'history/createHashHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import productsReducer from '../data/products-reducer';
// Use hash history
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const routeHistoryMiddleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    products: productsReducer,
    router: routerReducer
  }),
  applyMiddleware(thunk, routeHistoryMiddleware)
);

export default store;