import { fetchProducts } from '../data/products-actions';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    };
};

export default mapDispatchToProps;