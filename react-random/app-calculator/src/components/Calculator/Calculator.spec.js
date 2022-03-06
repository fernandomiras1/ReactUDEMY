import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import Calculator from './Calculator';

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
  
});

