import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Keypad.css';

const Keypad = ({ operators, callOperator, numbers, setOperator, updateDisplay }) => {
  const numberButtons = numbers.map((number, iterator) => (
    <Button
      key={`${number}${iterator}`}
      btnType="number-btn"
      btnValue={number}
      btnAction={updateDisplay}
    />
  ));

  const operatorButtons = operators.map((operator, iterator) => (
    <Button
      key={`${operator}${iterator}`}
      btnType="operator-btn"
      btnValue={operator}
      btnAction={setOperator}
    />
  ));

  return (
    <div className="keypad-container">
      <div className="numbers-container">{numberButtons}</div>
      <div className="operators-container">{operatorButtons}</div>
      <div className="submit-container">
        <Button 
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