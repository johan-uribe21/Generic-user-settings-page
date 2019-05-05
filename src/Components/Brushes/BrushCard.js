import React from 'react';

// Display Component, brush card
const BrushCard = ( {color, speed, autoOff} ) => {

  return (
    <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
      <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">User preferences</h1>
      <div className="pa3 bt b--black-10">
        <ul className=" f6 f5-ns lh-copy measure">
          <li>Color: {color}   <button className={`beam-brush-${color} box`}></button> </li>
          <li>Speed: {speed} </li>
          <li>Auto Off: {autoOff}</li>
        </ul>
      </div>
    </article>
  )
}

export default BrushCard;