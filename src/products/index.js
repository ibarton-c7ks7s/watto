import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Products extends Component {

    static propTypes = {
        children: PropTypes.node
    };

    render () {
        return (
            <div className="Products">
                <h2>Products View</h2>

                <Link to="/product/4">product 4</Link>
                {this.props.children}
            </div>
        )
    }
}

export default Products;