import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SingleProduct extends Component {

    static propTypes = {
        children: PropTypes.node
    };

    render () {
        return (
            <div className="Single-product">
                <h2>Single Product View</h2>
                {this.props.children}
            </div>
        )
    }
}

export default SingleProduct;