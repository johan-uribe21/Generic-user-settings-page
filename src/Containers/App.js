import React, {Component} from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Name from '../Components/User/Name';
import Address from '../Components/Address/Address';
import Brushes from '../Components/Brushes/Brushes';
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary'

class App extends Component {
  constructor(){
    super();
    this.state = {
      // address should be populated by the fetchUserRecords call in componenetDidMount
      address: {
        street: '126 Elm Street',
        city: 'Columbus',
        state: 'Ohio',
        zipcode: '43023'
      },
      user: { // user info populated upon login 
        name: 'Jane Doe',
        brushes: [ // hardcoded  preference data due 
          { 
            id: 8, 
            member_id: 43,
            brush_color: "pink",
            motor_speed: 1.0,
            auto_off: false
          }
        ]
      }
    };

    this.fetchUserRecords = this.fetchUserRecords.bind(this);
    this.validRecords = this.validRecords.bind(this);
    this.mostRecent = this.mostRecent.bind(this);
    this.fetchFilterBrushPreferences = this.fetchFilterBrushPreferences.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateAddress=this.updateAddress.bind(this);
  }

  // updates the state fields of the controlled form componenent as the user types
  handleChange(event){
    const id = event.target.getAttribute('id')
    switch(id){
      case 'street':
        this.setState({address: {...this.state.address, street: event.target.value}});
        break;
      case 'city':
        this.setState({address: {...this.state.address, city: event.target.value}});
        break;
      case 'state':
        this.setState({address: {...this.state.address, state: event.target.value}});
        break;
      case 'zipcode':
        this.setState({address: {...this.state.address, zipcode: event.target.value}});
        break;
      default:
    }
  };

//   The valid member record for Remy:
// - Does not have a `primary_insured_id`. (He's his own primary insured.)
// - Does not have a `terminated_at` date. (He still has insurance active.)
  validRecords(userPromise){
    return userPromise.filter(record => {
      return (record.primary_insured_id===null && record.terminated_at===null)
    })
  }
 
  mostRecent(userRecords){
    if(userRecords.length>1){
      return userRecords.sort( (a, b) => {
        return new Date(b.effective_date) - new Date(a.effective_date) ;
      })[0];
    } else return userRecords[0]
    //returns an object, not an array
    // sorts the valid records by date from most recent to oldest, then takes the most recent
  };

  // fetch and filter preferences for the user
  fetchFilterBrushPreferences(latestRecord){
    const url = 'enter your API.json url'
    return fetch(url)
      .then(response => response.json())
      .then(res=>res.filter(brush => brush.member_id === latestRecord.id))
      .then(res => this.setState({user: {...this.state.user, brushes: res}}))
      .catch(err => console.log(err))
  };

  fetchUserRecords(){
    const url = 'enter your http://url.json here'
    return fetch(url)
      .then(response => response.json())
      .then(userData => this.validRecords(userData))
      .then(validRecords => this.mostRecent(validRecords))
      .then(latestRecord => {
        this.fetchFilterBrushPreferences(latestRecord)
        this.updateAddress(latestRecord);
      })
      .catch(err => console.log(err))
  };

  // change this to fit the structure of your JSON data
  updateAddress(record){
    const address = {
      street: record.shipping_address,
      city: record.shipping_city,
      state: record.shipping_state,
      zipcode: record.shipping_zip_code
    }
    this.setState({address: address});
  }

  componentDidMount(){
    this.fetchUserRecords();
  };

  render() {
    return (
      <div className='beam-font-family beam-font-color'>
        <Navbar />
        <ErrorBoundary>
          <Name className='pa3' name={this.state.user.name}/>
          <Address className='pa3' address={this.state.address} handleChange={this.handleChange}/>
          <Brushes brushList={this.state.user.brushes}/>
        </ErrorBoundary>
      </div>
    )
  };
  
};

export default App;
