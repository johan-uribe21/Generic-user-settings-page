import {shallow,mount, configure} from 'enzyme';
import Address from './Address';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() }); 

const mockAddress = {
  street: '123 Elm',
  city: 'Columbus',
  state: 'Ohio',
  zipcode: '43023'
};

const mockHandleChange = (event) => {
  return event.target.value
};

const wrapper= shallow(<Address address={mockAddress} handleChange={mockHandleChange}/>);

const event = {
  preventDefault() {},
  target: {value: 'the-value'}
}

describe('renders and routes between the two child components', () => {

  it('updates state value of edit to true when edit button is clicked', () => {
    wrapper.find('.beam-edit-button').simulate('click', event);
    expect(wrapper.state()).toEqual({edit: true});
  });
  
  it('renders the AddressDisplay when edit=false', () => {
    const wrapper= mount(<Address address={mockAddress} handleChange={mockHandleChange}/>);
  
    expect(
      wrapper.containsMatchingElement(
        <span className="beam-text " id="street">
          {mockAddress.street}
        </span>
      )
    )
      .toBeTruthy();
  });
  
  it('renders the AddressUpdate component when edit=false', () => {
    const wrapper= mount(<Address address={mockAddress} handleChange={mockHandleChange}/>);
    wrapper.find('#edit').simulate('click', event);
  
    expect(
      wrapper.containsMatchingElement(
        <input 
          className="beam-text pa2 input-reset b--dotted bg-transparent w-100 measure"
          id="street" 
          type="text" 
          size="40"
          onChange={mockHandleChange}
          value = {mockAddress.street} // 
          />
      )
    )
      .toBeTruthy();
  });
});
