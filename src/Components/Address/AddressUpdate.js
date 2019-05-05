import React from 'react';

// Controlled display Component, state held in App.js
const AddressUpdate = ({address, onChange, onSubmit}) => {

  return (
    <form
      className="beam-text"
      onSubmit={onSubmit}
    >
      <label className='pa2'>Street: <br/>
        <input 
        className="beam-text pa2 input-reset b--dotted bg-transparent w-100 measure"
        id="street" 
        type="text" 
        size="40"
        onChange={onChange}
        value = {address.street} // for controlled component, state controls values
        />
      </label><br/>
      <label className='pa2'>City: <br/>
        <input 
        className="beam-text pa2 input-reset b--dotted bg-transparent w-100 measure"
        id="city" 
        type="text" 
        size="40"
        onChange={onChange}
        value = {address.city} // for controlled component, state controls values
        />
      </label><br/>
      <label className='pa2'>State: <br/>
        <input 
        className="beam-text pa2 input-reset b--dotted bg-transparent w-100 measure"
        id="state" 
        type="text" 
        size="40"
        onChange={onChange}
        value = {address.state} // for controlled component, state controls values
        />
      </label><br/>
      <label className='pa2'>Zipcode: <br/>
        <input 
        className="beam-text pa2 input-reset b--dotted bg-transparent w-100 measure"
        id="zipcode" 
        type="text" 
        size="40"
        onChange={onChange}
        value = {address.zipcode} // for controlled component, state controls values
        />
      </label><br/>
      <input 
          type="submit"
          className='beam-edit-button' 
          value='Update'
        />
    </form>
  )
}

export default AddressUpdate;