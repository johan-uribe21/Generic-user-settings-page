import React, {Component} from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  // life cycle hook that catches errors
  componentDidCatch(error, info) {
    this.setState({hasError: true});
  }

  render(){
    if (this.state.hasError){
      return <h1> The system has encountered an error. Please contact customer service</h1>
    }
    
    return this.props.children;
    }

}
export default ErrorBoundary;