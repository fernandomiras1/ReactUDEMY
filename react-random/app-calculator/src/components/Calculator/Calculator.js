import React, { useState } from 'react';
import './Calculator.css';

import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import NumbeRotation from '../NumbeRotation/NumbeRotation';
import './Calculator.css';

const Calculator = () => {

  const [displayValue, setDisplayValue] = useState('0')
  const [storedValue, setStoredValue] = useState('')
  const [numberRotation, setNumberRotation ] = useState([1, 2, 3, 4, 5])
  const [selectedOperator, setSelectedOperator] = useState('')

  const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', '<=']
  const operators = ['/', '*', '-', '+']

  const callOperator = () => {
    const updateStoredValue = displayValue;

    let operationResult = ''
    switch (selectedOperator) {
      case '+':
        operationResult = parseFloat(storedValue) + parseFloat(displayValue);
        break;
      case '-':
        operationResult = parseFloat(storedValue) - parseFloat(displayValue);
        break;
      case '*':
        operationResult = parseFloat(storedValue) * parseFloat(displayValue);
        break;
      case '/':
        operationResult = parseFloat(storedValue) / parseFloat(displayValue);
        break;
      default:
        operationResult = '0';
    }

    if (operationResult === 'NaN' || operationResult === 'Infinity') operationResult = '0';
    setDisplayValue(operationResult.toString())
    setSelectedOperator('')
    setStoredValue(updateStoredValue)
  }

  const handleBtnPress = (event) => {
    console.log('handleBtnPress', event.key);
    if (event.key === 'Backspace') updateDisplay('<=');
    if (event.key === 'Enter' || event.key === '=') callOperator();

    numbers.forEach((number) => {
      if (event.key === number) updateDisplay(number);
    });

    operators.forEach((operator) => {
      if (event.key === operator) setOperator(operator);
    });
  };

  const setOperator = (value) => {
    console.log('setOperator', selectedOperator);
    if (selectedOperator === '') {
      setStoredValue(displayValue)
      setDisplayValue('')
    }
    setSelectedOperator(value);
  };

  const numbersRotation = (numbers) => {
    numbers.push(numbers.shift())
    return numbers
  }

  const updateDisplay = (value) => {

    let updateValue = displayValue
    if (value === '.' && updateValue.includes('.')) value = '';

    if (value === '<=') {
      updateValue = updateValue.substr(0, displayValue.length - 1)
      if (updateValue === '') updateValue = '0'
    } else {
      updateValue === '0' ? (updateValue = value) : (updateValue += value);
    }

    setDisplayValue(updateValue)
  };

  return (
    <div className="calculator-container">
      <button type="button"
        onClick={(e) => {
          e.preventDefault()
          setNumberRotation(numbersRotation(numberRotation))
          console.log('numberRotation', numberRotation);
          // console.log(numbersRotation(numberRotation) );
          // setDisplayValue(numberRotation.toString())
        }}
      >Number rotation.
      </button>
      <NumbeRotation value={numberRotation} />
      <Display displayValue={displayValue} />
      <Keypad
        handleBtnPress={handleBtnPress}
        operators={operators}
        callOperator={callOperator}
        numbers={numbers}
        setOperator={setOperator}
        updateDisplay={updateDisplay}
      />
    </div>
  )
}

export default Calculator;
