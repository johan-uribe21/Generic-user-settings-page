import {shallow, configure} from 'enzyme';
import BrushCard from './BrushCard';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() }); 

const mockBrushList = [
    {
      id: 8, 
      member_id: 43,
      brush_color: "pink",
      motor_speed: 1.0,
      auto_off: 'No' 
      // this actually returns false, but is converted to "No" by ternary operator in the Brushes component
    }
  ]

const wrapper = shallow(<BrushCard 
    color={mockBrushList[0].brush_color} 
    speed={mockBrushList[0].motor_speed}
    autoOff={mockBrushList[0].auto_off}/>)

describe('Brush preference card component renders with the props correctly passsed',() => {
  it('expect to render individual brush card', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('expect brush card to contain button-icon with correct color', () => {
    expect(wrapper.containsMatchingElement(<button className={`beam-brush-pink box`}></button>))
      .toBeTruthy();
  });

  it('expect brush card to display Motor Speed', () => {
    expect(wrapper.containsMatchingElement(<li>Motor Speed: 1 </li>))
    .toBeTruthy();
  });

  it('expect brush card to display Auto Off with Yes or No', () => {
    expect(wrapper.containsMatchingElement(<li>Auto Off: No</li>))
      .toBeTruthy();
  });
})
