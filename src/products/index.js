import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import mapDispatchToProps from '../common/action-mapper';
import ProductBrief from './brief-product/';
import ErrorDialog from '../common/components/error-dialog/';
import './products.css';

class Products extends Component {

    static propTypes = {
        fetchProducts: PropTypes.func.isRequired,
        $$products: PropTypes.instanceOf(List).isRequired,
        error: PropTypes.string,
        isLoading: PropTypes.bool
    };

    componentDidMount () {
        // don't fetch if we already have a populated
        // list. this will save on network requests.
        if (this.props.$$products.size === 0) {
            this.props.fetchProducts();
        }
    }

    render () {
        const { error, isLoading, $$products } = this.props
        if (isLoading) {
            return (
                <div className="Products">
                    <p>Loading, please wait...</p>
                </div>
            )
        }
        if (error) {
            return (
                <div className="Products">
                    <ErrorDialog error={error} />
                </div>
            )
        }
        return (
            <div className="Products">
                <h2>Starfighters for Sale</h2>
                {
                    $$products.map(($$product, i) => (
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
        $$products: $$state.getIn(['products', 'items']),
        error: $$state.getIn(['products', 'error']),
        isLoading: $$state.getIn(['products', 'isLoading'])
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);