import React from 'react';
import PropTypes from 'prop-types';
import './error-dialog.css';

const ErrorDialog = ({error}) => {
    return (
        <div className="Products-error">
            <h3>Failed to fetch products. Error: {error}</h3>
        </div>
    )
};

ErrorDialog.propTypes = {
    error: PropTypes.string.isRequired
};

export default ErrorDialog;