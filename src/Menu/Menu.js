import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import {modelInstance} from '../data/DinnerModel';

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }

  }
 	render() {
	  	var menu = modelInstance.getFullMenu();
	  	console.log("hej")
	  	//console.log();
	    return (
	      <div className="Menu">
	      <h3>hej</h3>
	      </div>
	    );
	}
}

export default Menu;