import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './config/store';
import Products from './products/';
import SingleProduct from './single-product/';
import './app.css';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="Watto">
        <div className="Watto-header">
            <h1>Watto</h1>
        </div>
        <div className="Watto-content">
            <Route exact path="/" component={Products}/>
            <Route path="/product/:id" component={SingleProduct}/>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;