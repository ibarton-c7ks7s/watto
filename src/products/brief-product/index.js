import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Map } from 'immutable';
import './product-brief.css';

const ProductBrief = ({$$product}) => {
    const name = $$product.get('name')
    return (
        <div className="Product-brief">
            <div className="Products-product" key={name}>
                <h3><Link to={`/products/${name}`}>{name}</Link></h3>
                <p>{$$product.get('class')}</p>
            </div>
        </div>
    )
};

ProductBrief.propTypes = {
    $$product: PropTypes.instanceOf(Map).isRequired
};

export default ProductBrief;