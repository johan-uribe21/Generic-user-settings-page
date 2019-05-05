import React from 'react';
import BrushCard from './BrushCard'
// Display Component
const Brushes = ({brushList}) => {
  return (
    <div className="beam-text">
      {
        //iterates over the preference array in case there are multiple brushes per person
        brushList.length > 0 ?
        brushList.map( (brush, idx) => {
          return <BrushCard
            key={idx}
            color={brush.brush_color} 
            speed={brush.motor_speed}
            autoOff= {brush.auto_off? 'Yes': 'No'}/>
        }):
        <span>You have no Bream-Brushes at the moment</span>
      }
    </div>
  )
}

export default Brushes;