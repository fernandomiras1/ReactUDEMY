import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const MOCK_BTN_ACTION = jest.fn();
const MOCK_BTN_TYPE = 'number-btn';
const MOCK_BTN_VALUE = '7';

describe('Button', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Button
        btnAction={MOCK_BTN_ACTION}
        btnType={MOCK_BTN_TYPE}
        btnValue={MOCK_BTN_VALUE}
      />
    );
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the value of ButtonValue', () => {
    expect(wrapper.text()).toEqual(MOCK_BTN_VALUE);
  });
});
