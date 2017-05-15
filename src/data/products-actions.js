import 'isomorphic-fetch';

// constants for action names
export const PRODUCTS_FETCH_STARTED = 'PRODUCTS_FETCH';
export const PRODUCTS_FETCH_COMPLETED = 'PRODUCTS_FETCH_COMPLETED';
export const PRODUCTS_FETCH_FAILED = 'PRODUCTS_FETCH_FAILED';

// get products and return those products or
// an error code as needed.
export const fetchProducts = () => (dispatch, getState) => {
    dispatch({
        type: PRODUCTS_FETCH_STARTED
    });
    return fetch('http://demo7475333.mockable.io/spaceships', {
        mode: 'cors'
    })
        .then(res => res.json())
        .then(list => {
            const { products } = list;
            return dispatch({
                type: PRODUCTS_FETCH_COMPLETED,
                payload: {
                    products
                }
            })
        })
        .catch(err => {
            return dispatch({
                type: PRODUCTS_FETCH_FAILED,
                payload: {
                    error: err.message
                }
            })
        });
};