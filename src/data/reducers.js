import { combineReducers } from 'redux-immutablejs';
import productsReducer from '../products/data/products-reducer';
import singleProductReducer from '../single-product/data/single-product-reducer';

export default combineReducers({
    products: productsReducer,
    singleProduct: singleProductReducer
});