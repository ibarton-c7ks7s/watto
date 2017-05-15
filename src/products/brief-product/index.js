import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Map } from 'immutable';
import images from '../../common/images';
import './product-brief.css';

const ProductBrief = ({$$product, index}) => {
    const name = $$product.get('name')
    const img = images[index];
    return (
        <div className="Product-brief">
            <img src={img} alt={name} className="Product-image" />
            <div className="Products-product" key={name}>
                <h3><Link to={`/product/${index}`}>{name}</Link></h3>
                <p>A {$$product.get('class')} from {$$product.get('manufacturer')}</p>
                <p>{$$product.get('price')}</p>
            </div>
        </div>
    )
};

ProductBrief.propTypes = {
    $$product: PropTypes.instanceOf(Map).isRequired,
    index: PropTypes.number.isRequired
};

export default ProductBrief;