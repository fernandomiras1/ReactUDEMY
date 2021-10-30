import React from 'react';
import PropTypes from 'prop-types';
import './NumbeRotation.css';

const NumbeRotation = ({ value }) => (
  <div className="number-rotation-container">
    <strong>Number Rotation:</strong>
    <p className="number-rotation-value">{value.toString()}</p>
  </div>
);

NumbeRotation.propTypes = { value: PropTypes.array.isRequired };

export default NumbeRotation;

