import React from 'react';

// stateless display component
const Name = ({name}) => {

  return (
    <div className="beam-text f3 flex justify-center">
      <p>Name: {name}</p>
    </div>
  )
}

export default Name;