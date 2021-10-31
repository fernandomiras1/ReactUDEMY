import React, { Component } from 'react';
import './Calculator.css';

import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import NumbeRotation from '../NumbeRotation/NumbeRotation';
import './Calculator.css';

class Calculator extends Component {
  state = {
    displayValue: '0',
    numbers: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', '<='],
    operators: ['/', '*', '-', '+'],
    selectedOperator: '',
    storedValue: '',
    numberRotation: [1, 2, 3, 4, 5],
  };

  componentDidMount = () => {
    document.addEventListener('keydown', this.handleBtnPress);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleBtnPress);
  };

  callOperator = () => {
    console.log('callOperator');
    let { displayValue, selectedOperator, storedValue } = this.state;
    const updateStoredValue = displayValue;

    displayValue = parseFloat(displayValue);
    storedValue = parseFloat(storedValue);

    switch (selectedOperator) {
      case '+':
        displayValue = storedValue + displayValue;
        break;
      case '-':
        displayValue = storedValue - displayValue;
        break;
      case '*':
        displayValue = storedValue * displayValue;
        break;
      case '/':
        displayValue = storedValue / displayValue;
        break;
      default:
        displayValue = '0';
    }

    displayValue = displayValue.toString();
    selectedOperator = '';
    if (displayValue === 'NaN' || displayValue === 'Infinity') displayValue = '0';

    this.setState({ displayValue, selectedOperator, storedValue: updateStoredValue });
  };

  handleBtnPress = (event) => {
    const { numbers, operators } = this.state;

    if (event.key === 'Backspace') this.updateDisplay('<=');
    if (event.key === 'Enter' || event.key === '=') this.callOperator();

    numbers.forEach((number) => {
      if (event.key === number) this.updateDisplay(number);
    });

    operators.forEach((operator) => {
      if (event.key === operator) this.setOperator(operator);
    });
  };

  setOperator = (value) => {
    let { displayValue, selectedOperator, storedValue } = this.state;

    console.log('displayValue', displayValue);
    console.log('selectedOperator', selectedOperator);
    console.log('storedValue', storedValue);
    if (selectedOperator === '') {
      storedValue = displayValue;
      displayValue = '';
      selectedOperator = value;
    } else {
      selectedOperator = value;
    }
    this.setState({ displayValue, selectedOperator, storedValue });
  };

  numbersRotation = (numbers) => {
    numbers.push(numbers.shift())
    return numbers
  }

  updateDisplay = (value) => {
    let { displayValue, numberRotation } = this.state;

    if (value === '.' && displayValue.includes('.')) value = '';

    if (value === '<=') {
      displayValue = displayValue.substr(0, displayValue.length - 1);
      numberRotation = this.numbersRotation(numberRotation);
      console.log(value);
      this.setState({ numberRotation });


      if (displayValue === '') displayValue = '0';
    } else {
      displayValue === '0' ? (displayValue = value) : (displayValue += value);
    }
    console.log('displayValue', displayValue);
    this.setState({ displayValue });
  };

  render() {
    const { displayValue, numbers, operators, numberRotation } = this.state;

    return (
      <div className="calculator-container">
        <NumbeRotation value={numberRotation} />
        <Display displayValue={displayValue} />
        <Keypad
          handleBtnPress={this.handleBtnPress}
          operators={operators}
          callOperator={this.callOperator}
          numbers={numbers}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
        />
      </div>
    );
  }
}

export default Calculator;
