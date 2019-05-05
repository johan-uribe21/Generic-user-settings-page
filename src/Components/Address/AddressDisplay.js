import React from 'react';

//  stateless display component
const AddressDisplay = ({address}) => {

    return(
      <div className="beam-text" id='addressDisplay'>
        <span className="beam-text " id="street">
          {address.street}
        </span><br/>
        <span className="beam-text" id="city">
          {address.city} 
        </span><br/>
        <span className="beam-text " id="state">
          {address.state} 
        </span>
        <br/>
        <span className="beam-text" id="zipcode" >
          {address.zipcode} 
        </span><br/><br/>
        <input 
            type="submit"
            className='beam-edit-button' 
            value='Update'/>
        </div>
    )
  
}

export default AddressDisplay;