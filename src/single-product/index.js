import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import mapDispatchToProps from '../common/action-mapper';
import TechSpecs from './tech-specs/';
import ProductImageModal from './product-image-modal/';
import images from '../common/images';
import './single-product.css';

class SingleProduct extends Component {

    static propTypes = {
        fetchProducts: PropTypes.func.isRequired,
        match: PropTypes.object.isRequired,
        $$product: PropTypes.instanceOf(Map)
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            isModalOpen: false
        };
    }

    componentDidMount () {
        // don't fetch if we pulled from the cache/store
        if (!Map.isMap(this.props.$$product)) {
            this.props.fetchProducts();
        }
    }

    openModal = () => {
        this.setState({
            isModalOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false
        })
    }

    render () {
        const { $$product } = this.props;
        if (!$$product) return <noscript />
        const img = images[this.props.match.params.id];
        const name = $$product.get('name')
        return (
            <div className="Single-product">
                <h2>{name}</h2>
                <div className="Single-product-details">
                    <div className="Single-product-image">
                        <img src={img} alt={name} onClick={this.openModal} className="Product-image-detail" />
                        <div onClick={this.openModal}>Open larger</div>
                    </div>
                    <TechSpecs $$techSpecs={$$product.get('techspecs')} />
                </div>
                <div className="Single-product-description">
                    <p>A {$$product.get('class')} from {$$product.get('manufacturer')}</p>
                    <p>{$$product.get('price')}</p>
                </div>
                { this.state.isModalOpen && <ProductImageModal image={img} description={name} isOpen={this.state.isModalOpen} onClose={this.closeModal} /> }
            </div>
        )
    }
}

const mapStateToProps = ($$state, ownProps) => {
    return {
        $$product: $$state.getIn(['products', 'items', ownProps.match.params.id])
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
