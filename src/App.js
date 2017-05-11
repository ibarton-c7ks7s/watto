import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './config/store';
import Products from './products/';
import SingleProduct from './single-product';

const App = () => (
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div className="Watto">
        <h1>Watto</h1>
        <Route exact path="/" component={Products}/>
        <Route path="/product/:id" component={SingleProduct}/>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;