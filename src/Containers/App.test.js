import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() }); 

const mockRecords=[
  {
    id: 13,
    primary_insured_id: 0,
    name: "Remy LeBeau",
    effective_date: "2017-01-01",
    terminated_at: null,
    shipping_address: '123 elm',
    shipping_city: 'cbus',
    shipping_state: 'OH',
    shipping_zip_code: '43023'
  },
  {
    id: 43,
    primary_insured_id: null,
    name: "Remy LeBeau",
    effective_date: "2018-01-01",
    terminated_at: null,
    shipping_address: '123 elm',
    shipping_city: 'cbus',
    shipping_state: 'OH',
    shipping_zip_code: '43023'
  }
]
const page = new App;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App component', () => {
  
  beforeAll(() => {
    const spy = jest.spyOn(App.prototype, 'fetchUserRecords');
    const spy1 = jest.spyOn(App.prototype, 'updateAddress');
    // shallow(<App/>);
  })
  
  
  it('should call fetchUserRecords on mount', () => {
    const wrapper=shallow(<App/>);
    expect(App.prototype.fetchUserRecords).toHaveBeenCalledTimes(1)
    wrapper.instance().updateAddress(mockRecords[0]);
    expect(App.prototype.updateAddress).toHaveBeenCalledTimes(1)
  });
  
  it('validRecords method should parse out records with null values and return array', () => {
    expect(page.validRecords(mockRecords)[0]).toEqual(mockRecords[1]);
  });
  
  it('mostRecent method takes array of records and returns only the latest record as object', () => {
    expect(page.mostRecent(mockRecords)).toEqual(mockRecords[0]);
  });

  it('updateAddress method updates the state with the address from provided user record', () => {
    const wrapper=shallow(<App/>);
    wrapper.instance().updateAddress(mockRecords[0]);
    expect(wrapper.state().address).toEqual(
      {street: '123 elm',
      city: 'cbus',
      state: 'OH',
      zipcode: '43023'
      }
    )
  })

})
