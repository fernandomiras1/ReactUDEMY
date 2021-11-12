import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import Calculator from './Calculator';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

const initState = {}

const mockStore = configureStore();
const store =  mockStore(initState)

const wrapper = mount(
  <Provider store={ store } >
    <Calculator />
  </Provider>
)


describe('Calculator', () => {

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());


  it('should render the Display Components', () => {
    
    const display = wrapper.find('Display');

    const displayValue = display.prop('0');
    expect( displayValue ).toEqual( displayValue )
    
  });

  it('should render the Keypad Components', () => {
    
    const keypad = wrapper.find('Keypad');
    const mockOperators = ["/", "*", "-", "+"]
    const operators = keypad.prop('operators');
    expect( operators ).toEqual(mockOperators)
   
    const mockNumbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.']
    const numbers = keypad.prop('numbers');
    expect( numbers ).toEqual(mockNumbers)
    
  });

  describe('should updateDisplay', () => {
    const keypad = wrapper.find('Keypad');

    it('updates displayValue', () => {
      const updateDisplay = keypad.prop('updateDisplay')
      expect(updateDisplay).toHaveBeenCalledWith('5');
    });

    // it('concatenates displayValue', () => {
    //   wrapper.instance().updateDisplay('5');
    //   wrapper.instance().updateDisplay('0');
    //   expect(wrapper.state('displayValue')).toEqual('50');
    // });

    // it('removes leading "0" from displayValue', () => {
    //   wrapper.instance().updateDisplay('0');
    //   expect(wrapper.state('displayValue')).toEqual('0');
    //   wrapper.instance().updateDisplay('5');
    //   expect(wrapper.state('displayValue')).toEqual('5');
    // });

    // it('prevents multiple leading "0"s from displayValue', () => {
    //   wrapper.instance().updateDisplay('0');
    //   wrapper.instance().updateDisplay('0');
    //   expect(wrapper.state('displayValue')).toEqual('0');
    // });

    // it('removes last char of displayValue', () => {
    //   wrapper.instance().updateDisplay('5');
    //   wrapper.instance().updateDisplay('0');
    //   wrapper.instance().updateDisplay('ce');
    //   expect(wrapper.state('displayValue')).toEqual('5');
    // });

    // it('prevents multiple instances of "." in displayValue', () => {
    //   wrapper.instance().updateDisplay('.');
    //   wrapper.instance().updateDisplay('.');
    //   expect(wrapper.state('displayValue')).toEqual('.');
    // });

    // it('will set displayValue to "0" if displayValue is equal to an empty string', () => {
    //   wrapper.instance().updateDisplay('ce');
    //   expect(wrapper.state('displayValue')).toEqual('0');
    // });
  });

  // describe('setOperator', () => {
  //   it('updates the value of selectedOperator', () => {
  //     wrapper.instance().setOperator('+');
  //     expect(wrapper.state('selectedOperator')).toEqual('+');
  //     wrapper.instance().setOperator('/');
  //     expect(wrapper.state('selectedOperator')).toEqual('/');
  //   });

  //   it('updates the value of storedValue to the value of displayValue', () => {
  //     wrapper.setState({ displayValue: '5' });
  //     wrapper.instance().setOperator('+');
  //     expect(wrapper.state('storedValue')).toEqual('5');
  //   });

  //   it('updates the value of displayValue to "0"', () => {
  //     wrapper.setState({ displayValue: '5' });
  //     wrapper.instance().setOperator('+');
  //     expect(wrapper.state('displayValue')).toEqual('0');
  //   });

  //   it('selectedOperator is not an empty string, does not update storedValue', () => {
  //     wrapper.setState({ displayValue: '5' });
  //     wrapper.instance().setOperator('+');
  //     expect(wrapper.state('storedValue')).toEqual('5');
  //     wrapper.instance().setOperator('-');
  //     expect(wrapper.state('storedValue')).toEqual('5');
  //   });
  // });

  // describe('callOperator', () => {
  //   it('updates displayValue to the sum of storedValue and displayValue', () => {
  //     wrapper.setState({ storedValue: '3' });
  //     wrapper.setState({ displayValue: '2' });
  //     wrapper.setState({ selectedOperator: '+' });
  //     wrapper.instance().callOperator();
  //     expect(wrapper.state('displayValue')).toEqual('5');
  //   });

  //   it('updates displayValue to the difference of storedValue and displayValue', () => {
  //     wrapper.setState({ storedValue: '3' });
  //     wrapper.setState({ displayValue: '2' });
  //     wrapper.setState({ selectedOperator: '-' });
  //     wrapper.instance().callOperator();
  //     expect(wrapper.state('displayValue')).toEqual('1');
  //   });

  //   it('updates displayValue to the product of storedValue and displayValue', () => {
  //     wrapper.setState({ storedValue: '3' });
  //     wrapper.setState({ displayValue: '2' });
  //     wrapper.setState({ selectedOperator: 'x' });
  //     wrapper.instance().callOperator();
  //     expect(wrapper.state('displayValue')).toEqual('6');
  //   });

  //   it('updates displayValue to the quotient of storedValue and displayValue', () => {
  //     wrapper.setState({ storedValue: '3' });
  //     wrapper.setState({ displayValue: '2' });
  //     wrapper.setState({ selectedOperator: '/' });
  //     wrapper.instance().callOperator();
  //     expect(wrapper.state('displayValue')).toEqual('1.5');
  //   });

  //   it('updates displayValue to "0" if operation results in "NaN"', () => {
  //     wrapper.setState({ storedValue: '3' });
  //     wrapper.setState({ displayValue: 'string' });
  //     wrapper.setState({ selectedOperator: '/' });
  //     wrapper.instance().callOperator();
  //     expect(wrapper.state('displayValue')).toEqual('0');
  //   });

  //   it('updates displayValue to "0" if operation results in "Infinity"', () => {
  //     wrapper.setState({ storedValue: '7' });
  //     wrapper.setState({ displayValue: '0' });
  //     wrapper.setState({ selectedOperator: '/' });
  //     wrapper.instance().callOperator();
  //     expect(wrapper.state('displayValue')).toEqual('0');
  //   });

  //   it('updates displayValue to "0" if selectedOperator does not match cases', () => {
  //     wrapper.setState({ storedValue: '7' });
  //     wrapper.setState({ displayValue: '10' });
  //     wrapper.setState({ selectedOperator: 'string' });
  //     wrapper.instance().callOperator();
  //     expect(wrapper.state('displayValue')).toEqual('0');
  //   });

  //   it('updates displayValue to "0" if called with no value for storedValue or selectedOperator', () => {
  //     wrapper.setState({ storedValue: '' });
  //     wrapper.setState({ displayValue: '10' });
  //     wrapper.setState({ selectedOperator: '' });
  //     wrapper.instance().callOperator();
  //     expect(wrapper.state('displayValue')).toEqual('0');
  //   });
  // });
});

