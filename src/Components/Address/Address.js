import React from 'react';
import AddressDisplay from './AddressDisplay';
import AddressUpdate from './AddressUpdate';

// Stateful component
class Address extends React.Component {
  constructor(props){
    super(props);
    this.state={
      edit: false, // used for routing
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
  }

  // used as the onSubmit function
  onSubmit(event){
    event.preventDefault();
    this.setState({edit: false });
  }
 
  onClickEdit(){
    this.setState({edit: true });
  }

  render(){
    const {address, handleChange} = this.props;
    return (
      <div className="beam-text flex flex-column align-center items-center">
        <h4>
          Shipping Address:  
          <button onClick={this.onClickEdit} id='edit' className="beam-edit-button">Edit</button>
        </h4>
        { 
          this.state.edit===false // routes through the two components: display or update
          ?  <AddressDisplay id='addressDisplay' address={address}/>
          : <AddressUpdate 
            onChange={handleChange} 
            address={address}
            onSubmit={this.onSubmit}
          />
        }
      </div>
    )
  }
}

export default Address;