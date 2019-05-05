import React from 'react';
//import logo from "../../assets/images/logo.svg"

// stateless display component
const Navbar = () => {

  return (
    <nav 
      style = { {display:'flex', justifyContent: 'space-around', alignItems: 'center'}}>
      <img 
        alt = "Company logo here"
        //src={logo}
      />
      <p className='beam-title'>Member Details</p>
      <button className='beam-text beam-login-button'>Sign Out</button>
    </nav>
  )
}

export default Navbar;