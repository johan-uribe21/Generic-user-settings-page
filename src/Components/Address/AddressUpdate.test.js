import {shallow, configure} from 'enzyme';
import AddressUpdate from './AddressUpdate';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() }); 

const mockAddress =  {
    street: '123 elm',
    city: 'cbus',
    state: 'OH',
    zipcode: '43023'
}
const event = {
  preventDefault() {},
  target: {value: 'the-value'}
}
const mockOnChange = jest.fn();
const mockOnSubmit = jest.fn();
const wrapper= shallow(
  <AddressUpdate 
    address={mockAddress} 
    onChange={mockOnChange} 
    onSubmit={mockOnSubmit}/>);
  
describe('tests snapshot, event handdling, and submission logic', () => {
  it('renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('calls onChange function when the user types into the form', () => {
    // simulates the onchange event with a synthetic event
    wrapper.find('#street').simulate('change', event);
    expect(mockOnChange).toBeCalledWith(event);
  });

});
  