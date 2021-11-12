import React from 'react';
import './Calculator.css';

import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import { connect } from 'react-redux';

import { opToExpression, numToExpression, } from '../../actions/currentExpression';
import { addHistoryItem } from '../../actions/history';

import './Calculator.css';
import History from '../History/History';

const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.']
const operators = ['/', '*', '-', '+']

const Calculator = ({
  expression,
  operationToExpression,
  numberToExpression,
  addHistoryItem
}) =>   <div className="calculator-container">
<div className="container-fluid">
  <Display displayValue={expression} />
  <div className="main">
    <div className="container-keypad">
      <Keypad
        operators={operators}
        callOperator={() => addHistoryItem(expression)}
        numbers={numbers}
        setOperator={operationToExpression}
        updateDisplay={numberToExpression}
      />
    </div>
    <div className="calc-history">
      <History />
    </div>
  </div>
</div>
</div>

const mapStateToProps = (state) => ({
  expression: state.currentExpression,
});

const mapDispatchToProps = (dispatch) => ({
  operationToExpression: (op) => dispatch(opToExpression(op)),
  numberToExpression: (num) => dispatch(numToExpression(num)),
  addHistoryItem: (op) => dispatch(addHistoryItem(op)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Calculator);;
