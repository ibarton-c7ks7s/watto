import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './product-image-modal.css';

class ProductImageModal extends Component {

    static propTypes = {
        image: PropTypes.string,
        description: PropTypes.string,
        isOpen: PropTypes.bool,
        onClose: PropTypes.func
    }

    render () {
        const { image, description, isOpen, onClose } = this.props
        if (!isOpen) return <noscript />
        return (
            <div className="Product-image-modal">
                <div className="Product-image-modal-close" onClick={onClose}>
                    &times;
                </div>
                <div className="Product-image-modal-content">
                    <img src={image} alt={description} className="Product-image-modal-image" />
                </div>
            </div>
        )
    }
}

export default ProductImageModal;