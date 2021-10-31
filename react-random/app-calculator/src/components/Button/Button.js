import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ handleBtnPress, btnAction, btnType, btnValue }) => {
  const btnClass = `btn-container ${btnType}`;

  return (
    <div className={btnClass} 
      onClick={() => btnAction(btnValue)} 
      onKeyPress={event => handleBtnPress(event)}>
        <p className="btn-value">{btnValue}</p>
    </div>
  );
};

Button.propTypes = {
  handleBtnPress: PropTypes.func.isRequired,
  btnAction: PropTypes.func.isRequired,
  btnType: PropTypes.string.isRequired,
  btnValue: PropTypes.string.isRequired,
};

Button.defaultProps = {
  btnType: 'default',
  btnAction: 'default',
};

export default Button;