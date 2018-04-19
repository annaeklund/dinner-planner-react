import React, { Component } from 'react';
import './Sidebar.css';
import {modelInstance} from '../data/DinnerModel';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
//import OneDish from '../OneDish/OneDish'
var menu = [];
class Sidebar extends Component {

  constructor(props) {
    super(props)
    
    // we put on state the properties we want to use and modify in the component
    this.state = {
      numberOfGuests: this.props.model.getNumberOfGuests()
    }
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
    //console.log(modelInstance.title)
    this.setState({
      numberOfGuests: this.props.model.getNumberOfGuests()
    })
  }

  // our handler for the input's on change event
  onNumberOfGuestsChanged = (e) => {
    this.props.model.setNumberOfGuests(+e.target.value)
    localStorage.setItem("numGuests", this.props.model.getNumberOfGuests());
  }

  //var prices = modelInstance.getSidebarPrices();


  render() {

   var menu = modelInstance.getFullMenu();
    var sidebarMenu = menu.map((dish) =>
    <div className="sidebarMenu">
      <Row>
      <Col xs={12} md={9}>
        {dish.title}
      </Col>
      
        {dish.price * modelInstance.getNumberOfGuests()} <br/>
      
      </Row>
    </div>)

    return (
      <div className="Sidebar">
      <h3>My Dinner </h3>
        <p>
          People: <input value={localStorage.getItem("numGuests")} onChange={this.onNumberOfGuestsChanged}/>
          <br/>
          Total number of guests: {localStorage.getItem("numGuests")}
        </p>
        {sidebarMenu}
        <Link to="/menu">
          <button id="confButton" className="btn" >Confirm Dinner</button>
        </Link>
      </div>
    );
  }
}

export default Sidebar;
