import { createReducer } from 'redux-immutablejs';
import { fromJS, List } from 'immutable';
import { 
    PRODUCTS_FETCH_STARTED, 
    PRODUCTS_FETCH_COMPLETED, 
    PRODUCTS_FETCH_FAILED 
} from './products-actions';

const initialState = {
    isLoading: false,
    items: new List([])
};

export default createReducer(initialState, {
    [PRODUCTS_FETCH_STARTED]: ($$state, action) => {
        return $$state.set('isLoading', true);
    },
    [PRODUCTS_FETCH_COMPLETED]: ($$state, action) => {
        return $$state.set('isLoading', false).set('items', fromJS(action.payload.products));
    },
    [PRODUCTS_FETCH_FAILED]: ($$state, action) => {
        console.error(action.payload.error);
        return $$state.set('isLoading', false).set('error', action.payload.error);
    }
});