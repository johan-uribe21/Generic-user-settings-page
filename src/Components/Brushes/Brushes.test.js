import {shallow,mount, configure} from 'enzyme';
import Brushes from './Brushes';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() }); 

describe('tests the correct props are passed down and the brush preferences array is corrected itarated over', () => {
  it('expects the brushes component to map over brushList and render a brushcard when there is one brush', () => {
    const mockBrushList = [
      {
        id: 8, 
        member_id: 43,
        brush_color: "pink",
        motor_speed: 1.0,
        auto_off: false
      }
    ]
    const wrapper= mount(<Brushes brushList={mockBrushList}/>);
  
    expect(wrapper.containsMatchingElement(<button className={`beam-brush-pink box`}></button>)).toBeTruthy();
    // checks to make sure that span is not renedred when there is at least one brush preference
    expect(wrapper.containsMatchingElement(<span>You have no Bream-Brushes at the moment</span>)).toBeFalsy();
  });
  
  it('expects the brushes component to map over brushList and render two brushCards if there are two brushes', () => {
    const mockBrushList = [
      {
        id: 8, 
        member_id: 43,
        brush_color: "pink",
        motor_speed: 1.0,
        auto_off: false
      },
      {
        id: 2, 
        member_id: 43,
        brush_color: "chartreuse",
        motor_speed: 0.5,
        auto_off: false
      }
    ]
    const wrapper= mount(<Brushes brushList={mockBrushList}/>);
  
    // easy way to check if both cards were rendered with the props passed down to it, one for each color
    expect(wrapper.containsMatchingElement(<button className={`beam-brush-chartreuse box`}></button>)).toBeTruthy();
    expect(wrapper.containsMatchingElement(<button className={`beam-brush-pink box`}></button>)).toBeTruthy();
    expect(wrapper.containsMatchingElement(<span>You have no Bream-Brushes at the moment</span>)).toBeFalsy();
  });
  
  it('expects the brushes component to render message "you have no beam-brushes at the moment" is there are no beam brushes', () => {
    const mockBrushList = [];
    const wrapper= mount(<Brushes brushList={mockBrushList}/>);
  
    expect(wrapper.containsMatchingElement(<span>You have no Bream-Brushes at the moment</span>)).toBeTruthy();
  });
});