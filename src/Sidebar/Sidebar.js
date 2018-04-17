import React, { Component } from 'react';
import './Sidebar.css';
//import OneDish from '../OneDish/OneDish'
class Sidebar extends Component {

  constructor(props) {
    super(props)
    
    // we put on state the properties we want to use and modify in the component
    this.state = {
      numberOfGuests: this.props.model.getNumberOfGuests()
    }
    localStorage.setItem("numGuests", this.props.model.getNumberOfGuests());
  }

  // this methods is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to setup model observer
  componentDidMount() {
    this.props.model.addObserver(this)
  }

  // this is called when component is removed from the DOM
  // good place to remove observer
  componentWillUnmount() {
    this.props.model.removeObserver(this)
  }

  // in our update function we modify the state which will
  // cause the component to re-render
  update() {
    this.setState({
      numberOfGuests: this.props.model.getNumberOfGuests()
    })
  }

  // our handler for the input's on change event
  onNumberOfGuestsChanged = (e) => {
    this.props.model.setNumberOfGuests(+e.target.value)
    localStorage.setItem("numGuests", this.props.model.getNumberOfGuests());
  }

  render() {
    return (
      <div className="Sidebar">
      <h3>My Dinner </h3>
        <p>
          People: <input value={this.state.numberOfGuests} onChange={this.onNumberOfGuestsChanged}/>
          <br/>
          Total number of guests: {localStorage.getItem("numGuests")}
        </p>
      </div>
    );
  }
}

export default Sidebar;
