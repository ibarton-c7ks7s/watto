import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import mapDispatchToProps from '../common/action-mapper';
import ProductBrief from './brief-product/';
import './products.css';

class Products extends Component {

    static propTypes = {
        fetchProducts: PropTypes.func.isRequired,
        $$products: PropTypes.instanceOf(List).isRequired
    };

    componentDidMount () {
        if (this.props.$$products.size === 0) {
            this.props.fetchProducts();
        }
    }

    render () {
        return (
            <div className="Products">
                <h2>Starfighters for Sale</h2>
                {
                    this.props.$$products.map(($$product, i) => (
                        <ProductBrief key={`${i}-${$$product.get('name')}`} 
                            $$product={$$product} 
                            index={i} />
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = ($$state, ownProps) => {
    return {
        $$products: $$state.getIn(['products', 'items'])
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);