import React from 'react';
import { Map } from 'immutable';
import PropTypes from 'prop-types';

const TechSpecs = ({$$techSpecs}) => {
    return (
        <div className="Tech-specs">
            <h3>Tech Specs</h3>
            <div className="Single-product-attribute">
                <div className="Single-product-attribute-name">
                    MGLT:
                </div>
                <div className="Single-product-attribute-value">
                    {$$techSpecs.get('MGLT')}
                </div>
            </div>
            <div className="Single-product-attribute">
                <div className="Single-product-attribute-name">
                    Armament:
                </div>
                <div className="Single-product-attribute-value">
                    {$$techSpecs.get('armament')}
                </div>
            </div>
            <div className="Single-product-attribute">
                <div className="Single-product-attribute-name">
                    Communications:
                </div>
                <div className="Single-product-attribute-value">
                    {$$techSpecs.get('communications')}
                </div>
            </div>
            <div className="Single-product-attribute">
                <div className="Single-product-attribute-name">
                    Hull:
                </div>
                <div className="Single-product-attribute-value">
                    {$$techSpecs.get('hull')}
                </div>
            </div>
            <div className="Single-product-attribute">
                <div className="Single-product-attribute-name">
                    Length:
                </div>
                <div className="Single-product-attribute-value">
                    {$$techSpecs.get('length')}
                </div>
            </div>
            <div className="Single-product-attribute">
                <div className="Single-product-attribute-name">
                    Max Acceleration:
                </div>
                <div className="Single-product-attribute-value">
                    {$$techSpecs.get('maxaccel')}
                </div>
            </div>
            <div className="Single-product-attribute">
                <div className="Single-product-attribute-name">
                    Max Atmospheric Speed:
                </div>
                <div className="Single-product-attribute-value">
                    {$$techSpecs.get('maxatmosphericspeed')}
                </div>
            </div>
            <div className="Single-product-attribute">
                <div className="Single-product-attribute-name">
                    Sensor:
                </div>
                <div className="Single-product-attribute-value">
                    {$$techSpecs.get('sensor')}
                </div>
            </div>
            <div className="Single-product-attribute">
                <div className="Single-product-attribute-name">
                    Shielding:
                </div>
                <div className="Single-product-attribute-value">
                    {$$techSpecs.get('shielding')}
                </div>
            </div>
            <div className="Single-product-attribute">
                <div className="Single-product-attribute-name">
                    Targeting:
                </div>
                <div className="Single-product-attribute-value">
                    {$$techSpecs.get('targeting')}
                </div>
            </div>
        </div>
    )
}

TechSpecs.propTypes = {
    $$techSpecs: PropTypes.instanceOf(Map).isRequired
}

export default TechSpecs;