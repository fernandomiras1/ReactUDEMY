import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ btnAction, btnType, btnValue }) => {
  return (
    <div className={`btn-container ${btnType}`} 
      onClick={() => btnAction(btnValue)}>
        <p className="btn-value">{btnValue}</p>
    </div>
  );
};

Button.propTypes = {
  btnAction: PropTypes.func.isRequired,
  btnType: PropTypes.string.isRequired,
  btnValue: PropTypes.string.isRequired,
};

Button.defaultProps = {
  btnType: 'default',
  btnAction: 'default',
};

export default Button;