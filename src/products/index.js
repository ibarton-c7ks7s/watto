import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchProducts } from '../data/products-actions';
import ProductBrief from './brief-product/';
import './products.css';

class Products extends Component {

    static propTypes = {
        fetchProducts: PropTypes.func
    };

    componentDidMount () {
        this.props.fetchProducts();
    }

    render () {
        return (
            <div className="Products">
                <h2>Products View</h2>
                {
                    this.props.products.map($$product => <ProductBrief $$product={$$product} />)
                }
            </div>
        )
    }
}

const mapStateToProps = ($$state, ownProps) => {
    return {
        products: $$state.getIn(['products', 'items'])
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);