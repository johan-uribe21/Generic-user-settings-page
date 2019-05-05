import {shallow, configure} from 'enzyme';
import AddressDisplay from './AddressDisplay';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() }); 

const mockAddress =  {
    street: '123 elm',
    city: 'cbus',
    state: 'OH',
    zipcode: '43023'
  }
  

const wrapper = shallow(<AddressDisplay 
    address={mockAddress}/>)

it('renders the address display component', () => {
  expect(wrapper).toMatchSnapshot();
});
