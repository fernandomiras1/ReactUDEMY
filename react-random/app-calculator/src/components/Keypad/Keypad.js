import React from 'react';
import PropTypes from 'prop-types';
import './Keypad.css';

import Button from '../Button/Button';
import './Keypad.css';

const Keypad = ({ operators, callOperator, handleBtnPress, numbers, setOperator, updateDisplay }) => {
  const numberKeys = numbers.map((number, iterator) => (
    <Button
      handleBtnPress={handleBtnPress}
      key={`${number}${iterator}`}
      btnType="number-btn"
      btnValue={number}
      btnAction={updateDisplay}
    />
  ));

  const operatorKeys = operators.map((operator, iterator) => (
    <Button
      handleBtnPress={handleBtnPress}
      key={`${operator}${iterator}`}
      btnType="operator-btn"
      btnValue={operator}
      btnAction={setOperator}
    />
  ));

  return (
    <div className="keypad-container">
      <div className="numbers-container">{numberKeys}</div>
      <div className="operators-container">{operatorKeys}</div>
      <div className="submit-container">
        <Button 
          handleBtnPress={handleBtnPress} 
          btnType="submit-btn" 
          btnValue="=" 
          btnAction={callOperator}
        />
      </div>
    </div>
  );
};

Keypad.propTypes = {
  callOperator: PropTypes.func.isRequired,
  handleBtnPress: PropTypes.func.isRequired,
  numbers: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
  setOperator: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired,
};

Keypad.defaultProps = {
  numbers: [],
  operators: [],
};

export default Keypad;