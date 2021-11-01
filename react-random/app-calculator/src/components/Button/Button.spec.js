// import React from 'react';
// import { shallow } from 'enzyme';
// import Button from './Button';

// const MOCK_HANDLE_BTN_PRESS = jest.fn();
// const MOCK_BTN_ACTION = jest.fn();
// const MOCK_BTN_TYPE = 'number-btn';
// const MOCK_BTN_VALUE = '7';

// describe('calculators button', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = shallow(
//       <Button
//         handleBtnPress={MOCK_HANDLE_BTN_PRESS}
//         btnAction={MOCK_BTN_ACTION}
//         btnType={MOCK_BTN_TYPE}
//         btnValue={MOCK_BTN_VALUE}
//       />
//     );
//   }); 

//   it('should render correctly', () => expect(wrapper).toMatchSnapshot());

//   it('should render a <div />', () => {
//     expect(wrapper.find('div').length).toEqual(1);
//   });

//   it('should render the value of btnValue', () => {
//     wrapper.setProps({ btnValue: 'test' });
//     expect(wrapper.text()).toEqual('test');
//   });
// });
