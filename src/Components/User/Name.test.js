import {shallow, configure} from 'enzyme';
import Name from './Name';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() }); // need this line to use enzyme

it('expect to render name correctly', () => {
  expect(shallow(<Name/>)).toMatchSnapshot();
});
